function Hero() {
  const scrollToRegistration = () => {
    document.getElementById('registration').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero">
      <div className="container">
        <p className="hero-eyebrow">Community Event · Warsaw, Poland</p>
        <h1>DevConnect<br />Community Meetup</h1>
        <div className="hero-meta">
          <span>📅 September 20, 2026</span>
          <span>📍 Warsaw, Poland</span>
          <span>👥 300+ Attendees</span>
        </div>
        <p className="hero-sub">
          A full day of talks, workshops, and networking for developers, designers,
          and tech enthusiasts. Come learn, share, and grow together.
        </p>
        <button className="btn-hero" onClick={scrollToRegistration}>
          Register Now — It's Free
        </button>
      </div>
    </section>
  );
}

export default Hero;
