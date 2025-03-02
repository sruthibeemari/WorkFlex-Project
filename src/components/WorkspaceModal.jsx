// components/WorkspaceModal.jsx
import React from "react";

const WorkspaceModal = ({ isOpen, onClose, workspace }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{workspace.name}</h2>
        <p>{workspace.description}</p>
        <button onClick={onClose} className="close-btn">Close</button>
        <button className="book-btn">Book Now</button>
      </div>
    </div>
  );
};

export default WorkspaceModal;
