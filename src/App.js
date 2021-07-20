import React from "react";
import './App.css';
import SearchInput from './components/SearchInput';
import TopicsList from './components/TopicsList';

class App extends React.Component {

  state = { inputValue: 'react' };

  handleSearchChange = (key) => {
    this.setState({ inputValue: key });
  }

  render() {
    const { inputValue } = this.state;
    return (
      <>
        <SearchInput
          initSearch={inputValue}
          onSearchChange={this.handleSearchChange}
        />
        <TopicsList
          key={inputValue}
          value={inputValue}
          onChange={this.handleSearchChange}
        />
      </>
    );
  }
}

export default App;
