import React, { FC } from 'react';

interface SectionProps {
  children?: React.ReactNode;
}

const Section: FC<SectionProps> = ({ children }) => {
  return <section>{children}</section>;
};

export default Section;
