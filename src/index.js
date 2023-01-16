import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event) {
        console.log(this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <div className="container mt-3">
                <form onSubmit={this.handleSubmit} className="input-group">
                    <input type="text" className="form-control" placeholder="Search" value={this.state.value} onChange={this.handleChange}></input>
                    <input type="submit" className="btn btn-primary" value="Search"></input>
                </form>
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Home/>);