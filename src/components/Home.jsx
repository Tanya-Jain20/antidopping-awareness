import React, { useEffect, useState } from "react";

import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import HistorySection from "./HistorySection";
import Footer from "./Footer";

const newsData = [
  {
    id: 1,
    title: "High-Profile Athlete Suspended for Doping",
    date: "2025-04-10",
    summary:
      "A well-known athlete was suspended after failing doping tests. Promoting clean sport remains crucial.",
  },
  {
    id: 2,
    title: "New Anti-Doping Testing Technology Released",
    date: "2025-03-15",
    summary:
      "Latest innovations in detection methods help keep sports fair and safe for all competitors.",
  },
  {
    id: 3,
    title: "Global Anti-Doping Education Initiatives Launched",
    date: "2025-02-28",
    summary:
      "Educational campaigns targeting young athletes help build awareness and prevent doping.",
  },
];

export default function Home() {
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
   
      <HeroSection />
    

<section className="video-section">
  <h2>Watch Our Anti-Doping Awareness Videos</h2>
  <div className="video-grid">
    <div className="video-wrapper">
      <iframe src="https://www.youtube.com/embed/4rUpX3QSPmw" title="Video 1" allowFullScreen></iframe>
    </div>
    <div className="video-wrapper">
      <iframe src="https://www.youtube.com/embed/_PXMmFMbqx0" title="Video 2" allowFullScreen></iframe>
    </div>
    <div className="video-wrapper">
      <iframe src="https://www.youtube.com/embed/MIfa64Bdtlk" title="Video 3" allowFullScreen></iframe>
    </div>
  </div>
</section>


      <FeaturesSection />
      <HistorySection />
    

      <section className="news-slider section">
<h2 className="section-title">Latest Anti-Doping News</h2>
        <div className="news-card">
          <h3>{newsData[currentNewsIndex].title}</h3>
          <time dateTime={newsData[currentNewsIndex].date}>
            {new Date(newsData[currentNewsIndex].date).toLocaleDateString()}
          </time>
          <p>{newsData[currentNewsIndex].summary}</p>
        </div>
        <div className="news-controls">
          {newsData.map((_, idx) => (
            <button
              key={idx}
              className={`dot ${idx === currentNewsIndex ? "active" : ""}`}
              onClick={() => setCurrentNewsIndex(idx)}
              aria-label={`Show news ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
