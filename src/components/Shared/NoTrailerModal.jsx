function NoTrailerModal({ isVisible, onClose }) {
  if(!isVisible) return null;
  return (
    <div className="modal">
      <div className="modal-content small">
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <p>No trailer available for this movie.</p>
      </div>
    </div>
  );
}

export default NoTrailerModal;
