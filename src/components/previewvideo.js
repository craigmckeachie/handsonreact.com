import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import clsx from 'clsx';

function PreviewVideo() {
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
            href="https://courses.funnyant.com/courses/hands-on-react/lectures/27726435?wvideo=4yizcd8ivs"
          >
            <img
              src="https://cdn.filestackcontent.com/h85AaHTaWUpNBOXMz9QC"
              width="400"
              height="225"
              style={{ width: '400px', height: '225px' }}
            />
          </a>
        </div>
        <div className="col col--5">
          <h4>Video Preview</h4>

          <small>
            <ul>
              <li>This video is available as a FREE preview to watch</li>
              <li>
                All written material for the course is free and can be used for
                individual self-paced learning
              </li>
              <li>
                The corresponding video training is available for purchase
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

export default PreviewVideo;
