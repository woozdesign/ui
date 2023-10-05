import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './Anchor.module.scss';

type LinkItem = {
  key: string;
  href: string;
  title: string;
  children?: LinkItem[];
};

type AnchorProps = {
  items: LinkItem[];
  offset?: number;
  behavior?: 'smooth' | 'auto' | 'unset';
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
        let section = document.querySelector(item.href);
        if (section && isElementInViewport(section)) {
          updateActiveKeyAndIndicator(item);
          return;
        }

        // Check child items if they exist
        if (item.children) {
          for (const child of item.children) {
            section = document.querySelector(child.href);
            if (section && isElementInViewport(section)) {
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
        const linkElement = document.querySelector(`a[href="${item.href}"]`);
        if (linkElement) {
          const rect = linkElement.getBoundingClientRect();
          const firstRect = firstLinkRef.current.getBoundingClientRect();

          setIndicatorPosition({
            top: rect.top - firstRect.top,
            height: rect.height,
          });
        }
        setActiveKey(item.key);
        onChange?.(item.key);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [items, activeKey, onChange]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const rect = target.getBoundingClientRect();
      window.scrollTo({
        top: rect.top + window.pageYOffset - offset,
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
          <a href={item.href} className={activeKey === item.key ? styles.active : ''} ref={index === 0 ? firstLinkRef : null} onClick={(e) => handleAnchorClick(e, item.href)}>
            {item.title}
          </a>

          {item.children && (
            <div className={styles['anchor-subsection']}>
              {item.children.map((subItem) => (
                <a key={subItem.key} href={subItem.href} className={activeKey === subItem.key ? styles.active : ''} onClick={(e) => handleAnchorClick(e, subItem.href)}>
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

// Utility function to determine if an element is in viewport
function isElementInViewport(el: Element) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export default Anchor;
