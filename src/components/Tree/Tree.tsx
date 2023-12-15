import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';
import { Icon } from '@woozdesign/icons';
import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './Tree.module.scss';
import { TreeItemComponentProps, ItemProps, TreeProps } from './Tree.props';
import Divider from '../Divider';

// Helper component for indentation and toggle
const IndentToggle = ({ level, item, isOpen, toggleOpen }: { level: number; isOpen: boolean; item: ItemProps; toggleOpen: () => void }) => {
  return (
    <>
      {Array.from({ length: level + 1 }, (_, index) => (
        <span key={index} className={styles.indent}>
          {index === level && item.children && item.children.length > 0 && (
            <span className={styles.toggleButton} onClick={toggleOpen}>
              <Icon type={isOpen ? 'ChevronDown' : 'ChevronRight'} />
            </span>
          )}
          {index <= level - 1 && (
            <span className={styles.verticalLine} onClick={toggleOpen}>
              <Divider orientation="vertical" color="gray" />
            </span>
          )}
        </span>
      ))}
    </>
  );
};

// TreeItem component for individual items
const TreeItem: React.FC<TreeItemComponentProps> = (props) => {
  const { item, level = 0, onDragStart, onDragOver, onDragEnd, onDrop, onDragEnter, onDragLeave, hoveredItemId, dragOverItemId, dragOverPosition, isFirstChild = false } = props;

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  // Use isHovered prop to conditionally add a class for hover effect
  const itemClasses = classNames(styles.treeItem, { [styles[`hovered`]]: item.id === hoveredItemId });

  // Modified event handlers that stop propagation
  const handleStart = (e: React.DragEvent<HTMLLIElement>) => {
    onDragStart(e, item.id);
    e.stopPropagation();
  };

  const handleOver = (e: React.DragEvent<HTMLLIElement>) => {
    onDragOver(e, item.id);
    e.stopPropagation();
  };

  const handleDropEvent = (e: React.DragEvent<HTMLLIElement>) => {
    onDrop(e, item.id);
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLLIElement>) => {
    onDragEnter(e, item.id);
    e.stopPropagation();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLIElement>) => {
    onDragLeave(e);
    e.stopPropagation();
  };

  const handleDragEnd = (e: React.DragEvent<HTMLLIElement>) => {
    onDragEnd(e);
    e.stopPropagation();
  };

  const renderDragLine = dragOverItemId === item.id && (
    <div
      className={classNames(styles.dragLine, {
        [styles.dragLineAbove]: dragOverPosition === 'above',
        [styles.dragLineBelow]: dragOverPosition === 'below',
      })}
    />
  );

  return (
    <>
      <li
        key={item.id}
        className={itemClasses}
        draggable
        onDragStart={handleStart}
        onDragOver={handleOver}
        onDrop={handleDropEvent}
        onDragEnd={handleDragEnd}
        onDragEnter={handleDragEnter} // Call with the item's id
        onDragLeave={handleDragLeave}
      >
        <div className={styles.treeLabelWrapper} onClick={toggleOpen}>
          <IndentToggle item={item} level={level} isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
          <div className={styles.treeLabel} onClick={toggleOpen}>
            {renderDragLine && dragOverPosition === 'above' && renderDragLine}

            <span className={styles.label}>
              {item.iconPrepend && item.iconPrepend}
              {item.label}
              {item.iconAppend && item.iconAppend}
            </span>
            {renderDragLine && dragOverPosition === 'below' && renderDragLine}
          </div>
        </div>
        {isOpen && item.children && (
          <ul className={styles.treeNested}>
            {item.children.map((child, index) => (
              <TreeItem
                key={child.id}
                item={child}
                onDragStart={onDragStart}
                level={level + 1}
                onDragOver={onDragOver}
                onDrop={onDrop}
                onDragEnter={onDragEnter}
                onDragLeave={onDragLeave}
                onDragEnd={onDragEnd}
                hoveredItemId={hoveredItemId}
                dragOverItemId={dragOverItemId}
                dragOverPosition={dragOverPosition}
                isFirstChild={index === 0}
              />
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

// Tree component
const Tree: React.FC<TreeProps> = (props) => {
  const { others: otherMarginProps, ...marginProps } = extractMarginProps(props);
  const { items: dataProp, size = 'medium', color, borderWidth } = otherMarginProps;

  const classes = classNames(styles.tree, withBreakpoints(size, 'wd-tree', styles), withMarginProps(marginProps));

  const [data, setData] = useState(dataProp);
  const [draggedItemId, setDraggedItemId] = useState<string | undefined>(undefined);
  const [hoveredItemId, setHoveredItemId] = useState<string | undefined>(undefined);
  const [dragOverItemId, setDragOverItemId] = useState<string | undefined>(undefined);
  const [dragOverPosition, setDragOverPosition] = useState<'above' | 'below' | undefined>(undefined);

  const handleDragEnter = (e: React.DragEvent<HTMLLIElement>, id: string) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLIElement>) => {
    setDragOverItemId(undefined);
    setDragOverPosition(undefined);
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>, id: string) => {
    setDraggedItemId(id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>, id: string) => {
    e.preventDefault();

    if (draggedItemId == id) return;
    const targetRect = e.currentTarget.getBoundingClientRect();
    const hoverTopThreshold = (targetRect.bottom - targetRect.top) * 0.3; // 20% from the top
    const hoverBottomThreshold = (targetRect.bottom - targetRect.top) * 0.7; // 80% from the top which is 20% from the bottom
    const hoverClientY = e.clientY - targetRect.top;

    let position;
    if (hoverClientY < hoverTopThreshold) {
      position = 'above';
      setHoveredItemId(undefined);
    } else if (hoverClientY > hoverBottomThreshold) {
      position = 'below';
      setHoveredItemId(undefined);
    } else {
      setHoveredItemId(id);
      setDragOverItemId(undefined);
      setDragOverPosition(undefined);
      position = 'middle';
    }

    setDragOverItemId(id);
    setDragOverPosition(position as 'above' | 'below'); // make sure you have setDragOverPosition defined in your component's state
  };

  const handleDragEnd = (e: React.DragEvent<HTMLLIElement>) => {
    setHoveredItemId(undefined);
    setDragOverItemId(undefined);
    setDragOverPosition(undefined);
  };

  const handleDrop = (e: React.DragEvent<HTMLLIElement>, id: string) => {
    e.preventDefault();
    if (draggedItemId && draggedItemId !== id) {
      // Here you would calculate the new order and update the state accordingly
      // This is a complex process and is heavily dependent on how you manage the tree state
      // For example:
      const newOrder = reorderItems(data, draggedItemId, id, dragOverPosition);
      setData(newOrder);
    }
    setHoveredItemId(undefined);
    setDragOverItemId(undefined);
    setDragOverPosition(undefined);
  };

  const reorderItems = (items: ItemProps[], fromId: string, toId: string, position?: 'above' | 'below' | 'middle'): ItemProps[] => {
    let draggedItem: ItemProps | undefined = undefined;

    // Check if the targetId is a descendant of the draggedItem
    const isDescendant = (parentId: string, childId: string) => {
      const queue = [...items];
      while (queue.length) {
        const node = queue.shift();
        if (node) {
          if (node.id === parentId) {
            // Search all children for the childId
            const stack = [...(node.children || [])];
            while (stack.length) {
              const childNode = stack.pop();
              if (childNode) {
                if (childNode.id === childId) {
                  return true;
                }
                if (childNode.children) {
                  stack.push(...childNode.children);
                }
              }
            }
            break; // Once the parent is found and children are checked, exit the loop
          }
          if (node.children) {
            queue.push(...node.children);
          }
        }
      }
      return false;
    };

    // Prevent dropping an item onto one of its descendants
    if (isDescendant(fromId, toId)) {
      return items; // Return the items unmodified if the move is invalid
    }

    // Find and remove the dragged item from its original location
    const findAndRemoveItem = (items: ItemProps[], itemId: string): ItemProps[] => {
      return items.reduce((acc: ItemProps[], item) => {
        if (item.id === itemId) {
          draggedItem = item;
          return acc;
        }
        if (item.children) {
          item.children = findAndRemoveItem(item.children, itemId);
        }
        acc.push(item);
        return acc;
      }, []);
    };

    // Remove the item from its current position
    const newItemsWithoutDragged = findAndRemoveItem([...items], fromId);

    if (!draggedItem) return items; // If the item wasn't found, return the original items

    const insertItem = (items: ItemProps[], itemToInsert: ItemProps, targetId: string | undefined, position?: 'above' | 'below' | 'middle'): ItemProps[] => {
      // Helper function to insert the item
      const insertAtIndex = (list: ItemProps[], item: ItemProps, index: number) => {
        const newList = [...list];
        newList.splice(index, 0, item); // Insert the item at the index
        return newList;
      };

      // Recursively search for the target and insert the item
      const recursiveInsert = (list: ItemProps[], item: ItemProps, targetId: string): ItemProps[] => {
        for (let i = 0; i < list.length; i++) {
          const subItem = list[i];
          if (subItem.id === targetId) {
            switch (position) {
              case 'above':
                return insertAtIndex(list, item, i);
              case 'below':
                return insertAtIndex(list, item, i + 1);
              case 'middle':
                return [...list.slice(0, i), { ...subItem, children: [...(subItem.children || []), item] }, ...list.slice(i + 1)];
              default:
                return list;
            }
          }

          if (subItem.children) {
            const newChildren = recursiveInsert(subItem.children, item, targetId);
            if (newChildren !== subItem.children) {
              // If children have been modified, return updated list with new children
              return [...list.slice(0, i), { ...subItem, children: newChildren }, ...list.slice(i + 1)];
            }
          }
        }
        return list;
      };
      if (targetId === undefined) {
        // If targetId is undefined, just add the item at the root level
        return [...items, itemToInsert];
      } else {
        return recursiveInsert(items, itemToInsert, targetId);
      }
    };

    // Insert the dragged item into the new location
    return insertItem(newItemsWithoutDragged, draggedItem, toId, position);
  };

  return (
    <ul data-accent-color={color} data-border-width={borderWidth} className={classes}>
      {data.map((item, index) => (
        <TreeItem
          key={item.id}
          item={item}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragEnd={handleDragEnd}
          hoveredItemId={hoveredItemId}
          dragOverItemId={dragOverItemId}
          dragOverPosition={dragOverPosition}
          isFirstChild={index === 0}
        />
      ))}
    </ul>
  );
};

export default Tree;
