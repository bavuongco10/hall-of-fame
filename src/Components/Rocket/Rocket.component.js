import React from 'react';

import rocket from '../../Assets/shuttle.png';
import Smoke from '../../Components/Smoke/Smoke.component';
import styles from './Rocket.component.module.css';

const Rocket = () => (
  <div className={styles.container}>
    <img src={rocket} alt="rocket" className={styles.rocket}/>
    <Smoke/>
  </div>
);

export default Rocket;