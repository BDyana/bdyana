// components/SliderToggle.js
"use client"
import React, { useState } from 'react';
import styles from '../../styles/main.scss'// Using CSS Module for styling

const SlideToggle = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className={styles.toggleContainer}>
      <label className={styles.switch}>
        <input type="checkbox" checked={isOn} onChange={handleToggle} />
        <span className={styles.slider}></span>
      </label>
      <div className={styles.label}>
        {isOn ? 'On' : 'Off'}
      </div>
    </div>
  );
};

export default SlideToggle;

