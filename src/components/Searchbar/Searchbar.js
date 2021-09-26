import React from "react";
import { useState } from "react";
import styles from "../Searchbar/Searchbar.module.css";
import s from "../Searchbar/SearchForm.module.css";
// import PropTypes from 'prop-types';

export default function Searchbar({ onSearch }) {
  const [searchImage, setSearchImage] = useState("");

  const handleNameChange = (e) => {
    setSearchImage({ searchImage: e.currentTarget.value.toLowerCase() });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchImage.trim() === "") {
      alert("Заполните поисковую строку");
      return;
    }
  };

  return (
    <header onSubmit={handleSubmit} className={styles.Searchbar}>
      <form className={s.SearchForm}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_button_label}></span>
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          value={searchImage}
          onChange={handleNameChange}
        />
      </form>
    </header>
  );
}
