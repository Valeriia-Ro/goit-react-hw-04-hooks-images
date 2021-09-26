import React from "react";
import { useEffect } from "react";
import styles from "../Modal/Modal.module.css";

export default function Modal({ onClose }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      console.log("close modal");
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    console.log("bkdr ckick");
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={styles.Overlay} onClick={handleBackdropClick}>
      <div className={styles.Modal}>{""}</div>
    </div>
  );
}
