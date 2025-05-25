import React from "react";

const historyArticles = [
  {
    date: "June 12, 1967",
    title: `"Death in the Saddle" Shocks Cycling World`,
    summary: "British cyclist Tommy Simpson's death highlights amphetamine dangers in sport.",
    img: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=600&q=80",
  },
  {
    date: "October 2, 1988",
    title: "Johnson Stripped of Gold After Positive Test",
    summary: "Ben Johnson's steroid scandal reshapes Olympic drug testing.",
    img: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80",
  },
  {
    date: "November 10, 1999",
    title: "WADA Established to Coordinate Global Anti-Doping",
    summary: "The formation of WADA brings global unity in anti-doping regulation.",
    img: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=600&q=80",
  },
];

export default function HistorySection() {
  return (
    <section className="section">
      <h2 className="section-title">Historical Perspectives</h2>
      <p className="quiz-intro"></p>
      <div className="news-grid">
        {historyArticles.map((article, i) => (
          <div key={i} className="news-article">
            <img src={article.img} alt={article.title} className="section-image" />
            <h3>{article.title}</h3>
            <small>{article.date}</small>
            <p>{article.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
