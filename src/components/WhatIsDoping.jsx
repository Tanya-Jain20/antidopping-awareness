import React from "react";
import "../styles.css";

export default function WhatIsDoping() {
  return (
    <div className="container">
      <h1 className="page-title">What is Doping?</h1>
<img
          src="https://media.gettyimages.com/id/1155267780/photo/doping-conceptual-illustration.jpg?s=612x612&w=0&k=20&c=vPXHDEqAPk15hE0YS01dsE1EmDTk2APRIpy5BIhHdJI="
                    

          alt="Performance Enhancement"
          className="section-image"
        />
      <section className="section">
        <p className="intro-text">
Doping in athletes refers to the use of banned substances or methods to improve physical performance. It includes taking drugs like steroids, hormones, or stimulants that artificially boost strength, endurance, or recovery. Doping is considered cheating and is strictly prohibited in sports. It gives athletes an unfair advantage and undermines the spirit of fair competition. Common doping methods include anabolic steroids, blood doping, and the use of EPO. Besides being unethical, it poses serious health risks like heart problems, hormonal issues, and organ damage. Anti-doping agencies conduct regular testing to detect and prevent such practices.        </p>
        
      </section>

      <section className="section">
        <h2 className="section-title">Types of Doping Substances</h2>

        <div className="doping-type">
          <h3>1. Anabolic Agents</h3>
          <ul>
            <li><strong>What they do:</strong> Increase muscle mass and strength.</li>
            <li><strong>Examples:</strong> Testosterone, Nandrolone, Stanozolol.</li>
            <li><strong>Risks:</strong> Liver damage, infertility, mood disorders.</li>
          </ul>
        </div>

        <div className="doping-type">
          <h3>2. Peptide Hormones, Growth Factors</h3>
          <ul>
            <li><strong>What they do:</strong> Stimulate muscle growth, recovery, and endurance.</li>
            <li><strong>Examples:</strong> Erythropoietin (EPO), Human Growth Hormone (HGH), Insulin-like Growth Factor (IGF-1).</li>
            <li><strong>Risks:</strong> Heart problems, diabetes, hormonal imbalances.</li>
          </ul>
        </div>

        <div className="doping-type">
          <h3>3. Beta-2 Agonists</h3>
          <ul>
            <li><strong>What they do:</strong> Open airways, sometimes used for asthma; may enhance muscle mass in large doses.</li>
            <li><strong>Examples:</strong> Salbutamol, Clenbuterol.</li>
            <li><strong>Risks:</strong> Heart issues, tremors, anxiety.</li>
          </ul>
        </div>

        <div className="doping-type">
          <h3>4. Hormone and Metabolic Modulators</h3>
          <ul>
            <li><strong>What they do:</strong> Boost testosterone production or alter metabolism.</li>
            <li><strong>Examples:</strong> Tamoxifen, Aromatase inhibitors.</li>
            <li><strong>Risks:</strong> Hormonal imbalance, liver toxicity.</li>
          </ul>
        </div>

        <div className="doping-type">
          <h3>5. Diuretics and Masking Agents</h3>
          <ul>
            <li><strong>What they do:</strong> Flush out evidence of doping substances from the body.</li>
            <li><strong>Examples:</strong> Furosemide, Probenecid.</li>
            <li><strong>Risks:</strong> Dehydration, electrolyte imbalance.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Methods of Doping</h2>

        <div className="doping-method">
          <h3>Blood Doping</h3>
          <ul>
            <li>Involves transfusing blood or using EPO to increase red blood cells.</li>
            <li>Boosts oxygen delivery to muscles → better endurance.</li>
            <li><strong>Risks:</strong> Blood clots, heart failure, stroke.</li>
          </ul>
        </div>

        <div className="doping-method">
          <h3>Gene Doping</h3>
          <ul>
            <li>Inserting genes to enhance performance (experimental and banned).</li>
            <li><strong>Risks:</strong> Cancer, immune reactions.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title">Anti-Doping Measures</h2>
        <p><strong>Conducted by:</strong></p>
        <ul>
          <li>World Anti-Doping Agency (WADA)</li>
          <li>National Anti-Doping Organizations (NADOs)</li>
        </ul>
        <p><strong>Common Measures:</strong></p>
        <ul>
          <li>Random drug tests (in and out of competition)</li>
          <li>Biological passports (monitor biomarkers over time)</li>
          <li>Strict liability (athletes are responsible for what they ingest)</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="section-title"> Famous Doping Scandals</h2>
        <ul>
          <li><strong>Lance Armstrong (Cycling):</strong> Used EPO and blood doping; stripped of 7 Tour de France titles.</li>
          <li><strong>Ben Johnson (Sprinter):</strong> Tested positive for Stanozolol in 1988 Olympics.</li>
          <li><strong>Russian State-Sponsored Doping:</strong> Systematic doping exposed by WADA; major bans from Olympics and world events.</li>
        </ul>
      </section>
    </div>
  );
}