import React, { useEffect } from "react";
import "../styles/Notification.css";

const Notification = ({ message, onClose }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000); // auto hide after 5s
      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="notification-toast">
      <p>{message}</p>
    </div>
  );
};

export default Notification;
