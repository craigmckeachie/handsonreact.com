import React from 'react';

function EmailSignup() {
  return (
    <div>
      <form
        action="https://email.funnyant.com/subscribe"
        method="POST"
        acceptCharset="utf-8"
      >
        <p>One email every other work day with a short lesson.</p>
        <label className="hidden" htmlFor="email">
          Email Address
        </label>

        <input
          className="form-control"
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
        />
        <input
          className="button  button--secondary button--lg"
          type="submit"
          name="submit"
          value="Sign Up"
          id="submit"
        />
        <br />
        <p
          className="g-recaptcha"
          data-sitekey="6Lcp0AcaAAAAAHQPmlo8e744TCle4YdPC7rYECg3"
        />
        <div style={{ display: 'none' }}>
          <label htmlFor="hp">HP</label>
          <br />
          <input type="text" name="hp" id="hp" />
        </div>
        <input
          type="hidden"
          name="list"
          defaultValue="z7639TTHF7nPlEMpaPmYM7XQ"
        />
        <input type="hidden" name="subform" value="yes" />
      </form>
    </div>
  );
}

export default EmailSignup;
