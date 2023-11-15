import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Test = () => {
  const [activeLink, setActiveLink] = useState('creosEvents'); // Initialize active link state

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName); // Update active link state based on clicked link
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navLinks}>
        <Link
          className={`${styles.link} ${
            activeLink === 'creosEvents' ? styles.active : ''
          }`}
          to='/'
          onClick={() => handleLinkClick('creosEvents')}
        >
          Creos Events
        </Link>
        <div className={styles.divider}></div>
        <Link
          className={`${styles.link} ${
            activeLink === 'browseEvents' ? styles.active : ''
          }`}
          to='/browse-events'
          onClick={() => handleLinkClick('browseEvents')}
        >
          Browse Events
        </Link>
      </div>
    </div>
  );
};

export default Test;
