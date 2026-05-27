import Head from 'next/head';

export default function MedicalDisclaimer() {
  return (
    <>
      <Head>
        <title>Medical Disclaimer - Christian Miracle Hospital</title>
        <meta name="description" content="Medical disclaimer for Christian Miracle Hospital. Information on this website is for educational purposes and does not replace professional medical advice." />
      </Head>
      <main>
        <h1>Medical Disclaimer</h1>
        <p>The information provided by Christian Miracle Hospital on this website is for general informational and educational purposes only.</p>
        <p>All information provided on this site is presented in good faith, but we make no representation or warranty of any kind regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information.</p>
        <p>This website is not intended to provide specific medical advice. You should not rely solely on any information provided herein for your health or medical needs. Always consult with a qualified healthcare professional for diagnosis and treatment of any medical condition.</p>
        <p>If you are experiencing a medical emergency, please contact your local emergency services immediately.</p>
      </main>
      <footer>
        <p>Need prayer and comfort resources before or after surgery? Visit <a href="https://diasozo-hub.vercel.app">Diasozo Surgery Recovery & Comfort Hub</a>.</p>
      </footer>
    </>
  );
}
