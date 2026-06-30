function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <p className="section-label">About</p>
        <h2>What is DevConnect?</h2>
        <div className="about-text">
          <p>
            DevConnect Community Meetup is a one-day event bringing together passionate developers,
            designers, and tech enthusiasts from across Poland and beyond. Whether you're just starting
            your tech journey or have years of experience, this is your place.
          </p>
          <p>
            Our goal is simple: create a welcoming space where people share knowledge, spark
            conversations, and build lasting connections. Expect inspiring talks, hands-on workshops,
            and plenty of time to meet amazing people over great coffee.
          </p>
          <p>
            This year's theme is <strong>"Build Together"</strong> — celebrating the power of
            community, open source, and collaborative innovation. All skill levels welcome.
          </p>
        </div>
        <div className="about-highlights">
          <div className="highlight-card">
            <div className="highlight-icon">🎤</div>
            <h3>8+</h3>
            <p>Expert Speakers</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🛠️</div>
            <h3>3</h3>
            <p>Hands-on Workshops</p>
          </div>
          <div className="highlight-card">
            <div className="highlight-icon">🤝</div>
            <h3>300+</h3>
            <p>Attendees Expected</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
