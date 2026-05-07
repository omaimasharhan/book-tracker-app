import React from "react";

const BookForm = ({ setBookTitle, setTotalPages, setTotalChapters }) => {
  return (
    <div>
      <h1>Book Tracker</h1>
      <h2>Book Title</h2>
      <input
        type="text"
        placeholder="Enter book title"
        onChange={(e) => setBookTitle(e.target.value)}
      />

      <h2>Number of Pages</h2>
      <input
        type="number"
        placeholder="Enter page numbers"
        onChange={(e) => setTotalPages(Number(e.target.value))}
      />

      <h2>Number of Chapters</h2>
      <input
        type="number"
        placeholder="Enter chapter numbers"
        onChange={(e) => setTotalChapters(Number(e.target.value))}
      />
    </div>
  );
};
export default BookForm;
