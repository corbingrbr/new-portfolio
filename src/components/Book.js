const Book = ({ leftPage, rightPage }) => {
  return (
    <div className="grid grid-cols-2">
      <div className="book col-span-2 col-start-2">
        <div className="back"></div>
        <div className="page6">{rightPage}</div>
        <div className="page5 overflow-hidden pr-5 pt-5">{leftPage}</div>
        <div className="page4"></div>
        <div className="page3"></div>
        <div className="page2"></div>
        <div className="page1"></div>
        <div className="front"></div>
      </div>
    </div>
  );
};

export default Book;
