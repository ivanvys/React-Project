import MouseMoving from "./index";
import Cat from "../../static/cartoon_img_073.png";

const MyRenderProp = () => {
  return (
    <div>
      <h2>Render Props</h2>
      <MouseMoving
        render={({ x, y }) => {
          return (
            <div style={{ width: "100vw", height: "100vh" }}>
              <h2>
                X:{x} Y: {y}
              </h2>
              <img
                src={Cat}
                style={{
                  width: "50px",
                  height: "50px",
                  position: "absolute",
                  top: y,
                  left: x,
                }}
              />
            </div>
          );
        }}
      />
    </div>
  );
};

export default MyRenderProp;
