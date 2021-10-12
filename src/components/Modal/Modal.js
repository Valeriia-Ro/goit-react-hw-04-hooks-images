import React from "react";
import { useEffect } from "react";
import styles from "../Modal/Modal.module.css";

export default function Modal({ picture, alt, onClose }) {
  useEffect(() => {
    window.addEventListener("keydown", handleBackdropClick);
    return () => {
      window.removeEventListener("keydown", handleBackdropClick);
    };
  });

  const handleBackdropClick = (e) => {
    console.log("close ckick");
    if (e.currentTarget === e.target || e.code === "Escape") {
      onClose();
    }
  };

  return (
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <div className={styles.Modal}>
        <img src={picture} alt={alt} />
      </div>
    </div>
  );
}
