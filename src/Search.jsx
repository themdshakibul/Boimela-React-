import PropTypes from "prop-types";

const Search = ({ searchTerm, onSearchBook }) => {
  return (
    <>
      <form>
        <input
          type="text"
          name="Text"
          // control component
          value={searchTerm}
          placeholder="Searche Books"
          onChange={(event) => onSearchBook(event.target.value)}
          className="border border-gray-400 rounded-md w-full p-2 px-4 mb-4"
        />
      </form>
    </>
  );
};

Search.PropTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchBook: PropTypes.string.isRequired,
};

export default Search;
