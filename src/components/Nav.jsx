function Nav() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <span className="nav-brand">DevConnect 2026</span>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>About</a></li>
          <li><a href="#program" onClick={(e) => { e.preventDefault(); scrollTo('program'); }}>Program</a></li>
          <li><a href="#speakers" onClick={(e) => { e.preventDefault(); scrollTo('speakers'); }}>Speakers</a></li>
          <li><a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo('faq'); }}>FAQ</a></li>
          <li>
            <button className="btn-primary" onClick={() => scrollTo('registration')}>
              Register Free
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
