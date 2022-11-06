import { useState } from "react";

const MouseMoving = ({ render }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const mouseMove = (event) => {
    setMouse({ x: event.clientX, y: event.clientY });
  };
  return (
    <div>
      <div onMouseMove={mouseMove}>{render({ x: mouse.x, y: mouse.y })}</div>
    </div>
  );
};

export default MouseMoving;
