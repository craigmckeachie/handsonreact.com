import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import clsx from 'clsx';

// function UnlockVideo({ title }) {
//   const playUrl = useBaseUrl('static/img/play-outline.svg');
//   return (
//     <button
//       className={'button button--outline button--primary button--lg shadow--sm'}
//       style={{
//         display: 'flex',
//         alignItems: 'center',
//         backgroundColor: 'var(--ifm-menu-color-background-active)',
//         marginBottom: '30px',
//         paddingLeft: '1REM',
//         paddingRight: '1REM',
//       }}
//     >
//       <img
//         style={{
//           height: '30px',
//           width: '30px',
//           marginRight: '',
//         }}
//         src={playUrl}
//         alt="Play Button"
//       />
//       <span style={{ fontSize: '70%', fontWeight: 'lighter', margin: '10px' }}>
//         Unlock video to watch
//       </span>{' '}
//       <p
//         style={{
//           fontSize: '70%',
//           fontWeight: 'lighter',
//           margin: '10px',
//           display: 'none',
//         }}
//       >
//         To watch this video you need to do this and that and the content is
//         free.
//       </p>
//     </button>
//   );
// }

// function UnlockVideo({ title }) {
//   const playUrl = useBaseUrl('static/img/play-outline.svg');
//   return (
//     <div className="row">
//       <div className="col col--9">
//         <div
//           className="card card--info shadow--md"
//           style={{ marginBottom: '15px' }}
//         >
//           <div className="card__header">
//             <h3>Why React?</h3>
//           </div>
//           <div className="card__body"></div>
//           <div className="card__image"></div>

//           <div className="card__footer">
//             <button className="button button--secondary button--block">
//               <svg
//                 height="24"
//                 width="24"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                 />
//               </svg>
//               Unlock video to watch
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function UnlockVideo({ title }) {
//   return (
//     <div className="row">
//       <div className="col col--9" style={{ marginBottom: '15px' }}>
//         <video
//           width="320"
//           height="240"
//           poster={useBaseUrl('static/img/lock-closed.svg')}
//           controls
//         >
//           Your browser does not support the video tag.
//         </video>
//       </div>
//     </div>
//   );
// }

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
            href="https://sso.teachable.com/secure/634201/checkout/2315712/comprehensive-react"
          >
            <div
              className="card"
              style={{
                opacity: '.4',
                backgroundColor: 'var(--ifm-menu-color-background-active)',
              }}
            >
              <div
                className="card__image"
                style={{ textAlign: 'center', marginTop: '70px' }}
              >
                <img
                  src={useBaseUrl('static/img/lock-closed.svg')}
                  alt="Lock Closed"
                  title="Lock Closed"
                />
              </div>
              <div className="card__body" style={{ textAlign: 'center' }}>
                <h3>{title}</h3>
              </div>
              <div
                className="card__footer"
                style={{
                  borderTop:
                    '1px solid var(--ifm-menu-color-background-active)',
                }}
              >
                {/* <button class="button button--primary button--block">Visit</button> */}
                <img
                  src={useBaseUrl('static/img/play-outline.svg')}
                  alt="play button"
                  style={{ opacity: '.5' }}
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
            href="https://sso.teachable.com/secure/634201/checkout/2315712/comprehensive-react"
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
