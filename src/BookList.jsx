import BookRow from "./BookRow";

const BOOKS = [
  {
    id: 1,
    title: "The Alchemist",
    author: "Md Shakibul Islma",
    featured: true,
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    featured: true,
  },
  {
    id: 3,
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    featured: false,
  },
  {
    id: 4,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    featured: false,
  },
  {
    id: 5,
    title: "Deep Work",
    author: "Cal Newport",
    featured: true,
  },
];

const BookList = () => {
  return (
    <>
      <ul className="space-y-4">
        {BOOKS.map((book) => (
          <>
            <div className="flex flex-col">
              <li key={book.id}>
                <BookRow book={book} />
              </li>
            </div>
          </>
        ))}
      </ul>
    </>
  );
};

export default BookList;
