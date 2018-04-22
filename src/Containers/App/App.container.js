import React, { Component } from 'react';

import styles from './App.container.module.css';

import Title from '../../Components/Title/Title.component';
import Background from '../../Components/Background/Background.component';
import Grid from '../../Components/Grid/Grid.component';
import Rocket from '../../Components/Rocket/Rocket.component';

import facts from '../../Assets/NASA_Facts.json';

class AppContainer extends Component {
  render() {
    return (
      <div className={styles.app}>
        <Title/>
        <Background/>
        <Grid facts={facts}/>
        <Rocket/>
      </div>
    );
  }
}

export default AppContainer;
