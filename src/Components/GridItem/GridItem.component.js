import React from 'react';

import styles from './GridItem.component.module.css';
import Badge from '../Badge/Badge.component';

const GridItem = ({ id, title, fact }) => (
  <div className={styles.item}>
    <Badge/>
    <h2>{title}</h2>
    <article className={styles.article}>{fact}</article>
  </div>
);

export default GridItem;