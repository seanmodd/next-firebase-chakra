import Head from 'next/head';
import Card from 'react-bootstrap/Card';

import { Heading, Text } from '@chakra-ui/react';
import styles from 'styles/Home.module.css';
import Link from 'next/link';
import { Button } from 'react-bootstrap';

// import '@fontsource/poppins';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}> */}
      <Card className="text-center p-3">
        <Heading color="brand.700">Welcome to nextjs</Heading>
        <Text>Hello Bro</Text>

        {/* <Button>idk</Button> */}
        <Button>
          <Link href="/classes">Click Me</Link>
        </Button>
      </Card>
    </div>
  );
}
