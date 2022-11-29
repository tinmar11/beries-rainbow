import React from "react";

import PropTypes from "prop-types";

const MeetOurTeam = (props) => {
  return (
    <>
      <section id="meet our team" className="meet-our-team-meet-our-team">
        <h1 className="meet-our-team-text H1">{props.heading}</h1>
        <div className="meet-our-team-team-1row-container">
          <div className="meet-our-team-container">
            <img
              id="team-pic"
              alt={props.image_alt}
              src={props.image_src}
              className="team-pic"
            />
            <div className="meet-our-team-container01">
              <span className="team-name meet-our-team-text01">
                {props.text}
              </span>
              <span className="meet-our-team-text02 team-role">
                {props.text1}
              </span>
            </div>
          </div>
          <div className="meet-our-team-container02">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="meet-our-team-image1 team-pic"
            />
            <div className="meet-our-team-container03">
              <span className="meet-our-team-text03 team-name">
                {props.text2}
              </span>
              <span className="meet-our-team-text04 team-role">
                {props.text3}
              </span>
            </div>
          </div>
          <div className="meet-our-team-container04">
            <img
              alt={props.image_alt2}
              src={props.image_src2}
              className="meet-our-team-image2 team-pic"
            />
            <div className="meet-our-team-container05">
              <span className="meet-our-team-text05 team-name">
                {props.text4}
              </span>
              <span className="meet-our-team-text06 team-role">
                {props.text5}
              </span>
            </div>
          </div>
          <div className="meet-our-team-container06">
            <img
              alt={props.image_alt3}
              src={props.image_src3}
              className="meet-our-team-image3 team-pic"
            />
            <div className="meet-our-team-container07">
              <span className="meet-our-team-text07 team-name">
                {props.text6}
              </span>
              <span className="meet-our-team-text08 team-role">
                {props.text7}
              </span>
            </div>
          </div>
        </div>
        <div className="meet-our-team-team-1row-container1">
          <div className="meet-our-team-container08">
            <img
              id="team-pic"
              alt={props.image_alt4}
              src={props.image_src4}
              className="team-pic"
            />
            <div className="meet-our-team-container09">
              <span className="team-name">{props.text8}</span>
              <span className="meet-our-team-text10 team-role">
                {props.text9}
              </span>
            </div>
          </div>
          <div className="meet-our-team-container10">
            <img
              alt={props.image_alt5}
              src={props.image_src5}
              className="meet-our-team-image5 team-pic"
            />
            <div className="meet-our-team-container11">
              <span className="meet-our-team-text11 team-name">
                {props.text10}
              </span>
              <span className="meet-our-team-text12 team-role">
                {props.text11}
              </span>
            </div>
          </div>
          <div className="meet-our-team-container12">
            <img
              alt={props.image_alt6}
              src={props.image_src6}
              className="meet-our-team-image6 team-pic"
            />
            <div className="meet-our-team-container13">
              <span className="meet-our-team-text13 team-name">
                {props.text12}
              </span>
              <span className="meet-our-team-text14 team-role">
                {props.text13}
              </span>
            </div>
          </div>
          <div className="meet-our-team-container14">
            <img
              alt={props.image_alt7}
              src={props.image_src7}
              className="meet-our-team-image7 team-pic"
            />
            <div className="meet-our-team-container15">
              <span className="meet-our-team-text15 team-name">
                {props.text14}
              </span>
              <span className="meet-our-team-text16 team-role">
                {props.text15}
              </span>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .meet-our-team-meet-our-team {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            overflow: auto;
            position: relative;
            align-items: flex-start;
            padding-top: var(--dl-space-space-oneandhalfunits);
            padding-left: 140px;
            padding-right: 140px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            background-color: #0000ff;
          }
          .meet-our-team-text {
            color: #ffffff;
          }
          .meet-our-team-team-1row-container {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .meet-our-team-container {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .meet-our-team-container01 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .meet-our-team-text02 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          .meet-our-team-container02 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .meet-our-team-image1 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .meet-our-team-container03 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .meet-our-team-text03 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .meet-our-team-text04 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          .meet-our-team-container04 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .meet-our-team-image2 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .meet-our-team-container05 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .meet-our-team-text05 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .meet-our-team-text06 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          .meet-our-team-container06 {
            flex: 0 0 auto;
            width: auto;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .meet-our-team-image3 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .meet-our-team-container07 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .meet-our-team-text07 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .meet-our-team-text08 {
            color: rgb(255, 255, 255);
            width: auto;
            font-size: 16px;
          }
          .meet-our-team-team-1row-container1 {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: flex-start;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .meet-our-team-container08 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .meet-our-team-container09 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .meet-our-team-text10 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          .meet-our-team-container10 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .meet-our-team-image5 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .meet-our-team-container11 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .meet-our-team-text11 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .meet-our-team-text12 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          .meet-our-team-container12 {
            flex: 0 0 auto;
            width: 25%;
            height: 60px;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .meet-our-team-image6 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .meet-our-team-container13 {
            flex: 0 0 auto;
            width: 200px;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .meet-our-team-text13 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .meet-our-team-text14 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          .meet-our-team-container14 {
            flex: 0 0 auto;
            width: auto;
            height: 60px;
            display: flex;
            align-items: stretch;
            flex-direction: row;
          }
          .meet-our-team-image7 {
            width: auto;
            height: 60px;
            object-fit: cover;
          }
          .meet-our-team-container15 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: stretch;
            margin-top: var(--dl-space-space-unit);
            align-items: stretch;
            margin-left: var(--dl-space-space-unit);
            margin-bottom: var(--dl-space-space-unit);
            flex-direction: column;
            justify-content: center;
          }
          .meet-our-team-text15 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .meet-our-team-text16 {
            color: rgb(255, 255, 255);
            font-size: 16px;
          }
          @media (max-width: 1200px) {
            .meet-our-team-team-1row-container {
              justify-content: space-between;
            }
            .meet-our-team-container06 {
              width: auto;
            }
            .meet-our-team-container07 {
              width: auto;
            }
            .meet-our-team-text07 {
              width: auto;
            }
            .meet-our-team-text08 {
              width: auto;
            }
            .meet-our-team-team-1row-container1 {
              justify-content: space-between;
            }
            .meet-our-team-container14 {
              width: auto;
            }
            .meet-our-team-container15 {
              width: auto;
              align-items: stretch;
            }
          }
          @media (max-width: 991px) {
            .meet-our-team-meet-our-team {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: 0px;
            }
            .meet-our-team-text01 {
              width: 100%;
              height: 100%;
            }
          }
          @media (max-width: 767px) {
            .meet-our-team-meet-our-team {
              align-items: flex-start;
              padding-left: var(--dl-space-space-twounits);
            }
            .meet-our-team-team-1row-container {
              gap: 100px;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .meet-our-team-container {
              width: 25%;
            }
            .meet-our-team-container01 {
              width: auto;
            }
            .meet-our-team-team-1row-container1 {
              gap: 100px;
              align-items: flex-start;
              justify-content: flex-start;
            }
            .meet-our-team-container08 {
              width: 25%;
            }
            .meet-our-team-container09 {
              width: auto;
            }
            .meet-our-team-text10 {
              color: rgb(255, 255, 255);
            }
            .meet-our-team-text11 {
              color: rgb(255, 255, 255);
            }
            .meet-our-team-text12 {
              color: rgb(255, 255, 255);
              font-size: 16px;
            }
            .meet-our-team-text13 {
              color: rgb(255, 255, 255);
            }
            .meet-our-team-text14 {
              color: rgb(255, 255, 255);
              font-size: 16px;
            }
          }
          @media (max-width: 479px) {
            .meet-our-team-team-1row-container {
              gap: 150px;
            }
            .meet-our-team-team-1row-container1 {
              gap: 150px;
              padding-bottom: 0px;
            }
          }
        `}
      </style>
    </>
  );
};

MeetOurTeam.defaultProps = {
  heading: "Meet our team",

  text: "@0x11nze",
  text1: "CEO - Artistic Director",
  image_src: "/assets/team/Onze.png",

  text2: "@0xTinmar",
  text3: "Front End Dev",
  image_src1: "/assets/team/tinmar.png",

  text4: "@Johra",
  text5: "Solidity Dev",
  image_src2: "/assets/account-200h.png",

  text6: "@1tbk1",
  text7: "Chief Editor",
  image_src3: "/assets/team/1tbk1.png",

  text8: "@SpadeFX",
  text9: "BeRies Builder",
  image_src4: "/assets/team/SpadeFx.png",

  text10: "@IdrissMarcus",
  text11: "Muse",
  image_src5: "/assets/team/IdrissMarcus.png",

  text12: "@Kahili_S",
  text13: "Muse",
  image_src6: "/assets/team/Kahili.png",

  text14: "@1tbk1",
  text15: "Chief Editor",
  image_src7: "/assets/account-200h.png",
};

MeetOurTeam.propTypes = {
  image_src5: PropTypes.string,
  image_alt6: PropTypes.string,
  image_alt5: PropTypes.string,
  image_alt: PropTypes.string,
  text10: PropTypes.string,
  image_src: PropTypes.string,
  image_src3: PropTypes.string,
  text7: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src6: PropTypes.string,
  text5: PropTypes.string,
  text14: PropTypes.string,
  text8: PropTypes.string,
  text3: PropTypes.string,
  text6: PropTypes.string,
  text1: PropTypes.string,
  image_alt1: PropTypes.string,
  text12: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt7: PropTypes.string,
  text4: PropTypes.string,
  image_src7: PropTypes.string,
  text11: PropTypes.string,
  image_alt2: PropTypes.string,
  text2: PropTypes.string,
  image_src2: PropTypes.string,
  text9: PropTypes.string,
  text15: PropTypes.string,
  image_alt4: PropTypes.string,
  text13: PropTypes.string,
  image_src4: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
};

export default MeetOurTeam;
