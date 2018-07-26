import React from 'react';

const SpinneImg = require('images/Spinner-1s-200px.gif');

const styles = {
  img: {
    display: 'inline',
    width: 24,
    height: 24,
    margin: 0,
  },
  text: {
    verticalAlign: 'middle',
    display: 'inline-block',
    color: '#777777',
  },
}

const Page = ({match}) => (
  <React.Fragment>
    <img src={SpinneImg} alt="" style={styles.img}/>
    <span className="loading-text" style={styles.text}>loading...</span>
  </React.Fragment>
);

export default Page;
