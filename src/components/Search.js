import React from "react";
export default class Search extends React.Component {
  state = {
    search: "",
  };
  render() {
    return (
      <div class="row">
        <div class="col s12">
          <div class="input-field inline">
            <input
              id="email_inline"
              placeholder="Search"
              type="search"
              class="validate"
              value={this.state.search}
              onChange={(e) => {
                this.setState({ search: e.target.value });
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}
