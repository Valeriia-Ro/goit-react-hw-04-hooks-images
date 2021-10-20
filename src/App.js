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
        }
        windowScroll();
      })
      .catch((error) => {
        console.log(error);
        alert(error);
      });
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

  const toggleModal = (img) => {
    if (img) {
      const imgModal = { picture: img };
      const altModal = { alt: img };
      setModalAlt(altModal);
      setModalImg(imgModal);
      console.log(imgModal);
      console.log(altModal);
    }
    setShowModal(!showModal);
    console.log(modalImg);
  };

  const loadMoreButton = () => {
    setLoading(!loading);
  };

  return (
    <Container>
      <Searchbar onSubmit={handleFormSubmit} />

      {error && <h1> Something went wrong</h1>}
      <ImageGallery images={images} openModal={toggleModal} />
      {loading && <LoaderSpiner />}

      {loadMoreButton && <Button onClick={onLoadMoreButton} />}

      {showModal && (
        <Modal onClose={toggleModal}>
          <img picture={modalImg} alt={modalAlt} />
        </Modal>
      )}
    </Container>
  );
}
