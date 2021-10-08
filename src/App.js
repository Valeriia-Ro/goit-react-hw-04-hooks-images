import { useState, useEffect } from "react";
import Modal from "./components/Modal/Modal";
import Container from "./components/Container";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import api from "./service/Pixabay-api";
import Button from "./components/Button/Button";
import LoaderSpiner from "./components/Loader/Loader";
import "./index.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [searchImage, setSearchImage] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  const onLoadMoreButton = () => {
    loadMoreButton();
    setCurrentPage(currentPage + 1);
  };

  const loadMoreButton = () => {
    setLoading((prevLoading) => !prevLoading);
  };

  useEffect(() => {
    if (!searchImage) {
      return;
    }
    const images = api(searchImage);
    onLoadMoreButton();
    setImages(images);
    console.log(images);
  }, [searchImage]);

  useEffect(() => {
    windowScroll();
    if (searchImage) {
      try {
        api({ searchImage, currentPage }).then((images) => {
          setImages((prevState) => [...prevState, ...images]);
          onLoadMoreButton();
        });
      } catch (error) {
        console.log(error);
        alert(error);
      }
    }
    console.log(
      api({ searchImage, currentPage }).then((images) => {
        setImages((prevState) => [...prevState, ...images]);
      })
    );
    console.log(images);
    console.log(searchImage);
    console.log(currentPage);
  }, [currentPage, searchImage]);

  const handleFormSubmit = (searchImage) => {
    onLoadMoreButton();
    setSearchImage(searchImage);
    console.log(searchImage);
    console.log(images);
  };

  const windowScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const toggleModal = () => {
    setShowModal(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  const openModal = (url, alt) => {
    setShowModal(({ showModal }) => ({
      showModal: !showModal,
      modalImg: url,
      modalAlt: alt,
    }));
  };

  return (
    <Container>
      <Searchbar onSubmit={handleFormSubmit} />

      {error && <h1> Something went wrong</h1>}
      <ImageGallery images={images} openModal={openModal} />
      {loading && <LoaderSpiner />}

      {loadMoreButton && <Button onClick={onLoadMoreButton} />}

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={modalImg} alt={modalAlt} />
        </Modal>
      )}
    </Container>
  );
}
