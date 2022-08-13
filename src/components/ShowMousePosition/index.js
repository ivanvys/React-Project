import { useState } from "react";

const Mouse = ({ render }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const mouseMove = (event) => {
    setMouse({ x: event.clientX, y: event.clientY });
  };
  return (
    <div>
      <div
        onMouseMove={mouseMove}
        style={{ height: "100vh", position: "relative" }}
      >
        {render({ x: mouse.x, y: mouse.y })}
      </div>
    </div>
  );
};

export default Mouse;
