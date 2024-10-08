"use client"

import React, { useEffect, useState } from 'react';
import styles from '../../../styles/FlashSale.module.css';

const FlashSale = () => {
  // Sale time and product data
  const [timeLeft, setTimeLeft] = useState({ days: 4, hours: 11 }); // Set initial sale duration (adjust as needed)
  const [itemsLeft, setItemsLeft] = useState(12); // Initial number of items left
  const totalItems = 20; // Total number of items for sale

  useEffect(() => {
    // Countdown timer logic for time remaining
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let newHours = prevTime.hours - 1;
        let newDays = prevTime.days;
        if (newHours < 0) {
          newHours = 23;
          newDays = prevTime.days - 1;
        }
        return { days: newDays, hours: newHours };
      });
    }, 3600000); // Every hour

    return () => clearInterval(timer);
  }, []);

  // Calculate discount and progress for items left
  const originalPrice = 500000;
  const discountPrice = 350700;
  const discountPercentage = 30;

  const progressPercentage = ((totalItems - itemsLeft) / totalItems) * 100;

  return (
    <div className={styles.flashSaleContainer}>
      <div className={styles.flashSaleHeader}>
        <span className={styles.flashSaleTitle}>Flash Sales</span>
        <span className={styles.timeLeft}>
          Time Left: {`0w : ${timeLeft.days}d : ${timeLeft.hours}h`}
        </span>
      </div>
      <div className={styles.flashSaleDetails}>
        <div className={styles.priceSection}>
          <span className={styles.discountedPrice}>BDT {discountPrice.toLocaleString()}</span>
          <span className={styles.originalPrice}>BDT {originalPrice.toLocaleString()}</span>
          <span className={styles.discountPercentage}>-{discountPercentage}%</span>
        </div>
        <div className={styles.itemsLeft}>
          {itemsLeft} items left
        </div>
        {/* Progress bar */}
        <div className={styles.progressBar}>
          <div
            className={styles.progress}
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
