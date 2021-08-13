import Head from 'next/head';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import styles from 'styles/Home.module.css';
import { useUser } from 'firebase/useUser';
import { Heading, Text } from '@chakra-ui/react';
import WriteToCloudFirestore from '@/cloudFirestore/Write';
import ReadDataFromCloudFirestore from '@/cloudFirestore/Read';
import Counter from '@/realtimeDatabase/Counter';
import UploadFile from '@/storage/UploadFile';
// import '@fontsource/poppins';

export default function Home() {
  const { user, logout } = useUser();

  if (user) {
    return (
      <div className={styles.container}>
        <Card>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>{user.email}</Card.Text>
            <hr />
            {user.profilePic ? (
              <image src={user.profilePic} height={100} width={100} />
            ) : (
              <p>No profile pic</p>
            )}
            <hr />
            <WriteToCloudFirestore />
            <ReadDataFromCloudFirestore />
            <hr />
            <Counter id={user.id} />
            <hr />
            <UploadFile />
            <hr />
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Button onClick={() => logout()} style={{ width: '100px' }}>
                Log Out
              </Button>
              <a
                href="https://github.com/bjcarlson42/nextjs-with-firebase"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="outline-secondary" style={{ width: '100px' }}>
                  Code
                </Button>
              </a>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <p>
        <a href="/auth">Log In!</a>
      </p>

      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <main className={styles.main}> */}
      <Heading color="brand.700">Welcome to nextjs</Heading>
      <Text>Hello Bro</Text>
      <Heading className="header">WOw</Heading>
      <Heading>WOw</Heading>
      <Button>Click Me</Button>
      <button>nice</button>
      <a>here</a>
      {/* </main> */}
    </div>
  );
}
