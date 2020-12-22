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
          src="https://dc254fa5.sibforms.com/serve/MUIEAIdxTUrh-u3oNTRQ4cLsa4P9Qrbmhp2mDC4VQuvaZkaAdb7Owf--Taga6kfShZC2xQA2K01jXF_Jl27WL1olotgBqPyieEKl4pXrzsaKz9_ein1wfZndJvJlta-8nPGEofUMHofXZaUrdWoaqC9LibvbebjteMiPkwCWUhW4toIJC_VrcI6BkuUh5-zybAtC8wIYlcn8uxrt"
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
