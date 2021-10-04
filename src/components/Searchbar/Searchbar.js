import React from "react";
import { useState } from "react";
import styles from "../Searchbar/Searchbar.module.css";
import s from "../Searchbar/SearchForm.module.css";
import PropTypes from "prop-types";

export default function Searchbar({ onSubmit }) {
  const [form, setForm] = useState("");

  const onChangeForm = (e) => {
    const value = e.currentTarget.value.trim();
    setForm(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form === "") {
      alert("Заполните поисковую строку");
      return;
    }
    onSubmit(form);
  };

  return (
    <header className={styles.Searchbar}>
      <form onSubmit={handleSubmit} className={s.SearchForm}>
        <button type="submit" className={s.SearchForm_button}>
          <span className={s.SearchForm_button_label}></span>
        </button>

        <input
          className={s.SearchForm_input}
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
          onChange={onChangeForm}
          value={form}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
