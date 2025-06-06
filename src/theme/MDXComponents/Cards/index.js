import React from "react";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";
import clsx from "clsx";

export function Cards({ children }) {
  return <div className={styles.cards}>{children}</div>;
}
export function ResponsiveCards({ children }) {
  return (
    <div className={clsx(styles.cards, styles.responsiveCards)}>
      {children}
    </div>
  );
}

export function Card({ icon: Icon, title, body, link }) {
  return (
    <div className={styles.card}>
      {Icon ? <Icon size="2rem" /> : <p />}
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>{body}</div>
      <Link to={link} className={styles.readMore}>
        READ MORE
      </Link>
    </div>
  );
}

export function ResponsiveCard({ icon: Icon, title, body, link }) {
  return (
    <div className={clsx(styles.card, styles.responsiveCard)}>
      {Icon ? <Icon size="2rem" /> : <p />}
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>{body}</div>
      <Link to={link} className={styles.readMore}>
        READ MORE
      </Link>
    </div>
  );
}

export function CardSmall({ icon: Icon, title, body, link }) {
  return (
    <Link to={link} className={styles.cardSmallLink}>
      <div className={styles.cardSmall}>
        {Icon ? <Icon size="1.2rem" /> : <p />}
        <div className={styles.titleSmall}>{title}</div>
        <div className={styles.bodySmall}>{body}</div>
      </div>
    </Link>
  );
}
