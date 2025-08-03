// src/pages/Experience.js
import React from 'react';

const Experience = () => {
  return (
    <div style={{ padding: '2rem', color: '#333' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Professional Experience</h1>

      {/* Optum Experience */}
      <div style={{ marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.5rem' }}>Software Engineer – Optum (UnitedHealth Group)</h2>
        <p><em>Hyderabad, India | June 2022 – July 2023</em></p>
        <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
          <li>Led the end-to-end development of internal business dashboards used by operations and analytics teams, significantly reducing dependency on manual Excel reports and cutting data access times in half.</li>
          <li>Designed and implemented robust backend services to handle data exchange between internal tools and third-party systems, using both RESTful and SOAP-based communication protocols to ensure compatibility and security.</li>
          <li>Contributed to the design and rollout of cloud-based processing workflows that automatically triggered actions based on real-time data events, improving response times and reducing operational latency.</li>
          <li>Enhanced the performance of the user interface by implementing route-level caching and optimizing asset bundling, resulting in faster load times and a smoother user experience.</li>
          <li>Automated software delivery pipelines and containerized environments to accelerate development cycles, reduce manual deployment effort, and ensure consistent build quality across staging and production.</li>
          <li>Maintained comprehensive automated testing frameworks for both backend and frontend components, while also resolving low-level network issues that impacted data transfer and application stability.</li>
          <li>Worked closely with cross-functional teams including product, design, and QA to meet strict accessibility guidelines and participated in architectural discussions to ensure scalable system growth.</li>
        </ul>
      </div>

      {/* HPE Experience */}
      <div>
        <h2 style={{ fontSize: '1.5rem' }}>Software Engineer – Hewlett Packard Enterprise (HPE)</h2>
        <p><em>Remote | June 2021 – May 2022</em></p>
        <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
          <li>Contributed to the development of an enterprise-grade device management platform supporting thousands of business clients and processing telemetry data from over 100,000 devices daily.</li>
          <li>Refactored the frontend architecture to leverage modern routing strategies, which reduced page navigation time and improved perceived performance for end users.</li>
          <li>Collaborated on optimizing backend workflows responsible for data processing and alert generation, significantly decreasing system latency and improving responsiveness under load.</li>
          <li>Implemented asynchronous task management and fine-tuned database queries to increase throughput and support increased data volume without degradation in performance.</li>
          <li>Played a key role in standardizing deployment practices through containerization and continuous integration pipelines, which improved team velocity and deployment reliability.</li>
          <li>Developed internal developer tools and debugging utilities that enhanced issue triaging and reduced the time required to reproduce and fix bugs, improving customer satisfaction.</li>
          <li>Participated in long-term scalability planning efforts that anticipated and supported substantial increases in user load and device volume, ensuring high availability and system resilience.</li>
        </ul>
      </div>
    </div>
  );
};

export default Experience;
