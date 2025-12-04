import useBannerMovie from "../../hooks/useBannerMovie";
import { IMAGE_BASE_URL } from "../../services/api-client";
import { truncate } from "../../utils/helper";
import BannerLoading from "../Shared/BannerLoading";
import "./banner.css";

function Banner() {
  const { movie, isLoading, error } = useBannerMovie();

  if (isLoading) return <BannerLoading />;

  if (error) return <div className="banner-error">Error: {error}</div>;

  const title = movie?.title || movie?.name || movie?.original_name;
  const description = truncate(movie?.overview, 150);

  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${IMAGE_BASE_URL}${movie?.backdrop_path}')`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner-contents screen-padding">
        <h1 className="banner-title">{title}</h1>
        <div className="banner-buttons">
          <button className="banner-button play">▶ Play</button>
          <button className="banner-button">➕ My List</button>
        </div>
        <h1 className="banner-description">{description}</h1>
      </div>

      <div className="banner-fadeBottom" />
    </div>
  );
}

export default Banner;
