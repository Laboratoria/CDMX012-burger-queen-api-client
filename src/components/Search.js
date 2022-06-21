import React from "react";

const Search = () => {
  return (
    <section>
      <section className="search">
        <img
          className="Search"
          alt="searchIcon"
          src={require("../assets/Search.png")}
        />
        <input type="text" placeholder="Search..." />
      </section>
    </section>
  );
};

export default Search;
