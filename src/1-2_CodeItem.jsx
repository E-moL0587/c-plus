import React from 'react';
import Draggable from 'react-draggable';

const CodeItem = ({ item, index, onDrag }) => {
  return (
    <Draggable key={index} onDrag={(ui) => onDrag(ui, index)}>
      <div style={{ position: 'absolute' }}>{item}</div>
    </Draggable>
  );
};

export default CodeItem;
