import React from "react";

import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <>
      <div className={`footer-container ${props.rootClassName} `}>
        <footer className="footer-footer">
          <div className="footer-links-container">
            <div className="footer-container1">
              <span className="footer-title">More about BeRies</span>
              <a
                href="mailto:contact@beries.xyz?subject="
                className="footer-link footer-text"
              >
                Contact BeRies here
              </a>
              <span className="footer-text1 footer-text">Documentation</span>
              <span className="footer-text2 footer-text">
                Partner Blueberry
              </span>
            </div>
            <div className="footer-container2">
              <span className="footer-title">Newsletter</span>
              <input
                type="text"
                placeholder={props.textinput_placeholder}
                className="input newsletter footer-textinput"
              />
            </div>
            <div className="footer-container3">
              <div className="footer-icon-group">
                <a
                  href="https://www.instagram.com/beries.eth/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link1"
                >
                  <img
                    alt={props.image_alt2}
                    src={props.image_src2}
                    className="footer-image"
                  />
                </a>
                <a
                  href="https://medium.com/@BeRies"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link2"
                >
                  <img
                    alt={props.image_alt1}
                    src={props.image_src1}
                    className="footer-image1"
                  />
                </a>
                <a
                  href="https://twitter.com/0xBeRies"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link3"
                >
                  <img
                    alt={props.image_alt}
                    src={props.image_src}
                    className="footer-image2"
                  />
                </a>
              </div>
              <span className="footer-text4 footer-text">
                BeRies is Worlwide
              </span>
            </div>
          </div>
        </footer>
      </div>
      <style jsx>
        {`
          .footer-container {
            width: 100%;
            height: 275px;
            display: flex;
            position: relative;
            align-items: center;
            padding-left: 140px;
            padding-right: 140px;
            flex-direction: column;
            background-color: #ffffff;
          }
          .footer-footer {
            width: 100%;
            height: 275px;
            display: flex;
            padding: 140x;
            max-width: auto;
            align-items: center;
            padding-top: 0px;
            padding-left: 0px;
            padding-right: 0px;
            flex-direction: row;
            padding-bottom: 0px;
            justify-content: space-between;
          }
          .footer-links-container {
            width: 100%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-container1 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
            justify-content: flex-start;
          }
          .footer-text {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .footer-link {
            margin-bottom: 0px;
            text-decoration: none;
          }
          .footer-text1 {
            margin-bottom: 0px;
          }
          .footer-text2 {
            margin-bottom: 0px;
          }
          .footer-container2 {
            flex: 0 0 auto;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: stretch;
            flex-direction: column;
            justify-content: space-between;
          }
          .footer-text3 {
            margin-bottom: 0px;
          }
          .footer-container3 {
            flex: 0 0 auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: column;
            justify-content: space-between;
          }
          .footer-icon-group {
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .footer-link1 {
            display: contents;
          }
          .footer-image {
            width: auto;
            height: 40px;
            object-fit: cover;
            text-decoration: none;
          }
          .footer-link2 {
            display: contents;
          }
          .footer-image1 {
            width: auto;
            height: 40px;
            object-fit: cover;
            text-decoration: none;
          }
          .footer-link3 {
            display: contents;
          }
          .footer-image2 {
            width: auto;
            height: 40px;
            object-fit: cover;
            text-decoration: none;
          }
          .footer-text4 {
            margin-bottom: 0px;
          }

          @media (max-width: 1200px) {
            .footer-links-container {
              justify-content: space-between;
              height: auto;
              width: 100%:


            }
            .footer-container1 {
              gap: var(--dl-space-space-unit);
              justify-content: flex-start;
            }
            .footer-link {
              margin-bottom: 0px;
            }
            .footer-text1 {
              margin-bottom: 0px;
            }
            .footer-text2 {
              margin-bottom: 0px;
            }
            .footer-container2 {
              justify-content: space-between;
            }
            .footer-container3 {
              justify-content: space-between;
            }
            .footer-text4 {
              margin-top: 0px;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 991px) {
            .footer-container {
              height: auto;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: column;
            }
            .footer-footer {
              height: auto;
              padding: var(--dl-space-space-threeunits);
              align-self: stretch;
              align-items: stretch;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: row;
              padding-bottom: var(--dl-space-space-unit);
              justify-content: space-between;
            }
            .footer-links-container {
              width: 100%;
              height: auto;
              align-self: stretch;
              align-items: center;
              padding-left: 0px;
              padding-right: 0px;
              flex-direction: row;
              justify-content: space-between;
            }
            .footer-container1 {
              gap: var(--dl-space-space-unit);
              width: auto;
              height: 200px;
              align-self: flex-start;
              align-items: stretch;
              margin-left: 0x;
              flex-direction: column;
            }
            .footer-link {
              margin-bottom: 0px;
            }
            .footer-text1 {
              margin-bottom: 0px;
            }
            .footer-text2 {
              margin-bottom: 0px;
            }
            .footer-container2 {
              height: 200px;
              align-self: flex-start;
              align-items: stretch;
              justify-content: space-between;
            }
            .footer-container3 {
              height: 200px;
              align-self: stretch;
              align-items: flex-end;
              justify-content: space-between;
            }
            .footer-text4 {
              align-self: stretch;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 767px) {
            .footer-container {
              height: auto;
            }
            .footer-footer {
              height: auto;
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              flex-direction: column;
              padding-bottom: var(--dl-space-space-unit);
              background-color: #ffffff;
            }
            .footer-links-container {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              height: auto;
              align-self: center;
              margin-top: 0px;
              align-items: center;
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-container1 {
              gap: var(--dl-space-space-halfunit);
              margin-left: 0px;
            }
            .footer-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-link {
              margin-bottom: 0px;
            }
            .footer-text1 {
              margin-bottom: 0x;
            }
            .footer-text2 {
              margin-bottom: 0px;
            }
            .footer-container2 {
              margin-right: var(--dl-space-space-unit);
            }
            .footer-text3 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-container3 {
              gap: var(--dl-space-space-halfunit);
              justify-content: flex-start;
            }
            .footer-icon-group {
              gap: var(--dl-space-space-oneandhalfunits);
              align-items: flex-start;
              justify-content: center;
            }
            .footer-text4 {
              align-self: center;
              margin-bottom: 0px;
            }
          }
          @media (max-width: 479px) {
            .footer-footer {
              height: auto;
              padding: var(--dl-space-space-unit);
              flex-direction: row;
              background-color: #ffffff;
            }
            .footer-links-container {
              gap: var(--dl-space-space-twounits);
              width: 100%;
              height: auto;
              align-self: stretch;
              align-items: stretch;
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-container1 {
              gap: var(--dl-space-space-halfunit);
              height: auto;
              align-items: flex-start;
              margin-right: 0px;
            }
            .footer-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-link {
              margin-bottom: 0px;
            }
            .footer-text1 {
              margin-bottom: 0px;
            }
            .footer-text2 {
              margin-bottom: 0px;
            }
            .footer-container2 {
              height: auto;
              margin-top: 0px;
              align-items: flex-start;
              margin-right: 0px;
            }
            .footer-text3 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .footer-textinput {
              align-self: stretch;
            }
            .footer-container3 {
              gap: var(--dl-space-space-unit);
              align-self: center;
              margin-top: 0px;
              align-items: stretch;
              flex-direction: column;
              justify-content: flex-start;
            }
            .footer-icon-group {
              gap: var(--dl-space-space-unit);
              justify-content: center;
            }
            .footer-image {
              margin-right: 0px;
            }
            .footer-image1 {
              margin-right: 0px;
            }
            .footer-image2 {
              margin-right: 0px;
            }
          }
        `}
      </style>
    </>
  );
};

Footer.defaultProps = {
  image_src2: "/assets/insta-icon-200h.webp",
  image_alt2: "image",
  textinput_placeholder: "placeholder",
  image_src1: "/assets/medium-icon-200h.webp",
  image_alt: "image",
  image_alt1: "image",
  rootClassName: "",
  image_src: "/assets/twitter-icon-200h.webp",
};

Footer.propTypes = {
  image_src2: PropTypes.string,
  image_alt2: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt: PropTypes.string,
  image_alt1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
};

export default Footer;
