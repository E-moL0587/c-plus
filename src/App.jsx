import React, { useState, useEffect } from 'react';

const Grab = ({ id, initialPosition, label, onMove }) => {
  const [grab, setGrab] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (event) => {
    setGrab(true);

    const offsetX = event.clientX - position.x;
    const offsetY = event.clientY - position.y;
    setOffset({ x: offsetX, y: offsetY });
  };

  const handleMouseUp = () => {
    setGrab(false);
  };

  const handleMouseMove = (event) => {
    if (grab) {
      const newPosition = {
        x: event.clientX - offset.x,
        y: event.clientY - offset.y,
      };

      if (onMove && typeof onMove === 'function') {
        const adjustedPosition = onMove(id, newPosition);
        setPosition(adjustedPosition);
      } else {
        setPosition(newPosition);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [grab, onMove, id]);

  return (
    <div
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        cursor: grab ? 'grabbing' : 'grab',
        border: '1px solid black',
        padding: '5px',
      }}
      onMouseDown={handleMouseDown}
    >
      {label}
    </div>
  );
};

const App = () => {
  const initialPositions = {
    1: { x: 50, y: 50 },
    2: { x: 50, y: 150 },
    3: { x: 150, y: 50 },
    4: { x: 150, y: 150 },
    5: { x: 250, y: 100 },
  };

  const [positions, setPositions] = useState(initialPositions);

  const handleMove = (id, newPosition) => {
    const distanceThreshold = 30;

    for (let otherId = 1; otherId <= Object.keys(positions).length; otherId++) {
      if (otherId !== id) {
        const otherPosition = positions[otherId];

        if (
          Math.abs(newPosition.x - otherPosition.x) < distanceThreshold &&
          Math.abs(newPosition.y - otherPosition.y) < distanceThreshold
        ) {
          newPosition.x = otherPosition.x;
          newPosition.y = otherPosition.y + 35;
        }
      }
    }

    setPositions((prevPositions) => ({ ...prevPositions, [id]: newPosition }));
    return newPosition;
  };

  return (
    <div>
      {Object.keys(positions).map((id) => (
        <Grab
          key={id}
          id={parseInt(id)}
          initialPosition={positions[id]}
          label={`code me ${id}!`}
          onMove={handleMove}
        />
      ))}
    </div>
  );
};

export default App;
