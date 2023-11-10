import React from 'react';
import styles from './AspectRatio.module.scss';
import { AspectRatioProps } from './AspectRatio.props';

const AspectRatio: React.FC<AspectRatioProps> = (props) => {
  const { className, style, children, ratio } = props;
  const paddingBottom = `${(1 / ratio) * 100}%`;

  return (
    <div className={styles.aspectRatioContainer} style={{ paddingBottom }}>
      <div className={styles.content} style={style}>
        {children}
      </div>
    </div>
  );
};

export default AspectRatio;
