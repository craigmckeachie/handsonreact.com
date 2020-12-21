import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: 'Feature Name',
    imageUrl: 'img/hands-on-react.png',
    description: <>Feature Description</>,
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Free course to help you learn React by writing code. <head />"
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <iframe
            type="text/html"
            width={560}
            height={315}
            src="https://www.youtube.com/embed/VATwnEzWvgk?rel=0"
            frameBorder={0}
            modestbranding={1}
          />

          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>

          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted
              )}
              to={useBaseUrl('docs/')}
            >
              Start Learning
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              <div className={clsx('col col--4', styles.feature)}>
                {/* <div className="text--center">
                  <img className={styles.featureImage} src="" alt="" />
                </div> */}
                <h3>Free</h3>

                <ul>
                  <li>
                    All written material for the course is free and can be used
                    for individual self-paced learning
                  </li>
                  <li>Code along, No Slides</li>
                  <li>
                    To get the experience of private training, purchase the
                    training videos
                  </li>
                </ul>
              </div>
              <div className={clsx('col col--4', styles.feature)}>
                <h3>Up to Date</h3>

                <ul>
                  <li>Focus Function components with Hooks</li>
                  <li>Option to use TypeScript</li>
                  <li>Alternatives to Redux State Management</li>
                  <li>
                    React Testing Library instead of Enzyme to test components
                  </li>
                </ul>
              </div>
              <div className={clsx('col col--4', styles.feature)}>
                <h3>Step-by-Step lab directions</h3>

                <ul>
                  <li>
                    No pausing video and rewinding to figure out what you missed
                  </li>
                  <li>Includes finished code after every lab</li>
                  <li>Option to use TypeScript or JavaScript</li>
                </ul>
              </div>
              <div className={clsx('col col--4', styles.feature)}>
                <h3>Prerequisite Topics Covered</h3>
                <ul>
                  <li>New JavaScript Language Features</li>
                  <li>TypeScript Quickstart</li>
                  <li>npm (package manager)</li>
                </ul>
              </div>
              <div className={clsx('col col--4', styles.feature)}>
                <h3>Comprehensive</h3>
                <ul>
                  <li>
                    In addition to the fundamental React topics, the course
                    includes advanced topics
                  </li>
                  <li>State Management</li>
                  <li>Testing, Performance</li>
                </ul>
              </div>
              <div className={clsx('col col--4', styles.feature)}>
                <h3>Email Course</h3>
                <ul>
                  <li>Send one email every working day</li>
                  <li>One lesson or lab</li>
                  <li>30 minutes to complete</li>
                  <li>Opt In</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section></section>
      </main>
    </Layout>
  );
}

export default Home;
