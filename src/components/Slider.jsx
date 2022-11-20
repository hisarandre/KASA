import React, { useState, useEffect } from "react";
import leftarrow from "../assets/leftarrow.svg";
import rightarrow from "../assets/rightarrow.svg";

const Slider = ({ pictures }) => {
  const [current, setCurrent] = useState(0);
  const length = pictures.length;
  const autoScroll = true;
  let intervalTime = 5000;
  let slideInterval;

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const moveDot = (index) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const auto = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  if (!Array.isArray(pictures) || pictures.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {length > 1 && (
        <>
          <img src={leftarrow} alt="button to left" className="slider__leftarrow" onClick={prevSlide} />
          <img src={rightarrow} alt="button to right" className="slider__rightarrow" onClick={nextSlide} />
          <div className="dots">
            {Array.from({ length }).map((obj, index) => {
              return (
                <div
                  className={index === current ? "dots__dot active" : "dots__dot"}
                  key={`dot-${index}`}
                  onClick={() => {
                    moveDot(index);
                  }}
                />
              );
            })}
          </div>
        </>
      )}
      {pictures.map((slide, index) => {
        return (
          <div className={index === current ? "slide active" : "slide"} key={`slider-${index}`}>
            {index === current && <img src={slide} alt={"accommodation"} className="slider__picture" />}
          </div>
        );
      })}
    </section>
  );
};

export default Slider;
