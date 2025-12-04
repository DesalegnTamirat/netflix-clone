function BannerLoading() {
  return (
    <div
      className="banner-skeleton"
      style={{ height: "100vh", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="banner-contents">
        <h1 className="banner-title" style={{ width: "50%" }}>
          Loading...
        </h1>
        <div className="banner-buttons" style={{ opacity: 0.5 }}>
          <button className="banner-button play">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description" style={{ width: "90%" }}>
          Loading movie details...
        </h1>
      </div>
      <div className="banner-fadeBottom" />
    </div>
  );
}

export default BannerLoading;
