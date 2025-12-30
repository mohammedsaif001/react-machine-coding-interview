const ProgressBar = ({ value = 0 }) => {
  const percentage = Math.min(100, Math.max(value, 0));
  return (
    <div
      className="progressbar"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={percentage}
    >
      <span style={{ color: percentage > 51 ? "green" : "black" }}>
        {percentage}%
      </span>
      <div
        className="progressbar__fill"
        style={{
          width: "100%",
          transform: `scaleX(${percentage / 100})`,
          transformOrigin: "left center",
          transition: "transform 0.3s ease",
        }}
        // style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
