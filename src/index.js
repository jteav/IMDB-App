import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

const URL = 'https://www.omdbapi.com/?apikey=fd944f71';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            type: '',
            results: []
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleType = this.handleType.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleType(event) {
        this.setState({type: event.target.value})
    }

    handleSubmit(event) {
        fetch(URL + "&s=" + this.state.value + "&type=" + this.state.type)
        .then(res => res.json())
        .then((result) => {
            console.log('result', result.Search)
            this.setState({results: result.Search})
        })

        event.preventDefault()
    }

    render() {
        return (
            <div className="container mt-3">
                <h1>IMDB App</h1>
                <form onSubmit={this.handleSubmit} className="input-group">
                    <input type="text" className="form-control" placeholder="Search" value={this.state.value} onChange={this.handleChange}></input>

                    <select value={this.state.type} onChange={this.handleType}>
                        <option value="">All</option>
                        <option value="movie">Movie</option>
                        <option value="series">Series</option>
                        <option value="game">Game</option>
                    </select>

                    <input type="submit" className="btn btn-primary" value="Search"></input>
                </form>

                <ul className="list-group">
                    {this.state.results.map(result => (
                        <li key={result.imdbID} className="list-group-item">
                            {result.Title}
                            <img src={result.Poster} className="img-fluid" alt='Poster'></img>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home/>);