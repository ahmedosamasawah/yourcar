import classes from './MenuBar.module.css';
import { Flex } from '@chakra-ui/react';

export default function MenuBar() {
  return (
    <Flex className={classes.menu}>
      <ul className={classes.ul}>
        <li>
          <a href="#heroSec">Home</a>
        </li>
        <li>
          <a href="#aboutSec">About</a>
        </li>
        <li>
          <a href="#servicesSec">Services</a>
        </li>
        <li>
          <a href="#carsSec">Cars</a>
        </li>
        <li>
          <a href="#footer">Contact </a>
        </li>
      </ul>
    </Flex>
  );
}
