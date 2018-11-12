import React from "react";
import ReggaeArtists from "./ReggaeArtists.json";

class SearchBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text : "",
            results : ReggaeArtists.Reggae
        };
        

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            text : event.target.value,
            results : ReggaeArtists.Reggae.filter(artist => (new RegExp(event.target.value, "i").test(artist)))
        });      
    }

    render() {
        const artists = this.state.results.map(artist => <li>{artist}</li>);
        return(
            <div>
                <div className="search">
                    <h2>Search:</h2>
                    <input value={this.state.text} onChange={this.handleChange} placeholder={"Search the list with React"}/>            
                </div>
                <div className="resultBox">
                    <ul>
                        {artists}
                    </ul>

                </div>

            </div>
        );
    }

}

export default SearchBox;