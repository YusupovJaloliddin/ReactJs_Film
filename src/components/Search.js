import React from "react";
export default class Search extends React.Component {
  state = {
    search: "iron",
    type: "all",
  };
  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovie(this.state.search);
    }
  };

  handleFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovie(this.state.search, this.state.type);
      }
    );
  };

  render() {
    return (
      <div class="row">
        <div class="input-field ">
          <input
            id="email_inline"
            placeholder="Search"
            type="search"
            class="validate"
            value={this.state.search}
            onChange={(e) => {
              this.setState({ search: e.target.value });
            }}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() =>
              this.props.searchMovie(this.state.search, this.state.type)
            }
          >
            Search Movies
          </button>
        </div>
        <div>
          <label>
            <input
              onChange={this.handleFilter}
              class="with-gap"
              name="type"
              type="radio"
              data-type="all"
              checked={this.state.type === "all"}
            />
            <span>All</span>
          </label>
          <label>
            <input
              onChange={this.handleFilter}
              class="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              checked={this.state.type === "movie"}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              onChange={this.handleFilter}
              class="with-gap"
              name="type"
              type="radio"
              data-type="series"
              checked={this.state.type === "series"}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}
