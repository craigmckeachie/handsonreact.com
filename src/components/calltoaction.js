import React from 'react';

function CallToAction() {
  return (
    <div className="admonition admonition-info alert alert--info">
      <div className="admonition-heading">
        <h5>
          <span className="admonition-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="16"
              viewBox="0 0 14 16"
            >
              <path
                fillRule="evenodd"
                d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"
              ></path>
            </svg>
          </span>
          Support this site
        </h5>
      </div>
      <div className="admonition-content">
        <h2>Now in Early Access</h2>
        <p>🔥 Get all the videos for this course</p>
        <h1>
          <span style={{ textDecoration: 'line-through' }}>$149</span> $99
        </h1>
        <div className="button button--outline button--secondary button--lg">
          <a
            href="https://sso.teachable.com/secure/634201/checkout/2683198/hands-on-react?coupon_code=EARLY"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            Buy Early Access
          </a>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
