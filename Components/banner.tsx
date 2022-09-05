import React, { MouseEventHandler } from 'react';
import styles from '../styles/banner.module.css'

type BannerPropsType = {
    buttonText : string
    handleClick : MouseEventHandler<HTMLButtonElement>
}

const Banner = ({buttonText , handleClick} : BannerPropsType) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                <span className={styles.title1}>Coffee </span>
                <span className={styles.title2}>Connoisseur</span>   
            </h1>
            <p className={styles.subtitle}>Discover your local coffee shops</p>
            <button className={styles.button} onClick={handleClick}>{buttonText}</button>
        </div>
    );
};

export default Banner;