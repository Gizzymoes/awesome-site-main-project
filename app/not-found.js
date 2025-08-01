import MotionButton from "../components/MotionButton";

export default function NotFound() {
  return (
    <div className="utility-page-wrap">
      <div className="utility-page-content">
        <h1 className="heading">Page Not Found</h1>
        <MotionButton href="/">Back to Home</MotionButton>
      </div>
    </div>
  );
}
