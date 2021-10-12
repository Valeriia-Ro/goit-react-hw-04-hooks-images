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
  const [searchImage, setSearchImage] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  const onLoadMoreButton = () => {
    setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (searchImage === "" && currentPage === 1) {
      return;
    }
    api({ searchImage, currentPage })
      .then((newImages) => {
        if (currentPage === 1) {
          setImages(newImages);
        } else {
          setImages((prevState) => [...prevState, ...newImages]);
          onLoadMoreButton();
        }
        windowScroll();
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
    console.log(images);
    console.log(searchImage);
    console.log(currentPage);
  }, [searchImage, currentPage]);

  const handleFormSubmit = (searchData) => {
    setSearchImage(searchData);
    setImages([]);
    setCurrentPage(1);
  };

  const windowScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  // const toggleModal = () => setShowModal(!showModal);

  // const openModal = (url, alt) => {
  //   setModalImg(url);
  //   setModalAlt(alt);
  // };

  const toggleModal = () => {
    setShowModal(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  const openModal = (url, alt) => {
    setShowModal(({ showModal }) => ({
      showModal: showModal,
      modalImg: url,
      modalAlt: alt,
    }));
  };

  const loadMoreButton = () => {
    setLoading(!loading);
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
          <img url={modalImg} alt={modalAlt} />
        </Modal>
      )}
    </Container>
  );
}
