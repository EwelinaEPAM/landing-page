import { useState } from 'react';

const faqs = [
  {
    q: 'Is the event free to attend?',
    a: 'Yes! DevConnect Community Meetup is completely free. We believe knowledge and community should be accessible to everyone. Just register and show up.',
  },
  {
    q: 'Do I need any prior experience to attend?',
    a: 'Not at all. This event welcomes everyone — from absolute beginners curious about tech to seasoned engineers. The programme has something valuable for all skill levels.',
  },
  {
    q: 'Will the talks be recorded?',
    a: 'Yes, most talks will be recorded and published on our YouTube channel within two weeks of the event. Workshops are hands-on only and will not be recorded.',
  },
  {
    q: 'What should I bring?',
    a: 'Your curiosity and an open mind! If you plan to join the workshop, bring your laptop. Everything else — including lunch — is provided on the day.',
  },
  {
    q: 'How do I get to the venue?',
    a: 'The venue is centrally located in Warsaw and easily reachable by public transport. Detailed directions and parking information will be sent to all registered attendees one week before the event.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq" id="faq">
      <div className="container">
        <p className="section-label">FAQ</p>
        <h2>Frequently Asked Questions</h2>
        <p className="section-sub">Got more questions? Reach us at hello@devconnect.community</p>
        <div className="faq-list">
          {faqs.map((item, i) => (
            <div key={i} className="faq-item">
              <button
                className="faq-question"
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
              >
                <span>{item.q}</span>
                <span className={`faq-icon${openIndex === i ? ' open' : ''}`}>+</span>
              </button>
              {openIndex === i && (
                <p className="faq-answer">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
