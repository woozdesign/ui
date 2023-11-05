import { Icon } from '@woozdesign/icons';
import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './Tree.module.scss';
import { TreeItemProps, TreeProps } from './Tree.props';

// TreeItem component for individual items
const TreeItem: React.FC<
  TreeItemProps & {
    onDragStart: (e: React.DragEvent<HTMLLIElement>, id: string) => void;
    onDragOver: (e: React.DragEvent<HTMLLIElement>) => void;
    onDrop: (e: React.DragEvent<HTMLLIElement>, id: string) => void;
    onDragEnter: (e: React.DragEvent<HTMLLIElement>, id: string) => void;
    onDragLeave: (e: React.DragEvent<HTMLLIElement>) => void;
    hoveredItemId: string | null;
  }
> = ({ id, label, children, level = 0, onDragStart, onDragOver, onDrop, onDragEnter, onDragLeave, hoveredItemId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  // Use isHovered prop to conditionally add a class for hover effect
  const itemClasses = classNames(styles.treeItem, { [styles[`hovered`]]: id === hoveredItemId });

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

  // Modified event handlers that stop propagation
  const handleStart = (e: React.DragEvent<HTMLLIElement>) => {
    onDragStart(e, id);
    e.stopPropagation();
  };

  const handleOver = (e: React.DragEvent<HTMLLIElement>) => {
    onDragOver(e);
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

  return (
    <li
      key={id}
      className={itemClasses}
      draggable
      onDragStart={handleStart}
      onDragOver={handleOver}
      onDrop={handleDropEvent}
      onDragEnter={(e) => handleDragEnter(e, id)} // Call with the item's id
      onDragLeave={handleDragLeave}
    >
      <div className={styles.treeLabel} onClick={toggleOpen}>
        <Indent /> {/* Now Indent contains the toggle button logic within itself */}
        {label}
      </div>
      {isOpen && children && (
        <ul className={styles.treeNested}>
          {children.map((child) => (
            <TreeItem
              key={child.id}
              {...child}
              level={level + 1}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              onDragEnter={onDragEnter}
              onDragLeave={onDragLeave}
              hoveredItemId={hoveredItemId}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

// Tree component
const Tree: React.FC<TreeProps> = ({ data: dataProp }) => {
  const [data, setData] = useState(dataProp);
  const [draggedItemId, setDraggedItemId] = useState<string | null>(null);
  const [hoveredItemId, setHoveredItemId] = useState<string | null>(null);

  const handleDragEnter = (e: React.DragEvent<HTMLLIElement>, targetId: string) => {
    e.preventDefault();
    setHoveredItemId(targetId);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault();
  };

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>, id: string) => {
    setDraggedItemId(id);
  };

  const handleDragOver = (e: React.DragEvent<HTMLLIElement>) => {
    e.preventDefault(); // Necessary for the onDrop event to trigger
  };

  const handleDrop = (e: React.DragEvent<HTMLLIElement>, targetId: string) => {
    e.preventDefault();
    if (draggedItemId && draggedItemId !== targetId) {
      // Here you would calculate the new order and update the state accordingly
      // This is a complex process and is heavily dependent on how you manage the tree state
      // For example:
      const newOrder = reorderItems(data, draggedItemId, targetId);

      setData(newOrder); // setData would be your state updater function for the tree data
    }
    setHoveredItemId(null);
  };
  const reorderItems = (items: TreeItemProps[], fromId: string, toId: string, toParentId?: string): TreeItemProps[] => {
    let draggedItem: TreeItemProps | null = null;

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

    const insertItem = (items: TreeItemProps[], itemToInsert: TreeItemProps, targetId: string | null): TreeItemProps[] => {
      // Helper function to insert the item
      const inserter = (list: TreeItemProps[], item: TreeItemProps, targetId: string) => {
        const newList = [...list];
        const targetIndex = newList.findIndex((i) => i.id === targetId);

        if (targetIndex !== -1) {
          if (newList[targetIndex].children) {
            // Spread children if it's an array
            newList[targetIndex].children = [...(newList[targetIndex].children || []), item];
          } else {
            // If the target has no children, create a new children array with the item
            const targetItem = newList[targetIndex];
            newList[targetIndex] = { ...targetItem, children: [item] };
          }
        }
        return newList;
      };

      // Recursively search for the target and insert the item
      const recursiveInsert = (list: TreeItemProps[], item: TreeItemProps, targetId: string): TreeItemProps[] => {
        return list.map((subItem) => {
          if (subItem.id === targetId) {
            return { ...subItem, children: subItem.children ? [...subItem.children, item] : [item] };
          }
          if (subItem.children) {
            return { ...subItem, children: subItem.children ? recursiveInsert(subItem.children, item, targetId) : [item] };
          }
          return subItem;
        });
      };

      if (targetId === null) {
        // If targetId is null, just add the item at the root level
        return [...items, itemToInsert];
      } else {
        return recursiveInsert(items, itemToInsert, targetId);
      }
    };

    // Insert the dragged item into the new location
    return insertItem(newItemsWithoutDragged, draggedItem, toId);
  };

  return (
    <ul className={styles.tree}>
      {data.map((item) => (
        <TreeItem
          key={item.id}
          {...item}
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          hoveredItemId={hoveredItemId}
        />
      ))}
    </ul>
  );
};

export default Tree;
