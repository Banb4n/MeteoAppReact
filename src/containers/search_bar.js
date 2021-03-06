import React, { Component } from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: "" };

        // Au moment de l'appel ( onChange => this ne se referre plus au Component SearchBar ) donc this.setState est undefided, donc pour cela nous utilisons bind dans constructeur.
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event) {
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event) {
        event.preventDefault();

        // We need to go and fetch weather data 
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                 placeholder="Search your city"
                 className="form-control"
                 value={this.state.term}
                 onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        );
    }
}