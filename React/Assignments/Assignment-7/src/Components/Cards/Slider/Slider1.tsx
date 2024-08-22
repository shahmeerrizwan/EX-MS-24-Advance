import React from "react";
import "./Slider.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../Assets/boxn01.jpg";
import img2 from "../../../Assets/boxn02.jpg";
import img3 from "../../../Assets/boxn03.jpg";
import img4 from "../../../Assets/boxn04.jpg";
import img5 from "../../../Assets/boxn05.jpg";
import img6 from "../../../Assets/boxn06.jpg";
import img7 from "../../../Assets/boxn07.jpg";
import img8 from "../../../Assets/boxn08.jpg";
import img9 from "../../../Assets/boxn09.jpg";
import img10 from "../../../Assets/boxn10.jpg";
import img11 from "../../../Assets/boxn11.jpg";
import img12 from "../../../Assets/boxn12.jpg";
import img13 from "../../../Assets/boxb109.jpg";
import img14 from "../../../Assets/box242.jpg";
import img15 from "../../../Assets/box161.jpg";

export default function Slider() {
  const scrollImagesRef = useRef<HTMLDivElement | null>(null);
  const leftButtonRef = useRef<HTMLButtonElement | null>(null);
  const rightButtonRef = useRef<HTMLButtonElement | null>(null);
  const [scrollLength, setScrollLength] = useState<number>(0);

  useEffect(() => {
    const scrollImages = scrollImagesRef.current;
    const updateScrollLength = () => {
      if (scrollImages) {
        setScrollLength(scrollImages.scrollWidth - scrollImages.clientWidth);
      }
    };
    updateScrollLength();
    window.addEventListener("resize", updateScrollLength);
    return () => {
      window.removeEventListener("resize", updateScrollLength);
    };
  }, []);

  useEffect(() => {
    const scrollImages = scrollImagesRef.current;
    const leftButton = leftButtonRef.current;
    const rightButton = rightButtonRef.current;

    const checkScroll = () => {
      if (scrollImages) {
        const currentScroll = scrollImages.scrollLeft;
        if (currentScroll === 0) {
          leftButton?.setAttribute("disabled", "true");
          rightButton?.removeAttribute("disabled");
        } else if (currentScroll === scrollLength) {
          rightButton?.setAttribute("disabled", "true");
          leftButton?.removeAttribute("disabled");
        } else {
          leftButton?.removeAttribute("disabled");
          rightButton?.removeAttribute("disabled");
        }
      }
    };

    if (scrollImages) {
      scrollImages.addEventListener("scroll", checkScroll);
      return () => {
        scrollImages.removeEventListener("scroll", checkScroll);
      };
    }
  }, [scrollLength]);

  const leftScroll = () => {
    if (scrollImagesRef.current) {
      scrollImagesRef.current.scrollBy({
        left: -1100,
        behavior: "smooth",
      });
    }
  };

  const rightScroll = () => {
    if (scrollImagesRef.current) {
      scrollImagesRef.current.scrollBy({
        left: 1100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div className="box2 blockbuster_deals width">
        <div>
          <div>
            <h2>Blockbuster deals</h2>
            <span>See all deals</span>
          </div>
          <div className="mini_slide-block" ref={scrollImagesRef}>
            <div
              className="left_img_button"
              id="slideButton-b"
              onClick={leftScroll}
            >
              <i className="fa-solid fa-angle-left"></i>
            </div>
            <div className="sm">
              <div>
                <Link to="/products">
                  <div className="kaam">
                    <img src={img1} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="sm">
              <div>
                <Link to="/products">
                  <div className="kaam">
                    <img src={img2} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="sm">
              <div>
                <Link to="/products">
                  <div className="kaam">
                    <img src={img3} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="sm">
              <div>
                <Link to="/products">
                  <div className="kaam">
                    <img src={img4} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="sm">
              <div>
                <Link to="/products">
                  <div className="kaam">
                    <img src={img5} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="sm">
              <div>
                <Link to="/products">
                  <div className="kaam">
                    <img src={img6} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="sm">
              <div>
                <Link to="/products">
                  <div className="kaam">
                    <img src={img7} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="sm">
              <div>
                <Link to="/products">
                  <div className="kaam">
                    <img src={img8} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="sm">
              <div>
                <Link to="/products">
                  <div className="kaam">
                    <img src={img9} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="sm">
              <div>
                <Link to="/products">
                  <div className="kaam">
                    <img src={img10} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="sm">
              <div>
                <Link to="/products">
                  <div className="kaam">
                    <img src={img11} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="sm">
              <div>
                <Link to="/products">
                  <div className="kaam">
                    <img src={img12} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="sm">
              <div>
                <Link to="/products">
                  <div className="kaam">
                    <img src={img13} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="sm">
              <div>
                <Link to="/products">
                  <div className="kaam">
                    <img src={img14} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div className="sm">
              <div>
                <Link to="/products">
                  <div className="kaam">
                    <img src={img15} alt="" />
                  </div>
                </Link>
              </div>
            </div>
            <div
              className="right_img_button"
              id="slideButton-b"
              onClick={rightScroll}
            >
              <i className="fa-solid fa-angle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
