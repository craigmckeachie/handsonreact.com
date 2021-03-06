import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function About() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Free course to help you learn React by writing code. "
    >
      <main className={styles.page}>
        <div className="container">
          <div className="row">
            <article>
              <h1>About</h1>
              <img
                className={styles.profileImage}
                src={useBaseUrl('img/craig-mckeachie-headshot.jpg')}
              />
              <h3>Hi, I’m Craig McKeachie. ​</h3>
              <p>
                I have been a professional <strong>software developer</strong>{' '}
                for over <strong>20 years</strong>. I like to say that I had a
                mid-life crisis, but instead of buying a sports car, I quit my
                job and{' '}
                <strong>wrote a book about JavaScript frameworks</strong>.
              </p>
              <p></p>
              <p>
                <em>The JavaScript Framework Guide </em> was about the first
                generation of frameworks and included AngularJS, Backbone, and
                Ember. After writing the book, I was contacted by several
                training companies who asked if I wanted to{' '}
                <strong>try on-site training</strong>. I accepted and found that
                I really enjoyed teaching, but, at first, I wasn't very good. I
                was new to training and the manuals I used weren't great.
                However, over time I worked at it and ultimately{' '}
                <strong>
                  became an independent trainer and consultant specializing in
                  React and Angular
                </strong>
                .
              </p>

              <p>
                I{' '}
                <strong>
                  traveled across the United States and helped smart developers
                </strong>
                <em> like yourself</em> get up to speed quickly on new
                JavaScript libraries and frameworks like React and Angular.
              </p>
              <p>
                Fast-forward to today, and{' '}
                <strong>
                  I've successfully delivered training to thousands of
                  developers
                </strong>{' '}
                on JavaScript frameworks/libraries including <code>React</code>{' '}
                and <code>Angular</code>. My{' '}
                <strong>average rating from students is 9.5 out of 10</strong>.
              </p>
              <p>
                Now <strong>I want to</strong> use my experience to{' '}
                <strong>help you learn</strong> these technologies.
              </p>
            </article>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default About;
