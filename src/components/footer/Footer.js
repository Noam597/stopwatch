import { FaGithub } from "react-icons/fa";
import styles from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h2>
        Created By Noam Harris <a href="https://github.com/Noam597/stopwatch" target='_blank'><FaGithub /></a>
      </h2>
    </footer>
  );
};

export default Footer;
