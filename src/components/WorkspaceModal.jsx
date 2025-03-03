
// const WorkspaceModal = ({ isOpen, onClose, workspace }) => {
//   if (!isOpen) return null;
  
//   return (
//     <div className="modal-overlay">
//       <div className="modal-content">
//         <h2>{workspace.name}</h2>
//         <p>{workspace.description}</p>
        
        
//         {/* Google Maps Link */}
//         <a 
//           href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(workspace.name)}`} 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="map-link"
//         >
//           View Location on Google Maps
//         </a>

//         <button onClick={onClose} className="close-btn">Close</button>
//         <button 
//           className="book-btn" 
//           onClick={() => window.location.href = `/booking/${workspace.id}`}
//         >
//           Book Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default WorkspaceModal;


import React from "react";
import "../App.css" // Import CSS

const WorkspaceModal = ({ isOpen, onClose, workspace }) => {
  if (!isOpen || !workspace) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{workspace.name}</h2>
        <p>{workspace.description}</p>

        {/* Display Modal-Specific Images */}
        <div className="modal-images">
          {workspace.modalImages.map((image, index) => (
            <img key={index} src={image} alt={`Workspace View ${index + 1}`} className="modal-image" />
          ))}
        </div>

        {/* Google Maps Link */}
        <a 
          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(workspace.name)}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="map-link"
        >
          View Location on Google Maps
        </a>

        <button onClick={onClose} className="close-btn">Close</button>
        <button 
          className="book-btn" 
          onClick={() => window.location.href = `/booking/${workspace.id}`}
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default WorkspaceModal;
