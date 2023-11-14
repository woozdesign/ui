import React, { ReactEventHandler, useEffect, useState } from 'react';
import styles from './Carousel.module.scss';
import Image from '../Image';
import IconButton from '../IconButton';
import { Icon } from '@woozdesign/icons';
import { CarouselProps } from './Carousel.props';
import classNames from 'classnames';

const Carousel: React.FC<CarouselProps> = (props) => {
  const { items, duration = 500, prevButton, nextButton } = props;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [nextIndex, setNextIndex] = useState(1); // New state for tracking next image index
  const [dragOffset, setDragOffset] = useState(0);

  useEffect(() => {
    if (sliding) {
      const timer = setTimeout(() => {
        setSliding(false);
      }, duration); // Assuming 500ms is your animation duration
      return () => clearTimeout(timer);
    }
  }, [currentIndex, sliding]);

  const goTo = (index: number, dir: 'left' | 'right') => {
    let newIndex = index;
    let nextImgIndex = dir === 'right' ? index + 1 : index - 1;

    if (newIndex < 0) {
      newIndex = items.length - 1;
    } else if (newIndex >= items.length) {
      newIndex = 0;
    }

    if (nextImgIndex < 0) {
      nextImgIndex = items.length - 1;
    } else if (nextImgIndex >= items.length) {
      nextImgIndex = 0;
    }

    setDirection(dir);
    setSliding(true);
    setCurrentIndex(newIndex);
    setNextIndex(nextImgIndex); // Set the next image index
  };

  const goToPrevious = () => {
    goTo(currentIndex - 1, 'left');
  };

  const goToNext = () => {
    goTo(currentIndex + 1, 'right');
  };

  const [dragStart, setDragStart] = useState(0);
  const [dragEnd, setDragEnd] = useState(0);

  const onDragStart = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    const clientX = e.type.includes('mouse') ? (e as React.MouseEvent).clientX : (e as React.TouchEvent).touches[0].clientX;
    setDragStart(clientX);
    setDragEnd(dragStart); // Initialize dragEnd to the start value
  };

  const onDragMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
    if (dragStart !== 0) {
      const currentPos = e.type.includes('mouse') ? (e as React.MouseEvent).clientX : (e as React.TouchEvent).touches[0].clientX;
      setDragEnd(currentPos);
      setDragOffset(currentPos - dragStart);
    }
  };

  const onDragEnd = () => {
    const threshold = 50;
    const dragDistance = dragEnd - dragStart;

    if (Math.abs(dragDistance) > threshold && dragEnd != 0) {
      if (dragDistance > 0) {
        goToPrevious();
      } else if (dragDistance < 0) {
        goToNext();
      }
    }
    setDragOffset(0);
    setDragStart(0);
    setDragEnd(0);
  };

  return (
    <div
      className={styles.carousel}
      onMouseDown={onDragStart}
      onMouseMove={onDragMove}
      onMouseUp={onDragEnd}
      onMouseLeave={onDragEnd}
      onTouchStart={onDragStart}
      onTouchMove={onDragMove}
      onTouchEnd={onDragEnd}
      onDragLeave={onDragEnd}
    >
      <div className={styles.button} onClick={goToPrevious}>
        {prevButton ?? (
          <IconButton highContrast variant={'transparent'}>
            <Icon type={'ChevronLeft'} />
          </IconButton>
        )}
      </div>

      <div
        className={styles.imageContainer}
        style={{
          transform: `translateX(calc(${dragOffset}px + 100%  * ${currentIndex} * -1)`,
          transition: Math.abs(dragOffset) > 0 ? 'transform 0s ease' : `transform ${duration}ms ease`,
        }}
      >
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={classNames(styles.image, {
                [styles.active]: index === currentIndex,
              })}
            >
              {item}
            </div>
          );
        })}
      </div>

      <div className={styles.button} onClick={goToNext}>
        {nextButton ?? (
          <IconButton highContrast variant={'transparent'}>
            <Icon type={'ChevronRight'} />
          </IconButton>
        )}
      </div>
    </div>
  );
};

export default Carousel;
