import React from "react";

export default function SideEffects() {
  return (
    <div className="container">
      <h1>Side Effects and Real-Life Doping Cases</h1>

      <section className="section">
        <h2> Common Side Effects of Doping</h2>
        <ul>
          <li><strong>Cardiovascular Issues:</strong> Increased risk of heart attack, stroke, hypertension, and blood clots due to thickened blood or stress on the heart.</li>
          <li><strong>Liver and Kidney Damage:</strong> Particularly common with long-term use of anabolic steroids, leading to liver tumors or renal failure.</li>
          <li><strong>Hormonal Imbalance:</strong> Disruption of natural hormone production. Women may experience deepened voices or facial hair; men may suffer from reduced testosterone and infertility.</li>
          <li><strong>Mental Health Effects:</strong> Increased aggression ("roid rage"), paranoia, severe mood swings, and even suicidal tendencies.</li>
          <li><strong>Physical Changes:</strong> Severe acne, baldness, rapid weight gain, and stunted growth in adolescents who start doping early.</li>
          <li><strong>Infections:</strong> Sharing needles or poor-quality substances can lead to hepatitis, HIV/AIDS, or sepsis.</li>
        </ul>
      </section>

      <section className="section">
        <h2> Famous Doping Cases</h2>
        <ul>
          <li><strong>Lance Armstrong (Cycling):</strong> Used EPO and blood transfusions in a sophisticated doping scheme. <br />
            <img src="https://images.newscientist.com/wp-content/uploads/2017/06/30171900/gettyimages-51105963.jpg?crop=16:9,smart&width=1200&height=675&upscale=true"
             alt="Lance Armstrong"
             className="section-image" />
          </li>
          <li><strong>Ben Johnson (Track & Field):</strong> After winning gold at the 1988 Olympics, he tested positive for Stanozolol. <br />
            <img src="https://s.yimg.com/ny/api/res/1.2/dkD0pziVrW4M2UwFGFWetg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQzMw--/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/9c752f8b9c77953799d561b2999a9cc7"
             alt="Ben Johnson "
             className="section-image" />
          </li>
          <li><strong>Maria Sharapova (Tennis):</strong> Admitted to using Meldonium after it was banned, receiving a 15-month suspension. <br />
            <img src="https://static01.nyt.com/images/2016/10/04/sports/04SHARAPOVA1/04SHARAPOVA1-videoSixteenByNineJumbo1600.jpg"  
             alt="Maria Sharapova "
            className="section-image" />
          </li>
          <li><strong>Russian State-Sponsored Doping:</strong> Massive operation involving tampering with lab results and state support; led to bans at the Olympics. <br />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIW_y9n7CJ8C3RNpPBJmiK6lqAd0Kfrx9hrA&s" 
                          alt="Russian State-Sponsored Doping "

             className="section-image"/>
          </li>
          <li><strong>Justin Gatlin (Track):</strong> Faced two doping bans over his career, including a 4-year suspension. Returned to win medals later, sparking controversy.</li>
          <li><strong>Diego Maradona (Football):</strong> Tested positive for ephedrine during the 1994 World Cup, leading to suspension.</li>
        </ul>
      </section>

      <section className="section">
        <h2>Lessons from These Cases</h2>
        <p>
          These high-profile doping scandals reveal that even elite athletes face immense pressure to perform, often leading them to make unethical choices. However, the consequences are severe—ranging from bans and stripped titles to long-term health damage.
        </p>
        <p>
          Education, awareness, and strict enforcement by anti-doping agencies are crucial to promote clean sport and protect athletes from harmful choices.
        </p>
      </section>
    </div>
  );
}