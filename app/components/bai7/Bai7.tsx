import React from 'react';
import styles from './bai7.module.css';

const Bai7 = ({ type = 'primary', children="Primary", ...props } :any) => {
    return (
        <button className={`${styles.button} ${styles[type]}`} {...props}>{children}</button>

    );
};

export default Bai7;