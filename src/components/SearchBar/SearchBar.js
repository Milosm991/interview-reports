import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import style from "./SearchBar.module.scss";

class SearchBar extends React.Component {
  getValue = (e) => {
    this.props.getInputValue(e.target.value);
  };
  
  render() {
    return (
      <div className={style.search}>
        <AiOutlineSearch />
        <input
          type="search"
          placeholder="Search"
          onKeyUp={this.getValue}
        ></input>
      </div>
    );
  }
}

export { SearchBar };
