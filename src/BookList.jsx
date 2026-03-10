import PropTypes from "prop-types";
import BookRow from "./BookRow";

function BookList({ searchTerm, books }) {
  const rews = [];
  books.forEach((book) => {
    if (book.title.toLowerCase().indexOf(searchTerm.toLowerCase()) === -1) {
      return;
    }
    rews.push(<BookRow key={book.id} book={book} />);
  });

  return (
    <>
      <div className="space-y-5">{rews}</div>
    </>
  );
}

BookList.PropTypes = {
  searchTerm: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
};

export default BookList;
