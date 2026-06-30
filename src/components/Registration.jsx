import { useState } from 'react';

function Registration() {
  const [form, setForm] = useState({ name: '', email: '', company: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Full name is required';
    if (!form.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      errs.email = 'Please enter a valid email address';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="registration" id="registration">
      <div className="container">
        <p className="section-label">Join Us</p>
        <h2>Register for Free</h2>
        <p className="section-sub">Secure your spot — limited seats available</p>

        {submitted ? (
          <div className="success-box">
            <span className="success-icon">🎉</span>
            <h3>You're registered!</h3>
            <p>
              Thanks, <strong>{form.name}</strong>! We'll send confirmation details
              to <strong>{form.email}</strong>.<br />See you on September 20 in Warsaw!
            </p>
          </div>
        ) : (
          <form className="registration-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Jane Smith"
                className={errors.name ? 'has-error' : ''}
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="jane@example.com"
                className={errors.email ? 'has-error' : ''}
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="company">Company / Organisation</label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleChange}
                placeholder="Acme Corp (optional)"
              />
            </div>

            <button type="submit" className="btn-submit">
              Secure My Spot →
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Registration;
