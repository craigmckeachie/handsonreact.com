import React from 'react';
import EmailSignup from '../components/emailsignup';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';

function EmailCourse() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Sign up for our free email course. "
    >
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">Email Course</h1>
          <h2 className="hero__subtitle">Sign up for FREE to learn React</h2>

          <section className="">
            <EmailSignup />
          </section>
        </div>
      </header>
    </Layout>
  );
}

export default EmailCourse;
