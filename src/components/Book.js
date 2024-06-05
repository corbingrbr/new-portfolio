import { classNames } from "../utils/utils";
import { Tooltip } from "react-tippy";
import { Link } from "react-router-dom";

const Book = ({
  leftPage,
  rightPage,
  activeBookmark,
  setActiveBookmark,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div className="grid grid-cols-2 mt-10">
      {/*<p className="text-justify ">
        I’m Derek, an astro-engineer based in Tattooine. I like to build X-Wings
        at
        <a class="underline decoration-sky-500">My Company, Inc</a>. Outside of
        work, I like to{" "}
        <a class="underline decoration-pink-500">watch pod-racing</a> and have{" "}
        <a class="underline decoration-indigo-500">light-saber</a> fights.
  </p>*/}

      <div className="book col-span-2 col-start-2">
        <Page name="back" rotation={3} scale={1.02} bookIsOpen={isOpen}>
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
            }}
            onClick={() => setIsOpen(!isOpen)}
            className="flex open-book-tab"
          >
            <i
              className={classNames(
                "fa-solid fa-2x text-white self-center ml-10",
                isOpen ? "fa-right-to-bracket" : "fa-left-to-bracket"
              )}
            ></i>
          </span>
        </Page>
        <Page name="page2" rotation={-3} scale={1.0} bookIsOpen={isOpen} />
        <Page name="page4" rotation={-10} scale={1.0} bookIsOpen={isOpen} />
        <Page
          name="page6"
          rotation={-15}
          scale={1.0}
          bookIsOpen={isOpen}
          scrollable={true}
        >
          {rightPage}
        </Page>
        <Page
          name="page5"
          rotation={-165}
          scale={1.0}
          bookIsOpen={isOpen}
          className="overflow-y-auto"
          scrollable={true}
        >
          {leftPage}
        </Page>

        <Page name="page3" rotation={-170} scale={1.0} bookIsOpen={isOpen} />

        <Page
          name="page1"
          rotation={-177}
          scale={1.0}
          bookIsOpen={isOpen}
        ></Page>
        <Page name="page1" rotation={-177} scale={1.0} bookIsOpen={isOpen}>
          <Bookmark
            label={"contents"}
            href={"/contents"}
            icon={"fa-solid fa-2x fa-signs-post"}
            color={"#555555"}
            top={"180px"}
            isActive={activeBookmark === "contents"}
            setActiveBookmark={setActiveBookmark}
            bookIsOpen={isOpen}
          />
          <Bookmark
            label={"projects"}
            href={"/projects"}
            icon={"fa-solid fa-2x fa-computer-classic"}
            color={"#4F45E4"}
            top={"260px"}
            isActive={activeBookmark === "projects"}
            setActiveBookmark={setActiveBookmark}
            bookIsOpen={isOpen}
          />
          <Bookmark
            label={"resume"}
            href={"/resume"}
            icon={"fa-solid fa-2x fa-file-user"}
            color={"#CDDC39"}
            top={"340px"}
            isActive={activeBookmark === "resume"}
            setActiveBookmark={setActiveBookmark}
            bookIsOpen={isOpen}
          />
          <Bookmark
            label={"artwork"}
            href={"/artwork"}
            icon={"fa-solid fa-2x fa-brush"}
            color={"#9BA3AF"}
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
    className={classNames(name, "p-5 ")}
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
  href,
}) => {
  const capitalizeFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <Link to={href}>
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
        <Tooltip
          title={capitalizeFirstLetter(label)}
          position="left"
          sticky={true}
          //open={true}
          className="bookmark-tooltip self-center mt-2"
        >
          <i className={`${icon} text-white self-center ml-5`} />
        </Tooltip>
      </span>
    </Link>
  );
};

export default Book;
