import BookDetails from "./BookDetails";
import FeatureBook from "./FeatureBook";
import PropTypes from "prop-types";

const BookRow = ({ book }) => {
  return (
    <div className="flex items-center justify-between border border-gray-400 p-4 rounded-md shadow-xl">
      <BookDetails title={book.title} author={book.author} />
      <FeatureBook />
    </div>
  );
};

BookRow.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookRow;
