import React from 'react';

import smoke from '../../Assets/smoke.mov';
import styles from './Smoke.component.module.css';

const Smoke = () => (
  <video className={styles.smoke} src={smoke} autoPlay loop/>
);

export default Smoke;