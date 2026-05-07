import BookForm from "./components/BookForm";
import Button from "./components/Button";
import StatisticLine from "./components/StatisticLine";
import { useState } from "react";
import "./index.css";

const App = () => {
  const [pagesRead, setPages] = useState(0);
  const [chaptersRead, setChapters] = useState(0);
  const [readingSessions, setSessions] = useState(0);

  const [bookTitle, setBookTitle] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [totalChapters, setTotalChapters] = useState(0);

  // Page Tracker
  const incrementPages = () => {
    if (pagesRead < totalPages) setPages(pagesRead + 1);
  };

  const decrementPages = () => {
    if (pagesRead > 0) setPages(pagesRead - 1);
  };

  // Chapter Tracker
  const incrementChapters = () => {
    if (chaptersRead < totalChapters) setChapters(chaptersRead + 1);
  };

  const decrementChapters = () => {
    if (chaptersRead > 0) setChapters(chaptersRead - 1);
  };

  // Session Tracker
  const incrementSessions = () => {
    setSessions(readingSessions + 1);
  };

  const decrementSessions = () => {
    if (readingSessions > 0) setSessions(readingSessions - 1);
  };

  // Add Book
  const [bookAdded, setBookAdded] = useState(false);

  const addBook = () => {
    setBookAdded(true);
  };

  // Reset
  const Reset = () => {
    setPages(0);
    setChapters(0);
    setSessions(0);
  };

  return (
    <>
      <div className="app">
        <BookForm
          setBookTitle={setBookTitle}
          setTotalPages={setTotalPages}
          setTotalChapters={setTotalChapters}
        />

        <Button text="Add Book" onClick={addBook} />
      </div>

      {bookAdded && (
        <div className="stat-line">
          {pagesRead === 0 && chaptersRead === 0 && readingSessions === 0 && (
            <h3 className="no-data">No data collected yet</h3>
          )}

          <div className="tracker">
            <StatisticLine
              text="Pages Read"
              value={`${pagesRead} / ${totalPages}`}
            />

            <Button text="+ Page" onClick={incrementPages} />

            <Button text="- Page" onClick={decrementPages} />
          </div>

          <div className="tracker">
            <StatisticLine
              text="Chapters Read"
              value={`${chaptersRead} / ${totalChapters}`}
            />

            <Button text="+ Chapter" onClick={incrementChapters} />

            <Button text="- Chapter" onClick={decrementChapters} />
          </div>

          <div className="tracker">
            <StatisticLine text="Reading Sessions" value={readingSessions} />

            <Button text="+ Session" onClick={incrementSessions} />

            <Button text="- Session" onClick={decrementSessions} />
          </div>

          <Button text="Reset" onClick={Reset} />
        </div>
      )}
    </>
  );
};

export default App;
