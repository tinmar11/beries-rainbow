import React from "react";

import PropTypes from "prop-types";

const HowItWorks = (props) => {
  return (
    <>
      <section id="how it works" className="how-it-works-how-it-works">
        <h1 className="H1">{props.heading}</h1>
        <div className="how-it-works-steps-container">
          <div className="how-it-works-step-1">
            <div className="how-it-works-container">
              <div className="how-it-works-container1">
                <img
                  alt={props.image_alt}
                  src={props.image_src}
                  className="how-it-works-image"
                />
              </div>
            </div>
            <div className="how-it-works-container2">
              <h1 className="how-it-works-text01">{props.heading1}</h1>
              <span className="description-step1">
                <span>
                  Ciliciam vero, quae Cydno amni exultat, Tarsus nobilitat, urbs
                  perspicabilis hanc
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="how-it-works-step-2">
            <div className="how-it-works-container3">
              <div className="how-it-works-container4">
                <img
                  alt={props.image_alt1}
                  src={props.image_src1}
                  className="how-it-works-image1"
                />
              </div>
            </div>
            <div className="how-it-works-container5">
              <h1 className="how-it-works-text05">{props.heading2}</h1>
              <span className="description-step2">
                <span>
                  Ciliciam vero, quae Cydno amni exultat, Tarsus nobilitat, urbs
                  perspicabilis hanc
                </span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="how-it-works-step-3">
            <div className="how-it-works-container6">
              <div className="how-it-works-container7">
                <img
                  alt={props.image_alt2}
                  src={props.image_src2}
                  className="how-it-works-image2"
                />
              </div>
            </div>
            <div className="how-it-works-container8">
              <h1 className="how-it-works-text09">{props.heading3}</h1>
              <span className="description-step3">
                <span>
                  Ciliciam vero, quae Cydno amni exultat, Tarsus nobilitat, urbs
                  perspicabilis hanc
                </span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .how-it-works-how-it-works {
            width: 100%;
            height: auto;
            display: flex;
            position: relative;
            max-width: 100%;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: 140px;
            padding-right: 140px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .how-it-works-steps-container {
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            justify-content: center;
          }
          .how-it-works-step-1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .how-it-works-container {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: center;
          }
          .how-it-works-container1 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .how-it-works-image {
            width: 50px;
            align-self: center;
            object-fit: contain;
          }
          .how-it-works-container2 {
            display: flex;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 0px;
          }
          .how-it-works-text01 {
            font-size: 1.5rem;
            align-self: flex-start;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
          }
          .description-step1 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            align-self: flex-start;
            text-align: left;
            padding-right: 50px;
          }
          .how-it-works-step-2 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .how-it-works-container3 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: center;
          }
          .how-it-works-container4 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .how-it-works-image1 {
            width: 50px;
            align-self: center;
            object-fit: contain;
          }
          .how-it-works-container5 {
            display: flex;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 0px;
          }
          .how-it-works-text05 {
            font-size: 1.5rem;
            align-self: flex-start;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
          }
          .description-step2 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: left;
            padding-right: 50px;
          }
          .how-it-works-step-3 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: center;
          }
          .how-it-works-container6 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: var(--dl-space-space-unit);
            flex-direction: row;
            justify-content: center;
          }
          .how-it-works-container7 {
            flex: 0 0 auto;
            width: var(--dl-size-size-small);
            height: var(--dl-size-size-small);
            display: flex;
            align-self: center;
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: row;
            justify-content: center;
            background-color: #f5f5f5ff;
          }
          .how-it-works-image2 {
            width: 100%;
            align-self: center;
            object-fit: contain;
          }
          .how-it-works-container8 {
            display: flex;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: column;
            padding-bottom: 0px;
          }
          .how-it-works-text09 {
            font-size: 1.5rem;
            align-self: flex-start;
            text-align: center;
            font-weight: 500;
            margin-bottom: 0px;
          }
          .description-step3 {
            color: var(--dl-color-gray-500);
            font-size: 0.75rem;
            text-align: left;
            padding-right: 50px;
          }
          @media (max-width: 991px) {
            .how-it-works-how-it-works {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
          }
          @media (max-width: 767px) {
            .how-it-works-how-it-works {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .how-it-works-steps-container {
              align-items: flex-start;
              padding-left: 0px;
              flex-direction: column;
            }
            .how-it-works-step-1 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .how-it-works-container {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: center;
            }
            .how-it-works-container1 {
              background-color: transparent;
            }
            .how-it-works-image {
              height: 40px;
            }
            .how-it-works-container2 {
              width: 100%;
              height: auto;
              align-items: flex-start;
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: 0px;
              justify-content: space-between;
            }
            .how-it-works-text01 {
              margin-top: 0px;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .description-step1 {
              text-align: left;
            }
            .how-it-works-step-2 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .how-it-works-container3 {
              width: var(--dl-size-size-small);
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: center;
            }
            .how-it-works-container4 {
              background-color: transparent;
            }
            .how-it-works-image1 {
              height: 40px;
            }
            .how-it-works-container5 {
              width: 100%;
              align-items: flex-start;
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: 0px;
              justify-content: space-between;
            }
            .how-it-works-text05 {
              font-size: 1.5rem;
              margin-top: 0px;
              font-weight: 500;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0px;
            }
            .description-step2 {
              text-align: left;
            }
            .how-it-works-step-3 {
              width: 100%;
              height: auto;
              flex-direction: row;
              justify-content: center;
            }
            .how-it-works-container6 {
              width: auto;
              height: auto;
              align-self: stretch;
              padding-top: 0px;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
              padding-bottom: 2px;
              justify-content: center;
            }
            .how-it-works-container7 {
              background-color: transparent;
            }
            .how-it-works-image2 {
              height: 40px;
            }
            .how-it-works-container8 {
              width: 100%;
              align-items: flex-start;
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: 0px;
              justify-content: space-between;
            }
            .how-it-works-text09 {
              font-size: 1.5rem;
              margin-top: 0px;
              font-weight: 500;
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: 0it;
            }
            .description-step3 {
              text-align: left;
            }
          }
          @media (max-width: 479px) {
            .how-it-works-how-it-works {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-unit);
            }
            .how-it-works-steps-container {
              padding-left: 0px;
            }
            .how-it-works-container2 {
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .how-it-works-text01 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .how-it-works-container5 {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .how-it-works-text05 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
            .how-it-works-container8 {
              padding-top: 0px;
              padding-left: var(--dl-space-space-unit);
              padding-right: 0px;
              padding-bottom: 0px;
            }
            .how-it-works-text09 {
              margin-left: 0px;
              margin-right: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  );
};

HowItWorks.defaultProps = {
  heading: "How it works ?",
  heading1: "Mint",
  heading2: "Burn",
  heading3: "Shipping",
  image_src: "/assets/1.svg",
  image_alt: "image",
  image_src1: "/assets/2.svg",
  image_alt1: "image",
  image_src2: "/assets/3.svg",
  image_alt2: "image",
};

HowItWorks.propTypes = {
  heading: PropTypes.string,
  heading1: PropTypes.string,
  heading2: PropTypes.string,
  heading3: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
};

export default HowItWorks;
