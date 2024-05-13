import Image from "next/image";
import Head from 'next/head'
import '@fontsource/inter';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
/>
      <meta name="viewport" content="initial-scale=1, width=device-width" />


      </Head>

      <p>Hello there</p>
    </div>
  );
}
