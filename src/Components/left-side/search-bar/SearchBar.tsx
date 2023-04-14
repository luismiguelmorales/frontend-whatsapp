import { MdSearch, MdFilterList } from "react-icons/md";
import "./SearchBar.css";
import { FiArrowLeft } from "react-icons/fi";
import { useState } from "react";

function SearchBar() {
  const [isInputFocused, setIsInputFocused] = useState(false);

  function handleInputFocus() {
    setIsInputFocused(true);
  }

  function handleInputBlur() {
    setIsInputFocused(false);
  }

  return (
    <div className="search-container">
      <div className="search-bar">
        {isInputFocused ? (
          <FiArrowLeft size={24} color={"#00a884"}></FiArrowLeft>
        ) : (
          <MdSearch size={20} color={"#54656f"}></MdSearch>
        )}
        <input
          className="search-input"
          placeholder="Search or start new chat"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
        ></input>
      </div>
      <MdFilterList size={20} color={"#54656f"}></MdFilterList>
    </div>
  );
}

export default SearchBar;
