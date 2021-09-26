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
  const [searchImage] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalImg, setModalImg] = useState("");
  const [modalAlt, setModalAlt] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null);

  useEffect((prevState) => {
    if (prevState.searchImage !== searchImage) {
      fetchGallery();
    }
  });

  const fetchGallery = () => {
    const options = { searchImage, currentPage };
    setLoading({ loading: true });

    api(options)
      .then((images) => {
        setImages((prevState) => [...prevState, ...images]);
        setCurrentPage((prevState) => [prevState + 1]);
        windowScroll();
      })
      .catch((error) => setError({ error }))
      .finally(() => setLoading({ loading: false }));
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

  return (
    <Container>
      <Searchbar />

      {error && <h1> Something went wrong</h1>}
      <ImageGallery images={images} openModal={openModal} />
      {loading && <LoaderSpiner />}

      {loadMoreButton && <Button onClick={fetchGallery} />}

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={modalImg} alt={modalAlt} />
        </Modal>
      )}
    </Container>
  );
}
