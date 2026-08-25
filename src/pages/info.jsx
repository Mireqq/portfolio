import React from "react";

export default function Info() {
  return (
    <main className="page">
      <section className="card">
        <h1>Experience & Education</h1>

        {/* PROFESSIONAL SUMMARY */}
        <div style={{ marginBottom: 32 }}>
          <h2>Professional Summary</h2>

          <p className="muted">
            First-Class Computer Science graduate with experience in data
            analysis, operational systems, machine learning and technical
            problem solving. My background combines technical education with
            extensive experience in high-volume operational environments, where
            I have investigated data, system and workflow issues, identified
            root causes and supported process improvements.
          </p>
        </div>

        {/* EXPERIENCE */}
        <div style={{ marginBottom: 32 }}>
          <h2>Professional Experience</h2>

          <div style={{ marginTop: 20 }}>
            <h3>Process Champion / Trainer</h3>
            <p className="muted">Co-op | Jan 2024 – Present</p>

            <ul>
              <li>
                Train and support colleagues on warehouse systems, operational
                processes and accuracy requirements in a high-volume automated
                environment.
              </li>

              <li>
                Investigate recurring stock, system and workflow issues,
                analysing operational data to identify patterns, root causes and
                corrective actions.
              </li>

              <li>
                Analyse recurring operational issues and communicate findings to
                colleagues and supervisors to support process improvements.
              </li>

              <li>
                Act as an experienced point of contact for system and
                operational issues, supporting troubleshooting and issue
                resolution.
              </li>
            </ul>
          </div>

          <div style={{ marginTop: 28 }}>
            <h3>Inventory, Systems & Problem-Solving Operative</h3>
            <p className="muted">Co-op | Dec 2020 – Jan 2024</p>

            <ul>
              <li>
                Analysed stock discrepancies, failed transactions and system
                exceptions using WMS records, scanner data and operational data
                to identify root causes.
              </li>

              <li>
                Performed data validation and inventory checks to identify
                inconsistencies and maintain accurate stock and system records.
              </li>

              <li>
                Identified recurring patterns across system and workflow issues
                and supported corrective actions to improve operational
                processes.
              </li>

              <li>
                Troubleshot system and workflow issues, distinguishing between
                data, technical and operational problems before escalating where
                required.
              </li>

              <li>
                Communicated investigation findings to colleagues and
                supervisors to support issue resolution and prevent recurring
                problems.
              </li>
            </ul>
          </div>

          <div style={{ marginTop: 28 }}>
            <h3>Multi-Skilled Warehouse Operative</h3>
            <p className="muted">Co-op | Dec 2018 – Dec 2020</p>

            <ul>
              <li>
                Cross-trained across multiple warehouse functions, supporting
                changing operational and business priorities.
              </li>

              <li>
                Supported colleagues with processes and system use while
                identifying and escalating operational issues.
              </li>
            </ul>
          </div>

          <div style={{ marginTop: 28 }}>
            <h3>Warehouse Operative</h3>
            <p className="muted">Co-op | Aug 2017 – Dec 2018</p>

            <ul>
              <li>
                Worked across high-volume warehouse operations including
                picking, replenishment, goods-in and dispatch.
              </li>

              <li>
                Used warehouse management systems and handheld scanners to
                process stock movements accurately.
              </li>
            </ul>
          </div>
        </div>

        {/* EDUCATION */}
        <div>
          <h2>Education</h2>

          <div style={{ marginTop: 20 }}>
            <h3>BSc (Hons) Computer Science</h3>

            <p className="muted">University of Greenwich | 2022 – 2025</p>

            <p>
              <strong>First-Class Honours (1:1)</strong>
            </p>

            <p className="muted">
              Relevant areas of study included Machine Learning, Databases,
              Algorithms, Distributed Systems, Advanced Programming, Software
              Engineering, Operating Systems and Computer Networks.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
