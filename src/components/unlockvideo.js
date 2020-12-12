import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import clsx from 'clsx';

function UnlockVideo({ title }) {
  return (
    <>
      <div className="row">
        <div
          className={clsx('col col--6', styles.callToAction)}
          style={{ marginLeft: '15px' }}
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://sso.teachable.com/secure/634201/checkout/2683198/hands-on-react?coupon_code=EARLY"
          >
            <div
              className="card"
              style={{
                opacity: '1',
                backgroundColor: 'var(--ifm-menu-color-background-active)',
              }}
            >
              <div
                className="card__image"
                style={{ textAlign: 'center', marginTop: '70px' }}
              >
                <img
                  src={useBaseUrl('img/lock-closed.svg')}
                  alt="Lock Closed"
                  title="Lock Closed"
                />
              </div>
              <div className="card__body" style={{ textAlign: 'center' }}>
                <h3
                  style={{
                    color: 'var(--ifm-font-color-base)',
                    marginBottom: '30px',
                  }}
                >
                  {title}
                </h3>
              </div>
              <div
                className="card__footer"
                style={{
                  borderTop:
                    '1px solid var(--ifm-menu-color-background-active)',
                  backgroundColor: 'var(--ifm-link-color)',
                  padding: '10px',
                }}
              >
                {/* <button class="button button--primary button--block">Visit</button> */}
                <img
                  src={useBaseUrl('img/play-outline.svg')}
                  alt="play button"
                  style={{ opacity: '.3' }}
                />
              </div>
            </div>
          </a>
        </div>
        <div className="col col--5">
          <h4>Support this Site</h4>

          <small>
            <ul>
              <li>6 hours of bite-sized videos</li>
              <li>
                All written material for the course is free and can be used for
                individual self-paced learning
              </li>
              <li>
                To get the experience of private training, purchase the videos
              </li>
            </ul>
            <h4>
              Get early access for <del>$199</del> <mark>$99</mark>
            </h4>
          </small>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://sso.teachable.com/secure/634201/checkout/2683198/hands-on-react?coupon_code=EARLY"
            className="button button--primary button--block "
          >
            Buy Early Access
          </a>
        </div>
      </div>
      <hr />
    </>
  );
}

export default UnlockVideo;
