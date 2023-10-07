import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './Anchor.module.scss';
import { isElementInViewport } from '@/utils';

type LinkItem = {
  key: string;
  href: string;
  title: string;
  children?: LinkItem[];
};

type AnchorProps = {
  items: LinkItem[];
  offset?: number;
  behavior?: ScrollBehavior;
  onChange?: (selectedKey: string) => void;
};

const Anchor: FC<AnchorProps> = ({ items, offset = 0, behavior = 'smooth', onChange }) => {
  const [activeKey, setActiveKey] = useState<string | null>(items[0]?.key);

  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const [indicatorPosition, setIndicatorPosition] = useState({ top: 0, height: 0 });

  useEffect(() => {
    // After initial render, set the position of the indicator to the first item
    if (firstLinkRef.current) {
      const rect = firstLinkRef.current.getBoundingClientRect();
      setIndicatorPosition({ top: 0, height: rect.height });
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      for (const item of items) {
        // Check parent items
        let section = document.getElementById(item.href.slice(1));
        if (section && isElementInViewport(section, ['top'])) {
          updateActiveKeyAndIndicator(item);
          return;
        }

        // Check child items if they exist
        if (item.children) {
          for (const child of item.children) {
            section = document.getElementById(child.href.slice(1));
            if (section && isElementInViewport(section, ['top'])) {
              updateActiveKeyAndIndicator(child);
              return;
            }
          }
        }
      }
    };

    // Utility function to update the active key and position of the indicator
    const updateActiveKeyAndIndicator = (item: LinkItem) => {
      if (activeKey !== item.key) {
        const linkElement = document.querySelector(`a[data-anchor-key="${item.key}"]`);
        if (linkElement) {
          const rect = linkElement.getBoundingClientRect();
          const firstRect = firstLinkRef.current;
          if (firstRect) {
            setIndicatorPosition({
              top: rect.top - firstRect.getBoundingClientRect().top ?? 0,
              height: rect.height,
            });
          }
        }
        setActiveKey(item.key);
        onChange?.(item.key);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items, activeKey, setActiveKey, onChange]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.getElementById(href.slice(1));
    if (target) {
      const rect = target.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.pageYOffset - offset - 1,
        behavior: behavior,
      });
    }
  };

  return (
    <div className={styles.anchor}>
      <div
        className={styles.indicator}
        style={{
          top: `${indicatorPosition.top}px`,
          height: `${indicatorPosition.height}px`,
        }}
      ></div>
      {items.map((item, index) => (
        <div key={item.key} className={styles['anchor-section']}>
          {/* Assign ref to the first link */}
          <a
            data-anchor-key={item.key}
            href={item.href}
            className={activeKey === item.key ? styles.active : ''}
            ref={index === 0 ? firstLinkRef : null}
            onClick={(e) => handleAnchorClick(e, item.href)}
          >
            {item.title}
          </a>

          {item.children && (
            <div className={styles['anchor-subsection']}>
              {item.children.map((subItem) => (
                <a
                  key={subItem.key}
                  data-anchor-key={subItem.key}
                  href={subItem.href}
                  className={activeKey === subItem.key ? styles.active : ''}
                  onClick={(e) => handleAnchorClick(e, subItem.href)}
                >
                  {subItem.title}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Anchor;
