import "./row.css";
function RowSkeleton({ isLargeRow = false }) {
  const items = Array(10).fill(0);
  const posterClass = `row-poster skeleton-item ${
    isLargeRow ? "row-posterLarge" : ""
  }`;

  return (
    <div className="row">
      <h1
        className="rowtitle skeleton-item"
        style={{ width: "200px", height: "30px", margin: "10px 0" }}
      ></h1>
      <div className="row-posters">
        {items.map((_, index) => (
          <div key={index} className={posterClass}></div>
        ))}
      </div>
    </div>
  );
}

export default RowSkeleton;
