import React from 'react';

import styles from './Grid.component.module.css';

import GridItem from '../GridItem/GridItem.component';

const Grid = ({ facts }) => (
  <section className={styles.grid}>
    {
        facts.map(props => <GridItem key={props.id} {...props} />)
    }
  </section>
);

Grid.defaultProps = {
    facts: []
};

export default Grid;