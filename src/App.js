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

  useEffect(() => {
    if (searchImage === "" && currentPage === 1) {
      return;
    }
    api(searchImage, currentPage)
      .then((newImage) => {
        if (currentPage === 1) {
          setSearchImage(newImage);
        } else {
          setSearchImage((prevState) => [...prevState, ...newImage]);
        }
        windowScroll();
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [searchImage, currentPage]);

  const handleInput = (searchData) => {
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

  const loadMoreButton = images.length > 0 && !loading;
  const onLoadMoreButton = () => setCurrentPage((prevState) => prevState + 1);
  return (
    <Container>
      <Searchbar onSubmit={handleInput} />

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
