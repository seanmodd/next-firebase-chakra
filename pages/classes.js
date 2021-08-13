import { Heading } from '@chakra-ui/layout';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

const Classes = () => {
  const [item, setItem] = useState([]);

  return (
    <div>
      <Heading className={styles.container}>Classes page</Heading>
    </div>
  );
};

export default Classes;
