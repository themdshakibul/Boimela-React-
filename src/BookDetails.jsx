import PropTypes from "prop-types";

const BookDetails = ({ title, author }) => {
  return (
    <>
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-xl font-semibold">{author}</p>
      </div>
    </>
  );
};

BookDetails.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default BookDetails;
