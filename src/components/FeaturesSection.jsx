import React from "react";

const features = [
  { icon: "fas fa-mobile-alt", title: "Mobile Learning", desc: "Interactive courses and quizzes accessible on any device, anytime." },
  { icon: "fas fa-robot", title: "AI Chat Assistant", desc: "24/7 answers on doping rules and exceptions." },
  { icon: "fas fa-chart-line", title: "Data Analytics", desc: "Track engagement and improve education methods." },
  { icon: "fas fa-globe", title: "Multilingual Support", desc: "Available in 15 languages with local adaptations." },
  { icon: "fas fa-bell", title: "Real-time Updates", desc: "Instant alerts on rule changes and enforcement news." },
];

export default function FeaturesSection() {
  return (
    <section className="section">
      <h2 className="section-title">Our Digital Approach</h2>
      <div className="values-section">
        <div className="values-grid">
          {features.map((feat, i) => (
            <div key={i} className="value-card">
              <i className={feat.icon} style={{ fontSize: "2rem", marginBottom: "0.8rem" }}></i>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
