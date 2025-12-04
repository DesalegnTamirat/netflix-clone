import YouTube from "react-youtube";
import "./modal.css"; 

const opts = {
  height: "390",
  width: "100%",
  playerVars: {
    autoplay: 1,
    controls: 1, 
  },
};


function TrailerModal({ videoId, onClose }) {
  if (!videoId) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <YouTube videoId={videoId} opts={opts} />
      </div>
    </div>
  );
}

export default TrailerModal;
