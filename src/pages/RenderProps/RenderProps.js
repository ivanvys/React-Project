import Mouse from "../../components/ShowMousePosition";
import CatImage from "../../static/cartoon_img_073.png";
const RenderProps = () => {
  return (
    <div>
      <h2>Render Props</h2>
      <Mouse
        render={({ x, y }) => {
          return (
            <div>
              <h2>
                X:{x} Y:{y}
              </h2>
              <img
                src={CatImage}
                style={{
                  position: "absolute",
                  top: y,
                  left: x,
                  maxWidth: "200px",
                  transform: "rotate(272deg)",
                }}
              />
            </div>
          );
        }}
      />
    </div>
  );
};

export default RenderProps;
