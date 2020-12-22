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
          src="https://dc254fa5.sibforms.com/serve/MUIEABiW4Ks-dYn9jdBS8yv1svwyyxaR9dvvHfb__7cuAag1Emks4d3lQefDL_PqHIkDvfKGxcaxYIZKVoU34uv8T1kH_MSMKCbT-8Etbty5zmFAwsrSuK6HLNtgGOecv_r2S7-LU08p57goEH9OQCLKFmROo8-mtJmtNMlGVrRgqQ4hQFIpYKYDwLT2gWL2sUeJv598sBQ5Sob9"
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
