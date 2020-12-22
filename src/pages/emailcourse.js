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
      <main className={styles.page}>
        <iframe
          width={720}
          height={610}
          src="https://dc254fa5.sibforms.com/serve/MUIEALyaDZlXzcdw7h4OQJaptB8gzf3mHwO8R3zXKms-lxP-32t2u2-yUoPeWjHzfs9Wa_NxK7VtFL6zJHC35_Q1uV79bLZZ_PlnC-xbdxCGaAe4IgHUkjDAL0T4yQVqoj86CRZKb-35mdUKdj2ZGHt5Zfv9UWEGDo2uNt_aTC3NONIqEa0dA2a7uCBm7mfntXohTyyKvRjAWiRE"
          frameBorder={0}
          scrolling="auto"
          allowFullScreen
          style={{
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '100%',
          }}
        />
      </main>
    </Layout>
  );
}

export default EmailCourse;
