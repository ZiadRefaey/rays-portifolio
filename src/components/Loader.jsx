import { Html, useProgress } from "@react-three/drei";
const CanvasLoader = () => {
  const progress = useProgress();

  return (
    <div>
      <Html>
        <span className="canvas-loader"></span>
        <p
          style={{
            fontSize: 14,
            fontWeight: 800,
            color: "#f1f1f1",
            marginTop: 40,
          }}
        >
          {progress.toFixed(2)}%
        </p>
      </Html>
    </div>
  );
};

export default CanvasLoader;
