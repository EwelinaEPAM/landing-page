const schedule = [
  {
    time: '09:00',
    title: 'Doors Open & Morning Coffee',
    desc: 'Registration, badge pickup, and a chance to mingle with other attendees over coffee.',
  },
  {
    time: '10:00',
    title: 'Opening Keynote: Build Together',
    desc: 'Kicking off the day with a look at the power of community-driven development and what we achieve when we work together.',
  },
  {
    time: '11:30',
    title: 'Workshop: Your First Open Source Contribution',
    desc: 'A hands-on session for newcomers to open source. You\'ll submit your first pull request before the session ends.',
  },
  {
    time: '13:00',
    title: 'Lunch & Networking',
    desc: 'Enjoy a catered lunch, meet the speakers, and swap ideas with fellow attendees.',
  },
  {
    time: '14:30',
    title: 'Panel: Careers in Tech — Real Talk',
    desc: 'Four engineers share honest stories about their career journeys, mistakes, pivots, and the advice they wish they\'d had earlier.',
  },
  {
    time: '16:00',
    title: 'Lightning Talks & Closing',
    desc: 'Short punchy 5-minute community talks, followed by raffle prizes and the official close of the event.',
  },
];

function Program() {
  return (
    <section className="program" id="program">
      <div className="container">
        <p className="section-label">Schedule</p>
        <h2>Program</h2>
        <p className="section-sub">September 20, 2026 · Warsaw, Poland</p>
        <div className="timeline">
          {schedule.map((item, i) => (
            <div key={i} className="timeline-item">
              <span className="timeline-time">{item.time}</span>
              <div className="timeline-card">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Program;
