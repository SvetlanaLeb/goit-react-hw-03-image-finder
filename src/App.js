import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import imageApi from './services/imageAPI';
import Button from './components/Button/Button';
import Modal from './components/Modal/Modal';

class App extends Component {
    state = {
        requestName: '',
        data: null,
        currentPage: 1,
        loading: false,
        error: null,
        showModal: false,
        modalImage: '',
    };

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevState.requestName;
        const newName = this.state.requestName;

        if (prevName !== newName) {
            this.fetchImg();
        }
    }

    fetchImg = () => {
        if (!this.state.requestName) return;
        this.setState({ loading: true });
        const { requestName, currentPage } = this.state;
        imageApi(requestName, currentPage)
            .then(result => {
                return this.setState(prevState => ({
                    data: [...prevState.data, ...result.hits],
                    currentPage: prevState.currentPage + 1,
                }));
            })
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ loading: false }));
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };
    handleFormSubmit = requestName => {
        this.setState({ requestName: requestName, data: [], currentPage: 1 });
    };

    handleModalOpen = largeImageURL => {
        this.setState({ showModal: true, modalImage: largeImageURL });
    };

    handleModalClose = () => {
        this.setState({ showModal: false, modalImage: '' });
    };

    render() {
        const { data, error, loading, modalImage, showModal } = this.state;

        return (
            <div className="App">
                <Searchbar onSubmit={this.handleFormSubmit} />
                {error && <h2>{error.message}</h2>}
                {data && data.length === 0 && loading === false && (
                    <h2>No results were found for your search</h2>
                )}
                {data && (
                    <ImageGallery
                        data={data}
                        onImageClick={this.handleModalOpen}
                    />
                )}
                {data && data.length !== 0 && (
                    <Button onLoadClick={this.fetchImg} />
                )}
                {loading && (
                    <Loader
                        type="ThreeDots"
                        color="blueviolet"
                        height={80}
                        width={80}
                        className="Loader"
                    />
                )}
                {showModal && (
                    <Modal
                        modalImage={modalImage}
                        onClose={this.handleModalClose}
                    >
                        <img src={modalImage} alt="" />
                    </Modal>
                )}
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        );
    }
}

export default App;
