import React from 'react'

import PropTypes from 'prop-types'

const Community = (props) => {
  return (
    <>
      <div id="community-section" className="community-container">
        <div className="community-container1">
          <div id="row1" className="community-row1">
            <img
              alt={props.image_alt}
              src={props.image_src}
              className="community_pic"
            />
            <img
              alt={props.image_alt5}
              src={props.image_src5}
              className="community-image01 community_pic"
            />
            <img
              alt={props.image_alt4}
              src={props.image_src4}
              className="community-image02 community_pic"
            />
            <img
              alt={props.image_alt3}
              src={props.image_src3}
              className="community-image03 community_pic"
            />
            <img
              alt={props.image_alt2}
              src={props.image_src2}
              className="community-image04 community_pic"
            />
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="community-image05 community_pic"
            />
          </div>
          <div id="row2" className="community-row2">
            <img
              alt={props.image_alt7}
              src={props.image_src7}
              className="community_pic"
            />
            <img
              alt={props.image_alt52}
              src={props.image_src52}
              className="community-image07 community_pic"
            />
            <img
              alt={props.image_alt42}
              src={props.image_src42}
              className="community-image08 community_pic"
            />
            <img
              alt={props.image_alt32}
              src={props.image_src32}
              className="community-image09 community_pic"
            />
            <img
              alt={props.image_alt22}
              src={props.image_src22}
              className="community-image10 community_pic"
            />
            <img
              alt={props.image_alt12}
              src={props.image_src12}
              className="community-image11 community_pic"
            />
          </div>
          <div id="row3" className="community-row3">
            <img
              alt={props.image_alt6}
              src={props.image_src6}
              className="community_pic"
            />
            <img
              alt={props.image_alt51}
              src={props.image_src51}
              className="community-image13 community_pic"
            />
            <img
              alt={props.image_alt41}
              src={props.image_src41}
              className="community-image14 community_pic"
            />
            <img
              alt={props.image_alt31}
              src={props.image_src31}
              className="community-image15 community_pic"
            />
            <img
              alt={props.image_alt21}
              src={props.image_src21}
              className="community-image16 community_pic"
            />
            <img
              alt={props.image_alt11}
              src={props.image_src11}
              className="community-image17 community_pic"
            />
          </div>
        </div>
        <div className="community-container2">
          <span className="community-text">{props.text}</span>
          <div className="community-container3">
            <img
              src={props.image_src8}
              alt={props.image_alt8}
              className="community-image18"
            />
            <span className="community-text1">{props.text1}</span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .community-container {
            width: 100%;
            height: 800px;
            display: flex;
            overflow: hidden;
            position: relative;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .community-container1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            transform: rotateZ(20deg);
            align-items: center;
            padding-left: 0nit;
            padding-right: 0px;
            flex-direction: column;
            justify-content: center;
          }
          .community-row1 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: center;
          }
          .community-image01 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .community-image02 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .community-image03 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .community-image04 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .community-image05 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .community-row2 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: center;
          }
          .community-image07 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .community-image08 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .community-image09 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .community-image10 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .community-image11 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .community-row3 {
            gap: var(--dl-space-space-oneandhalfunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            justify-content: center;
          }
          .community-image13 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .community-image14 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .community-image15 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .community-image16 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .community-image17 {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .community-container2 {
            gap: 20px;
            top: 0px;
            flex: 0 0 auto;
            left: 0px;
            right: 0px;
            width: 40%;
            bottom: 0px;
            height: 300px;
            margin: auto;
            display: flex;
            position: absolute;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: 0000FF;
          }
          .community-text {
            color: #ffffff;
            font-size: 48px;
            align-self: center;
            font-style: normal;
            text-align: center;
            font-weight: 900;
          }
          .community-container3 {
            gap: var(--dl-space-space-halfunit);
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .community-image18 {
            width: 21px;
            object-fit: cover;
          }
          .community-text1 {
            color: #ffffff;
            font-size: 18px;
          }
        `}
      </style>
    </>
  )
}

Community.defaultProps = {
  image_alt31: 'image',
  image_src22: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_alt51: 'image',
  text: 'Join theBeRies ✨community',
  image_alt41: 'image',
  image_alt1: 'image',
  image_alt32: 'image',
  image_alt11: 'image',
  image_src32: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_alt4: 'image',
  image_alt21: 'image',
  image_src7: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_alt5: 'image',
  image_alt3: 'image',
  image_src1: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_alt2: 'image',
  image_alt6: 'image',
  image_src12: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_src11: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_alt22: 'image',
  image_src42: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_src6: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_src41: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_src2: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_alt12: 'image',
  image_src21: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_src3: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_src5: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_src: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_src31: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_alt: 'image',
  image_src51: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_alt42: 'image',
  image_alt52: 'image',
  image_src4: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_alt7: 'image',
  image_src52: '/assets/community/FaJR-99XEAAh66Q.jpeg',
  image_src8: '/assets/6366475ccb0f68c0ec5b514e_insta.png',
  image_alt8: 'image',
  text1: '@beries.eth',
}

Community.propTypes = {
  image_alt31: PropTypes.string,
  image_src22: PropTypes.string,
  image_alt51: PropTypes.string,
  text: PropTypes.string,
  image_alt41: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt32: PropTypes.string,
  image_alt11: PropTypes.string,
  image_src32: PropTypes.string,
  image_alt4: PropTypes.string,
  image_alt21: PropTypes.string,
  image_src7: PropTypes.string,
  image_alt5: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt6: PropTypes.string,
  image_src12: PropTypes.string,
  image_src11: PropTypes.string,
  image_alt22: PropTypes.string,
  image_src42: PropTypes.string,
  image_src6: PropTypes.string,
  image_src41: PropTypes.string,
  image_src2: PropTypes.string,
  image_alt12: PropTypes.string,
  image_src21: PropTypes.string,
  image_src3: PropTypes.string,
  image_src5: PropTypes.string,
  image_src: PropTypes.string,
  image_src31: PropTypes.string,
  image_alt: PropTypes.string,
  image_src51: PropTypes.string,
  image_alt42: PropTypes.string,
  image_alt52: PropTypes.string,
  image_src4: PropTypes.string,
  image_alt7: PropTypes.string,
  image_src52: PropTypes.string,
  image_src8: PropTypes.string,
  image_alt8: PropTypes.string,
  text1: PropTypes.string,
}

export default Community
