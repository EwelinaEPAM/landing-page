const speakers = [
  {
    initials: 'AK',
    name: 'Anna Kowalska',
    role: 'Community Lead',
    company: 'OpenDev Foundation',
    bio: 'Anna has spent 8 years building developer communities across Europe. She founded three local meetup groups and is a frequent speaker at international conferences.',
  },
  {
    initials: 'MR',
    name: 'Marcus Rivera',
    role: 'Senior Software Engineer',
    company: 'CloudScale',
    bio: 'Marcus specialises in distributed systems and maintains several open source libraries with over 10k GitHub stars. He loves mentoring junior developers.',
  },
  {
    initials: 'SC',
    name: 'Sofia Chen',
    role: 'Developer Advocate',
    company: 'DevHub',
    bio: 'Sofia bridges the gap between product and engineering through workshops and tutorials that have helped thousands of people break into the tech industry.',
  },
  {
    initials: 'PN',
    name: 'Piotr Nowak',
    role: 'Founder & CTO',
    company: 'PolandTech Ventures',
    bio: 'Piotr bootstrapped his first startup at 22 and has since co-founded three tech companies. He is a passionate advocate for the Polish tech ecosystem.',
  },
];

function Speakers() {
  return (
    <section className="speakers" id="speakers">
      <div className="container">
        <p className="section-label">Speakers</p>
        <h2>Meet the Speakers</h2>
        <p className="section-sub">Learn from practitioners who are shaping the tech community</p>
        <div className="speakers-grid">
          {speakers.map((s, i) => (
            <div key={i} className="speaker-card">
              <div className="speaker-avatar">{s.initials}</div>
              <p className="speaker-name">{s.name}</p>
              <p className="speaker-role">
                {s.role}<br />{s.company}
              </p>
              <p className="speaker-bio">{s.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Speakers;
