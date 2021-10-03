import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Searchbar.css';

class Searchbar extends Component {
    state = {
        query: '',
    };

    handleNameChange = e => {
        this.setState({
            query: e.currentTarget.value.toLowerCase(),
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.query.trim() === '') {
            toast.warn('Enter your request');
            return;
        }
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };

    render() {
        return (
            <header className="Searchbar">
                <form className="SearchForm" onSubmit={this.handleSubmit}>
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        value={this.state.query}
                        onChange={this.handleNameChange}
                    />
                </form>
            </header>
        );
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
