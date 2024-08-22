import React from "react";
import "./Slider.css";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import img1 from "../../../Assets/boxb101.jpg";
import img2 from "../../../Assets/boxb102.jpg";
import img3 from "../../../Assets/boxb103.jpg";
import img4 from "../../../Assets/boxb104.jpg";
import img5 from "../../../Assets/boxb105.jpg";
import img6 from "../../../Assets/boxb106.jpg";
import img7 from "../../../Assets/boxb107.jpg";
import img8 from "../../../Assets/boxb108.jpg";
import img9 from "../../../Assets/boxb109.jpg";
import img10 from "../../../Assets/boxb110.jpg";
import img11 from "../../../Assets/boxb111.jpg";
import img12 from "../../../Assets/boxb112.jpg";
import img13 from "../../../Assets/boxb113.jpg";
import img14 from "../../../Assets/boxb114.jpg";
import img15 from "../../../Assets/boxb115.jpg";

export default function Slider() {
  const scrollImagesRef = useRef<HTMLDivElement | null>(null);
  const leftButtonRef = useRef<HTMLButtonElement | null>(null);
  const rightButtonRef = useRef<HTMLButtonElement | null>(null);
  const [scrollLength, setScrollLength] = useState<number>(0);
  const navigate = useNavigate();

  const goToProduct = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    navigate("/products");
  };

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
      <div className="box2 blockbuster_deals">
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
            <div>
              <div>
                <Link to="/">
                  <div>
                    <img src={img1} alt="" />
                  </div>
                </Link>
              </div>
              <div>
                <div>
                  <span>
                    <button onClick={goToProduct}>Up to 24% off</button>
                  </span>
                  <span>Great Freedom Sale</span>
                </div>
                <div>
                  <span>Samsung Galaxy M34</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link to="/">
                  <div>
                    <img src={img2} alt="" />
                  </div>
                </Link>
              </div>
              <div>
                <div>
                  <span>
                    <button onClick={goToProduct}>Up to 45% off</button>
                  </span>
                  <span>Great Freedom Sale</span>
                </div>
                <div>
                  <span>Redmi 12C | Starting from 7699 ...</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link to="/">
                  <div>
                    <img src={img3} alt="" />
                  </div>
                </Link>
              </div>
              <div>
                <div>
                  <span>
                    <button onClick={goToProduct}>Up to 76% off</button>
                  </span>
                  <span>Great Freedom Sale</span>
                </div>
                <div>
                  <span>Top headsets from Oneplus...</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link to="/">
                  <div>
                    <img src={img4} alt="" />
                  </div>
                </Link>
              </div>
              <div>
                <div>
                  <span>
                    <button onClick={goToProduct}>Up to 38% off</button>
                  </span>
                  <span>Great Freedom Sale</span>
                </div>
                <div>
                  <span>Daily Essentials</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link to="/">
                  <div>
                    <img src={img5} alt="" />
                  </div>
                </Link>
              </div>
              <div>
                <div>
                  <span>
                    <button onClick={goToProduct}>Up to 43% off</button>
                  </span>
                  <span>Great Freedom Sale</span>
                </div>
                <div>
                  <span>Skin - Biotique, Himalaya...</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link to="/">
                  <div>
                    <img src={img6} alt="" />
                  </div>
                </Link>
              </div>
              <div>
                <div>
                  <span>
                    <button onClick={goToProduct}>Up to 55% off</button>
                  </span>
                  <span>Great Freedom Sale</span>
                </div>
                <div>
                  <span>JBL Audio Freedom Sale...</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link to="/">
                  <div>
                    <img src={img7} alt="" />
                  </div>
                </Link>
              </div>
              <div>
                <div>
                  <span>
                    <button>Deal of the Day</button>
                  </span>
                  <span>Great Freedom Sale</span>
                </div>
                <div>
                  <span>OnePlus Nord CE 3 5G | Latest launch...</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link to="/">
                  <div>
                    <img src={img8} alt="" />
                  </div>
                </Link>
              </div>
              <div>
                <div>
                  <span>
                    <button onClick={goToProduct}>Up to 58% off</button>
                  </span>
                  <span>Great Freedom Sale</span>
                </div>
                <div>
                  <span>Alexa Devices - Echo and Fire TV..</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link to="/">
                  <div>
                    <img src={img9} alt="" />
                  </div>
                </Link>
              </div>
              <div>
                <div>
                  <span>
                    <button onClick={goToProduct}>Up to 63% off</button>
                  </span>
                  <span>Great Freedom Sale</span>
                </div>
                <div>
                  <span>Best Styles in Footwear and Handbags...</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link to="/">
                  <div>
                    <img src={img10} alt="" />
                  </div>
                </Link>
              </div>
              <div>
                <div>
                  <span>
                    <button onClick={goToProduct}>Up to 60% off</button>
                  </span>
                  <span>Great Freedom Sale</span>
                </div>
                <div>
                  <span>Top Offers on Mice & Keyboards</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link to="/">
                  <div>
                    <img src={img11} alt="" />
                  </div>
                </Link>
              </div>
              <div>
                <div>
                  <span>
                    <button onClick={goToProduct}>Up to 76% off</button>
                  </span>
                  <span>Great Freedom Sale</span>
                </div>
                <div>
                  <span>Best Selling Massagers</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link to="/">
                  <div>
                    <img src={img12} alt="" />
                  </div>
                </Link>
              </div>
              <div>
                <div>
                  <span>
                    <button onClick={goToProduct}>Up to 61% off</button>
                  </span>
                  <span>Great Freedom Sale</span>
                </div>
                <div>
                  <span>Lowest Ever Price on PS5 Console</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link to="/">
                  <div>
                    <img src={img13} alt="" />
                  </div>
                </Link>
              </div>
              <div>
                <div>
                  <span>
                    <button onClick={goToProduct}>Up to 68% off</button>
                  </span>
                  <span>Great Freedom Sale</span>
                </div>
                <div>
                  <span>Cycle and Cycling accessories...</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link to="/">
                  <div>
                    <img src={img14} alt="" />
                  </div>
                </Link>
              </div>
              <div>
                <div>
                  <span>
                    <button onClick={goToProduct}>Up to 63% off</button>
                  </span>
                  <span>Great Freedom Sale</span>
                </div>
                <div>
                  <span>Gas Stoves from Top Brands</span>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Link to="/">
                  <div>
                    <img src={img15} alt="" />
                  </div>
                </Link>
              </div>
              <div>
                <div>
                  <span>
                    <button onClick={goToProduct}>Up to 38% off</button>
                  </span>
                  <span>Great Freedom Sale</span>
                </div>
                <div>
                  <span>Lowest Prices of the year on Smartwa...</span>
                </div>
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
