import React from "react";
import styles from "../Searchbar/Searchbar.module.css";
import s from "../Searchbar/SearchForm.module.css";
// import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = e.target.searchForm.value;
    console.log(data);
    if (data.trim() === "") {
      alert("Заполните поисковую строку");
      return;
    }
    onSubmit(data);
  };

  return (
    <header onSubmit={handleSubmit} className={styles.Searchbar}>
      <form className={s.SearchForm}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_button_label}></span>
        </button>

        <input
          name="searchForm"
          className={s.SearchForm_input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};
export default Searchbar;
