import React from 'react';

class SearchInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.initSearch,
    };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { inputValue } = this.state;
    const { onSearchChange } = this.props;
    return (
      <>
        <input
          value={inputValue}
          onChange={this.handleChange}
        />
        <button
          onClick={() => {
            return onSearchChange(inputValue);
          }}
          type="button"
        >
          Search
        </button>
      </>
    );
  }
}

export default SearchInput;
