import React from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { mintFunction } from "../functions/mintFunction.js";
import { useAccount, useBalance } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
const MintPack2 = (props) => {

  const { address, isConnected } = useAccount();
  const handleClick = () => {
    mintFunction(1, 1);
  };

  return (
    <>
      <div className="mint-pack2-container">
        <Head>
          <title>Mint-pack-2 - BeRies</title>
          <meta property="og:title" content="Mint-pack-2 - BeRies" />
          <meta property="og:image" />
        </Head>
        <Navbar rootClassName="navbar-root-class-name"></Navbar>

        <main id="mint pack 2 container" className="mint-pack2-container1">
          <div className="mint-pack2-container2">
            <img
              alt="image"
              src="/assets/nft-boite-pack-2-1500h.webp"
              className="mint-pack2-image"
            />
          </div>
          <div className="mint-pack2-container3">
            <span className="h3">Pack 2</span>
            <span className="mint-pack2-text1 paragraph">
              1 Tee - 1 Hoodie - 1 Cap
            </span>

            {isConnected ? (<button
              id="mint pack 2 button"
              type="button"
              className="mint-pack2-mint-pack-2-button mint-button button"
              onClick={handleClick}
            >
              Mint for 0.1 ETH
            </button>) : (
              <ConnectButton />
            )}
            <a href="#item-of-this-pack" className="mint-pack2-link">
              See clothes here
            </a>
          </div>
        </main>
        <section
          id="item-of-this-pack"
          className="mint-pack2-item-of-this-pack"
        >
          <h1 className="mint-pack2-text2 H1">Item of this pack</h1>
          <div className="mint-pack2-container4">
            <div className="mint-pack2-container5">
              <img
                alt="image"
                src="/assets/tee burn-600w.png"
                className="mint-pack2-image1"
              />
              <span className="mint-pack2-text3">Item title</span>
            </div>
            <div className="mint-pack2-container6">
              <img
                alt="image"
                src="/assets/tee burn-600w.png"
                className="mint-pack2-image2"
              />
              <span className="mint-pack2-text4">Item title</span>
            </div>
            <div className="mint-pack2-container7">
              <img
                alt="image"
                src="/assets/tee burn-600w.png"
                className="mint-pack2-image3"
              />
              <span className="mint-pack2-text5">Item title</span>
            </div>
          </div>
        </section>
      </div>
      <Footer rootClassName="footer-root-class-name"></Footer>

      <style jsx>
        {`
          .mint-pack2-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            min-height: 100vh;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #000000;
          }
          .mint-pack2-container1 {
            gap: var(--dl-space-space-twounits);
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: 140px;
            padding-right: 140px;
          }
          .mint-pack2-container2 {
            flex: 0 0 auto;
            width: 50%;
            height: 100%;
            display: flex;
            align-self: center;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
          }
          .mint-pack2-image {
            width: 100%;
            height: auto;
            align-self: center;
            object-fit: cover;
          }
          .mint-pack2-container3 {
            gap: 10px;
            flex: 0 0 auto;
            width: 40%;
            height: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .mint-pack2-text1 {
            color: rgb(255, 255, 255);
          }
          .mint-pack2-mint-pack-2-button {
            color: #000000;
            border-width: 0px;
          }
          .mint-pack2-link {
            color: rgb(255, 255, 255);
            align-self: center;
            text-align: center;
            padding-top: var(--dl-space-space-twounits);
            text-decoration: underline;
          }
          .mint-pack2-item-of-this-pack {
            width: 100%;
            height: auto;
            display: flex;
            align-self: stretch;
            margin-top: 40px;
            align-items: flex-start;
            padding-left: 140px;
            margin-bottom: 40px;
            padding-right: 140px;
            flex-direction: column;
            justify-content: flex-start;
          }
          .mint-pack2-text2 {
            color: rgb(255, 255, 255);
            font-size: 48px;
            margin-bottom: 40px;
          }
          .mint-pack2-container4 {
            gap: var(--dl-space-space-threeunits);
            flex: 0 0 auto;
            width: 100%;
            height: 100%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            justify-content: center;
          }
          .mint-pack2-container5 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mint-pack2-image1 {
            width: 100%;
            align-self: center;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .mint-pack2-text3 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .mint-pack2-container6 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mint-pack2-image2 {
            width: 100%;
            align-self: center;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .mint-pack2-text4 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          .mint-pack2-container7 {
            flex: 1;
            width: auto;
            height: auto;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .mint-pack2-image3 {
            width: 100%;
            align-self: center;
            object-fit: cover;
            margin-bottom: 20px;
          }
          .mint-pack2-text5 {
            color: rgb(255, 255, 255);
            font-size: 20px;
          }
          @media (max-width: 1200px) {
            .mint-pack2-container1 {
              gap: var(--dl-space-space-threeunits);
              justify-content: center;
            }
            .mint-pack2-container2 {
              width: 50%;
              height: 100%;
              justify-content: center;
            }
            .mint-pack2-image {
              width: 100%;
              height: auto;
              align-self: center;
            }
            .mint-pack2-container3 {
              width: 40%;
              align-self: center;
              align-items: flex-start;
              justify-content: center;
            }
            .mint-pack2-item-of-this-pack {
              height: auto;
            }
            .mint-pack2-container4 {
              gap: var(--dl-space-space-threeunits);
              justify-content: center;
            }
          }
          @media (max-width: 991px) {
            .mint-pack2-container1 {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
              flex-direction: column;
            }
            .mint-pack2-container2 {
              width: 100%;
              height: auto;
            }
            .mint-pack2-image {
              width: 70%;
              height: auto;
            }
            .mint-pack2-container3 {
              width: 70%;
            }
            .mint-pack2-item-of-this-pack {
              padding-left: var(--dl-space-space-threeunits);
              padding-right: var(--dl-space-space-threeunits);
            }
            .mint-pack2-container4 {
              align-items: center;
              flex-direction: column;
            }
            .mint-pack2-container5 {
              width: 100%;
              height: auto;
            }
            .mint-pack2-image1 {
              width: 70%;
              height: auto;
            }
            .mint-pack2-text3 {
              font-size: 30px;
            }
            .mint-pack2-container6 {
              width: 100%;
              height: auto;
            }
            .mint-pack2-image2 {
              width: 70%;
              height: auto;
            }
            .mint-pack2-text4 {
              font-size: 30px;
            }
            .mint-pack2-container7 {
              width: 100%;
              height: auto;
            }
            .mint-pack2-image3 {
              width: 70%;
              height: auto;
            }
            .mint-pack2-text5 {
              font-size: 30px;
            }
          }
          @media (max-width: 767px) {
            .mint-pack2-container1 {
              padding-top: var(--dl-space-space-unit);
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .mint-pack2-container2 {
              width: 100%;
              height: 50%;
            }
            .mint-pack2-image {
              height: auto;
              padding-top: var(--dl-space-space-threeunits);
            }
            .mint-pack2-container3 {
              gap: 20;
              width: 100%;
              align-self: center;
            }
            .mint-pack2-item-of-this-pack {
              gap: 0;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
              flex-direction: column;
            }
            .mint-pack2-container4 {
              gap: var(--dl-space-space-twounits);
              width: auto;
              height: auto;
              align-self: stretch;
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .mint-pack2-container5 {
              width: auto;
              height: auto;
            }
            .mint-pack2-image1 {
              width: 70%;
            }
            .mint-pack2-container6 {
              width: auto;
              height: auto;
            }
            .mint-pack2-image2 {
              width: 70%;
            }
            .mint-pack2-container7 {
              width: auto;
              height: auto;
            }
            .mint-pack2-image3 {
              width: 70%;
            }
          }
          @media (max-width: 479px) {
            .mint-pack2-container2 {
              height: auto;
            }
            .mint-pack2-image {
              width: 100%;
            }
            .mint-pack2-container3 {
              gap: 20px;
              width: 100%;
              height: auto;
            }
            .mint-pack2-item-of-this-pack {
              height: auto;
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .mint-pack2-text2 {
              font-size: 40px;
              text-align: left;
            }
            .mint-pack2-container4 {
              gap: 40;
              flex-direction: column;
            }
            .mint-pack2-image1 {
              width: 100%;
            }
            .mint-pack2-image2 {
              width: 100%;
            }
            .mint-pack2-image3 {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  );
};

export default MintPack2;
