import React, { useState } from 'react';
import cx from 'classnames';
import SliderContext from './context';
import Content from './Content';
import SlideButton from './SlideButton';
import SliderWrapper from './SliderWrapper';
import useSliding from './useSliding';
import useSizeElement from './useSizeElement';

const NetFlixSlider = ({ children, activeSlide }) => {
  const [currentSlide, setCurrentSlide] = useState(activeSlide);
  const { width, elementRef } = useSizeElement();
  const {
    handlePrev,
    handleNext,
    slideProps,
    containerRef,
    hasNext,
    hasPrev
  } = useSliding(width, React.Children.count(children));

  const handleSelect = movie => {
    setCurrentSlide(movie);
  };

  const handleClose = () => {
    setCurrentSlide(null);
  };

  const contextValue = {
    onSelectSlide: handleSelect,
    onCloseSlide: handleClose,
    elementRef,
    currentSlide,
  };

  return (
    <section className="popular-products-area pb-60">
      <div className="container">
        <div className="tab products-category-tab-style-2">
          <div className="title">
            <h2><span className="dot"></span> Popular Games</h2>
          </div>
        </div>
        <SliderContext.Provider value={contextValue}>
          <SliderWrapper>
            <div
              className={cx('slider', { 'slider--open': currentSlide != null })}
            >
              <div ref={containerRef} className="slider__container" {...slideProps}>{children}</div>
            </div>
            {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
            {hasNext && <SlideButton onClick={handleNext} type="next" />}
          </SliderWrapper>
          {currentSlide && <Content movie={currentSlide} onClose={handleClose} />}
        </SliderContext.Provider>
      </div>
    </section>
  );
};

export default NetFlixSlider;
