import { Icon } from '@woozdesign/icons';
import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './Tree.module.scss';
import { TreeItemProps, TreeProps } from './Tree.props';
import { extractMarginProps, withBreakpoints, withMarginProps } from '@/utils';

// TreeItem component for individual items
const TreeItem: React.FC<
  TreeItemProps & {
    onDragStart: (e: React.DragEvent<HTMLLIElement>, id: string) => void;
    onDragOver: (e: React.DragEvent<HTMLLIElement>) => void;
    onDrop: (e: React.DragEvent<HTMLLIElement>, id: string) => void;
    onDragEnter: (e: React.DragEvent<HTMLLIElement>, id: string) => void;
    onDragLeave: (e: React.DragEvent<HTMLLIElement>) => void;
    onDragEnd: (e: React.DragEvent<HTMLLIElement>) => void;
    hoveredItemId?: string;
    isFirstChild?: boolean;
    dragOverItemId?: string;
    dragOverPosition?: 'above' | 'below';
  }
> = (props) => {
  const {
    id,
    label,
    children,
    level = 0,
    onDragStart,
    onDragOver,
    onDragEnd,
    onDrop,
    onDragEnter,
    onDragLeave,
    hoveredItemId,
    dragOverItemId,
    dragOverPosition,
    isFirstChild = false,
  } = props;

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  // Use isHovered prop to conditionally add a class for hover effect
  const itemClasses = classNames(styles.treeItem, { [styles[`hovered`]]: id === hoveredItemId });

  // Modified event handlers that stop propagation
  const handleStart = (e: React.DragEvent<HTMLLIElement>) => {
    onDragStart(e, id);
    e.stopPropagation();
  };

  const handleOver = (e: React.DragEvent<HTMLLIElement>, id: string) => {
    onDragOver(e, id);
    e.stopPropagation();
  };

  const handleDropEvent = (e: React.DragEvent<HTMLLIElement>) => {
    onDrop(e, id);
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLLIElement>, id: string) => {
    onDragEnter(e, id);
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

  // Create a React Fragment to avoid adding extra nodes to the DOM
  const Indent = () => {
    return (
      <>
        {Array.from({ length: level + 1 }, (_, index) => (
          <span key={index} className={styles.indent}>
            {/* Place children only in the last indent */}
            {index === level && children && children.length > 0 && (
              <span className={styles.toggleButton}>{isOpen ? <Icon type={'ChevronDown'} /> : <Icon type={'ChevronRight'} />}</span>
            )}
          </span>
        ))}
      </>
    );
  };
  const renderDragLine = dragOverItemId === id && (
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
        key={id}
        className={itemClasses}
        draggable
        onDragStart={handleStart}
        onDragOver={(e) => handleOver(e, id)}
        onDrop={handleDropEvent}
        onDragEnd={handleDragEnd}
        onDragEnter={(e) => handleDragEnter(e, id)} // Call with the item's id
        onDragLeave={handleDragLeave}
      >
        <div className={styles.treeLabelWrapper} onClick={toggleOpen}>
          <Indent /> {/* Now Indent contains the toggle button logic within itself */}
          <div className={styles.treeLabel} onClick={toggleOpen}>
            {renderDragLine && dragOverPosition === 'above' && renderDragLine}
            {label}
            {renderDragLine && dragOverPosition === 'below' && renderDragLine}
          </div>
        </div>
        {isOpen && children && (
          <ul className={styles.treeNested}>
            {children.map((child, index) => (
              <TreeItem
                key={child.id}
                {...child}
                level={level + 1}
                onDragStart={onDragStart}
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
  const { data: dataProp, size = 'medium', color } = otherMarginProps;

  const classes = classNames(styles.tree, withBreakpoints(size, 'wd-tree', styles), withMarginProps(marginProps));

  const [data, setData] = useState(dataProp);
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);
  const [dragOverItemId, setDragOverItemId] = useState<string | null>(null);
  const [dragOverPosition, setDragOverPosition] = useState<'above' | 'below' | null>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLLIElement>, id: string) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLIElement>) => {
    setDragOverItemId(null);
    setDragOverPosition(null);
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
      setHoveredItemId(null);
    } else if (hoverClientY > hoverBottomThreshold) {
      position = 'below';
      setHoveredItemId(null);
    } else {
      setHoveredItemId(id);
      setDragOverItemId(null);
      setDragOverPosition(null);
      position = 'middle';
    }

    setDragOverItemId(id);
    setDragOverPosition(position); // make sure you have setDragOverPosition defined in your component's state
  };

  const handleDragEnd = (e: React.DragEvent<HTMLLIElement>) => {
    setHoveredItemId(null);
    setDragOverItemId(null);
    setDragOverPosition(null);
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
    setHoveredItemId(null);
    setDragOverItemId(null);
    setDragOverPosition(null);
  };

  const reorderItems = (items: TreeItemProps[], fromId: string, toId: string, position?: 'above' | 'below' | 'middle'): TreeItemProps[] => {
    let draggedItem: TreeItemProps | null = null;

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
    const findAndRemoveItem = (items: TreeItemProps[], itemId: string): TreeItemProps[] => {
      return items.reduce((acc: TreeItemProps[], item) => {
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

    const insertItem = (items: TreeItemProps[], itemToInsert: TreeItemProps, targetId: string | null, position?: 'above' | 'below' | 'middle'): TreeItemProps[] => {
      // Helper function to insert the item
      const insertAtIndex = (list: TreeItemProps[], item: TreeItemProps, index: number) => {
        const newList = [...list];
        newList.splice(index, 0, item); // Insert the item at the index
        return newList;
      };

      // Recursively search for the target and insert the item
      const recursiveInsert = (list: TreeItemProps[], item: TreeItemProps, targetId: string): TreeItemProps[] => {
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
      if (targetId === null) {
        // If targetId is null, just add the item at the root level
        return [...items, itemToInsert];
      } else {
        return recursiveInsert(items, itemToInsert, targetId);
      }
    };

    // Insert the dragged item into the new location
    return insertItem(newItemsWithoutDragged, draggedItem, toId, position);
  };

  return (
    <ul data-accent-color={color} className={classes}>
      {data.map((item, index) => (
        <TreeItem
          key={item.id}
          {...item}
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
