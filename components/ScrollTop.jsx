import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTop = () => {
  const [scrollUpBtn, setScrollUpBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop > 50 ||
        document.body.scrollTop > 50
      ) {
        setScrollUpBtn(true);
      } else {
        setScrollUpBtn(false);
      }
    });
  }, [scrollUpBtn]);

  const scrollBackUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <button
      onClick={() => scrollBackUp()}
      type="button"
      title="Scroll Up"
      className={
        scrollUpBtn
          ? "fixed text-black bottom-[50px] right-3 opacity-100 duration-300 ease-in-out min-w-[15px]"
          : "fixed text-black bottom-[50px] right-3 opacity-0 duration-300 ease-out min-w-[15px]"
      }
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollTop;
