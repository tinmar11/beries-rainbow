import React from "react";

import PropTypes from "prop-types";

const Preloader = (props) => {
  return (
    <>
      <div className={`preloader-container ${props.rootClassName} `}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="preloader-logo-beries-blanc"
        />
        <span className="press-to-enter">{props.text}</span>
        <img src="/assets/arrow.svg" className="preloader-arrow" />
      </div>
      <style jsx>
        {`
          .preloader-container {
            gap: var(--dl-space-space-halfunit);
            width: 100vw;
            height: 100vh;
            display: flex;
            z-index: 9999;
            position: fixed;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #0000ff;
          }
          .preloader-logo-beries-blanc {
            width: 363px;
            animation: logo-appear 1.5s cubic-bezier(0.83, 0, 0.17, 1) forwards;
          }
          .preloader-arrow {
            width: 40px;
            transform: rotateZ(-90deg);
            animation: arrow-appear 1s cubic-bezier(0.83, 0, 0.17, 1) forwards;
            animation-delay: 1.5s;
            opacity: 0;
          }

          .press-to-enter {
            color: white;
            animation: text-appear 1s cubic-bezier(0.83, 0, 0.17, 1) forwards;
            animation-delay: 1s;
            opacity: 0;
          }

          @keyframes text-appear {
            0% {
              transform: translateY(-30px);

              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes arrow-appear {
            0% {
              transform: translateY(-30px);
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }

          @keyframes logo-appear {
            0% {
              transform: translateY(-65px);
              filter: blur(5px);
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
        `}
      </style>
    </>
  );
};

Preloader.defaultProps = {
  image_src: "/assets/logo blanc.svg",
  image_src1: "/assets/arrow.svg",
  text: "Press to enter...",
};

Preloader.propTypes = {
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
};

export default Preloader;
