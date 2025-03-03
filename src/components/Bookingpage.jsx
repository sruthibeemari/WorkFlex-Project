import React from "react";
import { useParams } from "react-router-dom";

const BookingPage = () => {
  const { id } = useParams(); // Get workspace ID from URL

  return (
    <div className="booking-container">
      <h1>Booking Details</h1>
      <p>Booking workspace ID: {id}</p>
      {/* Add form fields here */}
      <button>Confirm Booking</button>
    </div>
  );
};

export default BookingPage;
