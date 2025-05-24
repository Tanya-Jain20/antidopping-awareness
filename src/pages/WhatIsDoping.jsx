import InfoBox from '../components/InfoBox'

export default function WhatIsDoping() {
  return (
    <section id="what-is-doping" className="content-section">
      <h2>What is Doping?</h2>
      <p>Doping refers to the use of prohibited substances...</p>
      
      <InfoBox title="Types of Doping">
        <ul>
          <li><strong>Performance-Enhancing Drugs (PEDs):</strong> Steroids...</li>
          <li><strong>Blood Doping:</strong> Increasing red blood cells...</li>
        </ul>
      </InfoBox>

      <InfoBox title="Common Doping Drugs">
        <ul>
          <li><strong>Anabolic Steroids:</strong> Testosterone...</li>
          <li><strong>Stimulants:</strong> Amphetamines...</li>
        </ul>
      </InfoBox>
    </section>
  )
}