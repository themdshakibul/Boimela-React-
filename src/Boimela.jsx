import BookList from "./BookList";
import Search from "./Search";
import Header from "./Header";

import { useState } from "react";

export default function Boimela() {
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

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div>
        <Header />
        <Search searchTerm={searchTerm} onSearchBook={setSearchTerm} />
        <BookList searchTerm={searchTerm} books={BOOKS} />
      </div>
    </>
  );
}
