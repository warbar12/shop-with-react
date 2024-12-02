import React, { useState, useEffect } from "react";
import styles from "./alert.module.css";
import { useNavigate } from "react-router-dom";

const Alert = ({ message, redirectPath = "/", duration = 5000 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {

    setIsVisible(true);
    
    const timeout = setTimeout(() => {
      setIsVisible(false);
      navigate(redirectPath);
    }, duration);

    return () => clearTimeout(timeout);
  }, [navigate, redirectPath, duration]);

  return (
    <div
      className={`${styles.notification} ${
        isVisible ? styles.show : ""
      }`}
    >
      {message}
    </div>
  );
};

export default Alert;
