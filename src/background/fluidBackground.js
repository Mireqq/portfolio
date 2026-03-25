// src/background/fluidBackground.js
import * as THREE from "three";
import { vertexShader, fluidShader, displayShader } from "./shaders";

export default function initFluidBackground(container) {
  // const config = {
  //   brushSize: 35.0,
  //   brushStrength: 0.8,
  //   distortionAmount: 2.5,
  //   fluidDecay: 0.98,
  //   trailLength: 0.8,
  //   stopDecay: 0.85,
  //   brushRadius: 40.0,
  //   color1: "#b8fff7",
  //   color2: "#6e3466",
  //   color3: "#0133ff",
  //   color4: "#66d1fe",
  //   colorIntensity: 1.0,
  //   softness: 1.0,
  // };
  // const config = {
  //   brushSize: 24.0,
  //   brushStrength: 0.35,
  //   distortionAmount: 0.8,
  //   fluidDecay: 0.99,
  //   trailLength: 0.45,
  //   stopDecay: 0.92,
  //   brushRadius: 28.0,
  //   color1: "#88bfd1",
  //   color2: "#3c3552",
  //   color3: "#1a3594",
  //   color4: "#6ea8c9",
  //   colorIntensity: 0.45,
  //   softness: 1.5,
  // };
  const config = {
    brushSize: 24.0,
    brushStrength: 0.35,
    distortionAmount: 0.8,
    fluidDecay: 0.99,
    trailLength: 0.45,
    stopDecay: 0.92,
    brushRadius: 28.0,
    color1: "#0b1220",
    color2: "#111827",
    color3: "#0f172a",
    color4: "#38bdf8",
    colorIntensity: 0.32,
    softness: 1.6,
  };

  function hexToRgb(hex) {
    const r = parseInt(hex.slice(1, 3), 16) / 255;
    const g = parseInt(hex.slice(3, 5), 16) / 255;
    const b = parseInt(hex.slice(5, 7), 16) / 255;
    return [r, g, b];
  }

  // --- Three init
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const renderer = new THREE.WebGLRenderer({ antialias: true });

  const gradientCanvas = container; // ✅ React passes this in
  gradientCanvas.innerHTML = ""; // ✅ avoid duplicate canvases on hot reload
  gradientCanvas.appendChild(renderer.domElement);

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  // Render targets (ping-pong buffers)
  const fluidTarget1 = new THREE.WebGLRenderTarget(
    window.innerWidth,
    window.innerHeight,
    {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
    },
  );

  const fluidTarget2 = new THREE.WebGLRenderTarget(
    window.innerWidth,
    window.innerHeight,
    {
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      format: THREE.RGBAFormat,
      type: THREE.FloatType,
    },
  );

  let currentFluidTarget = fluidTarget1;
  let previousFluidTarget = fluidTarget2;
  let frameCount = 0;

  // --- Shaders/materials
  const fluidMaterial = new THREE.ShaderMaterial({
    uniforms: {
      iTime: { value: 0 },
      iResolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      iMouse: { value: new THREE.Vector4(0, 0, 0, 0) },
      iFrame: { value: 0 },
      iPreviousFrame: { value: null },

      uBrushSize: { value: config.brushSize },
      uBrushStrength: { value: config.brushStrength },
      uFluidDecay: { value: config.fluidDecay },
      uTrailLength: { value: config.trailLength },
      uStopDecay: { value: config.stopDecay },
      uBrushRadius: { value: 40.0 },
      uBrushColor: { value: new THREE.Vector3(0, 0, 0) },
    },
    vertexShader,
    fragmentShader: fluidShader,
  });

  const displayMaterial = new THREE.ShaderMaterial({
    uniforms: {
      iTime: { value: 0 },
      iResolution: {
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
      },
      iFluid: { value: null },

      uDistortionAmount: { value: config.distortionAmount },
      uColor1: { value: new THREE.Vector3(...hexToRgb(config.color1)) },
      uColor2: { value: new THREE.Vector3(...hexToRgb(config.color2)) },
      uColor3: { value: new THREE.Vector3(...hexToRgb(config.color3)) },
      uColor4: { value: new THREE.Vector3(...hexToRgb(config.color4)) },

      uColorIntensity: { value: config.colorIntensity },
      uSoftness: { value: config.softness },
    },
    vertexShader,
    fragmentShader: displayShader,
  });

  const geometry = new THREE.PlaneGeometry(2, 2);
  const fluidPlane = new THREE.Mesh(geometry, fluidMaterial);
  const displayPlane = new THREE.Mesh(geometry, displayMaterial);

  // --- Mouse interaction (named handlers so we can remove them)
  let mouseX = 0,
    mouseY = 0;
  let prevMouseX = 0,
    prevMouseY = 0;
  let lastMoveTime = 0;

  function onMouseMove(e) {
    const rect = gradientCanvas.getBoundingClientRect();
    prevMouseX = mouseX;
    prevMouseY = mouseY;

    mouseX = e.clientX - rect.left;
    mouseY = rect.height - (e.clientY - rect.top);
    lastMoveTime = performance.now();

    fluidMaterial.uniforms.iMouse.value.set(
      mouseX,
      mouseY,
      prevMouseX,
      prevMouseY,
    );
  }

  function onMouseLeave() {
    fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0);
  }

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseleave", onMouseLeave);

  // --- Resize (named handler)
  function onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(w, h);

    fluidMaterial.uniforms.iResolution.value.set(w, h);
    displayMaterial.uniforms.iResolution.value.set(w, h);

    fluidTarget1.setSize(w, h);
    fluidTarget2.setSize(w, h);

    frameCount = 0;
  }

  window.addEventListener("resize", onResize);

  // --- Loop (store raf id so we can cancel on unmount)
  let rafId = 0;

  function animate() {
    rafId = requestAnimationFrame(animate);

    const time = performance.now() * 0.001;
    fluidMaterial.uniforms.iTime.value = time;
    displayMaterial.uniforms.iTime.value = time;
    fluidMaterial.uniforms.iFrame.value = frameCount;

    if (performance.now() - lastMoveTime > 100) {
      fluidMaterial.uniforms.iMouse.value.set(0, 0, 0, 0);
    }

    fluidMaterial.uniforms.uBrushSize.value = config.brushSize;
    fluidMaterial.uniforms.uBrushStrength.value = config.brushStrength;
    fluidMaterial.uniforms.uFluidDecay.value = config.fluidDecay;
    fluidMaterial.uniforms.uTrailLength.value = config.trailLength;
    fluidMaterial.uniforms.uStopDecay.value = config.stopDecay;
    fluidMaterial.uniforms.uBrushRadius.value = config.brushRadius;

    displayMaterial.uniforms.uDistortionAmount.value = config.distortionAmount;
    displayMaterial.uniforms.uColorIntensity.value = config.colorIntensity;
    displayMaterial.uniforms.uSoftness.value = config.softness;

    displayMaterial.uniforms.uColor1.value.set(...hexToRgb(config.color1));
    displayMaterial.uniforms.uColor2.value.set(...hexToRgb(config.color2));
    displayMaterial.uniforms.uColor3.value.set(...hexToRgb(config.color3));
    displayMaterial.uniforms.uColor4.value.set(...hexToRgb(config.color4));

    // ping-pong
    fluidMaterial.uniforms.iPreviousFrame.value = previousFluidTarget.texture;

    renderer.setRenderTarget(currentFluidTarget);
    renderer.render(fluidPlane, camera);

    displayMaterial.uniforms.iFluid.value = currentFluidTarget.texture;
    renderer.setRenderTarget(null);
    renderer.render(displayPlane, camera);

    const temp = currentFluidTarget;
    currentFluidTarget = previousFluidTarget;
    previousFluidTarget = temp;

    frameCount++;
  }

  animate();

  // ✅ Return cleanup for React unmount (route change)
  return () => {
    cancelAnimationFrame(rafId);

    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseleave", onMouseLeave);
    window.removeEventListener("resize", onResize);

    // dispose GPU resources
    geometry.dispose();
    fluidMaterial.dispose();
    displayMaterial.dispose();
    fluidTarget1.dispose();
    fluidTarget2.dispose();
    renderer.dispose();

    // remove canvas
    if (renderer.domElement?.parentNode) {
      renderer.domElement.parentNode.removeChild(renderer.domElement);
    }
  };
}
