import { classNames } from "../utils/utils";
import { Tooltip } from "react-tippy";
import { useState } from "react";

const Book = ({ leftPage, rightPage, activeBookmark, setActiveBookmark }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid grid-cols-2">
      <div className="book col-span-2 col-start-2">
        <Page name="back" rotation={0} scale={1.02} bookIsOpen={isOpen}>
          <span
            style={{
              position: "absolute",
              width: "90px",
              height: "90px",
              top: "260px",
              zIndex: 300,
              right: "-70px",
              borderBottomRightRadius: "10px",
              borderTopRightRadius: "10px",
              background: "#333333",
            }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex"
          >
            <i
              className={classNames(
                "fa-solid fa-2x text-white self-center ml-10",
                isOpen ? "fa-right-to-bracket" : "fa-left-to-bracket"
              )}
            ></i>
          </span>
        </Page>
        <Page name="page6" rotation={-15} scale={1.0} bookIsOpen={isOpen}>
          {rightPage}
        </Page>
        <Page
          name="page5"
          className="overflow-hidden"
          rotation={-165}
          scale={1.0}
          bookIsOpen={isOpen}
        >
          {leftPage}
        </Page>
        <Page name="page4" rotation={-10} scale={1.0} bookIsOpen={isOpen} />
        <Page name="page3" rotation={-170} scale={1.0} bookIsOpen={isOpen} />
        <Page name="page2" rotation={-3} scale={1.0} bookIsOpen={isOpen} />
        <Page
          name="page1"
          rotation={-177}
          scale={1.0}
          bookIsOpen={isOpen}
        ></Page>
        <Page name="page1" rotation={-177} scale={1.0} bookIsOpen={isOpen}>
          <Bookmark
            label={"projects"}
            icon={"fa-solid fa-2x fa-computer-classic"}
            color={"#D97066"}
            top={"260px"}
            isActive={activeBookmark === "projects"}
            setActiveBookmark={setActiveBookmark}
            bookIsOpen={isOpen}
          />
          <Bookmark
            label={"resume"}
            icon={"fa-solid fa-2x fa-file-user"}
            color={"#F4CE14"}
            top={"340px"}
            isActive={activeBookmark === "resume"}
            setActiveBookmark={setActiveBookmark}
            bookIsOpen={isOpen}
          />
          <Bookmark
            label={"artwork"}
            icon={"fa-solid fa-2x fa-brush"}
            color={"#495E57"}
            top={"420px"}
            isActive={activeBookmark === "artwork"}
            setActiveBookmark={setActiveBookmark}
            bookIsOpen={isOpen}
          />
        </Page>
        <Page name="front" rotation={-180} scale={1.02} bookIsOpen={isOpen}>
          <div className="notebook-skin">Corbin Gruber</div>
        </Page>
      </div>
    </div>
  );
};

const Page = ({ name, rotation, scale, bookIsOpen, children }) => (
  <div
    className={classNames(name, "p-5")}
    style={
      bookIsOpen
        ? {
            transform: `rotateY(${rotation}deg) scale(${scale})`,
            boxShadow: "0 1em 3em 0 rgba(0, 0, 0, 0.2)",
          }
        : {}
    }
  >
    {children}
  </div>
);

const Bookmark = ({
  label,
  icon,
  color,
  top,
  isActive,
  setActiveBookmark,
  bookIsOpen,
}) => {
  return (
    <Tooltip title={label} position="left" arrow={true}>
      <span
        style={{
          width: "150px",
          height: "0px",
          borderBottom: "30px solid " + color,
          borderTop: "30px solid " + color,
          borderLeft: "15px solid transparent",
          float: "right",
          marginBottom: "20px",
          fontSize: "17px",
          fontWeight: 700,
          position: "absolute",
          top: top,
          transform: bookIsOpen
            ? "rotateY(180deg)"
            : "rotateY(180deg) translateX(100px)",
        }}
        className={classNames(
          "flex",
          isActive ? "bookmark-active" : "bookmark"
        )}
        onClick={() => {
          setActiveBookmark(label);
        }}
      >
        <i className={`${icon} text-white self-center ml-5`} />
      </span>
    </Tooltip>
  );
};

export default Book;
