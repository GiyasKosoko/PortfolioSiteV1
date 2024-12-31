import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return(
        <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Ada.</h1>
            <p className={styles.description}>
            I'm a full stack developer, blah blah blah. 
            Reach out if you'd like to learn more about me.
            </p>
            <a href="atandagk@outlook.com" className={styles.contactBtn}>
            Email Me?
            </a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} 
        alt="My Profile Picture"
        className={styles.heroImg}></img>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
        </section>
    )
}