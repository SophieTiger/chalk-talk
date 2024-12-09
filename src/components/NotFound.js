import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/NotFound.module.css';
import Asset from './Asset';
import NoResults from "../assets/no-results.png";

const NotFound = () => {
    return (
      <div className={styles.NotFound}>
        <Asset 
          src={NoResults} 
          message={
            <>
              <h1>404 - Page Not Found</h1>
              <p>Oops! The page you're looking for doesn't exist.</p>
              <Link to="/" className={styles.HomeLink}>
                Go back to homepage
              </Link>
            </>
          }
        />
      </div>
    );
  };
  
  export default NotFound;
