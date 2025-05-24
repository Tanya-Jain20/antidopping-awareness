import InfoBox from '../components/InfoBox';

export default function WhatIsDoping() {
  return (
    <section id="what-is-doping" className="content-section">
      <h2>What is Doping?</h2>
      <p>Doping refers to the use of prohibited substances or methods to enhance athletic performance.</p>
      
      <InfoBox title="Types of Doping">
        <ul>
          <li><strong>Performance-Enhancing Drugs (PEDs):</strong> Steroids, stimulants, and hormones.</li>
          <li><strong>Blood Doping:</strong> Increasing red blood cells to improve oxygen delivery.</li>
          <li><strong>Gene Doping:</strong> Altering genes to enhance performance.</li>
        </ul>
      </InfoBox>

      <InfoBox title="Common Doping Drugs">
        <ul>
          <li><strong>Anabolic Steroids:</strong> Testosterone, nandrolone</li>
          <li><strong>Stimulants:</strong> Amphetamines, cocaine</li>
          <li><strong>Hormones:</strong> EPO, HGH</li>
          <li><strong>Diuretics:</strong> Used to mask other drugs</li>
        </ul>
      </InfoBox>
    </section>
  );
}