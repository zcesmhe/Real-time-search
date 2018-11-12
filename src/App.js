import React from 'react';
import SearchBox from "./Components/SearchBox";


class App extends React.Component {
  render() {
    return (
      <div className="app">
      
        <div className="introBox">
          <h1>React Search!</h1>
          <p>Here is a list of Reggae artists rendered from a JSON object</p>
        </div>
          <SearchBox />
      </div>
    );
  }
}

export default App;
