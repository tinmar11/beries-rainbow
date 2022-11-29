import React from "react";
import styles from "../styles/Community.module.css";

const Community = () => {
  return (
    <>
      <section id="community" className={styles.communitySection}>
        <div className={styles.imageWrapperOuter}>
          <div class={styles.imageWrapperInner}>
            <div className={styles.ImageRowWrapper1}>
              <div className={styles.image}></div>
              <div className={styles.image2}></div>
              <div className={styles.image3}></div>
              <div className={styles.image4}></div>
              <div className={styles.image5}></div>
              <div className={styles.image6}></div>
            </div>
            <div className={styles.ImageRowWrapper2}>
              <div className={styles.image7}></div>
              <div className={styles.image8}></div>
              <div className={styles.image9}></div>
              <div className={styles.image10}></div>
              <div className={styles.image11}></div>
              <div className={styles.image12}></div>
            </div>
            <div className={styles.ImageRowWrapper3}>
              <div className={styles.image13}></div>
              <div className={styles.image14}></div>
              <div className={styles.image15}></div>
              <div className={styles.image16}></div>
              <div className={styles.image17}></div>
              <div className={styles.image18}></div>
            </div>
            <div className={styles.ImageRowWrapper4}>
              <div className={styles.image25}></div>
              <div className={styles.image26}></div>
              <div className={styles.image27}></div>
              <div className={styles.image28}></div>
              <div className={styles.image29}></div>
              <div className={styles.image30}></div>
            </div>
          </div>
        </div>
        <div className={styles.divBlock14}>
          <div className={styles.h2}>
            Join the
            <br />
            BeRies ✨<br />
            community
          </div>
          <a href="https://www.instagram.com/beries.eth/">
            <div className={styles.divBlock15}>
              <img
                src="/assets/6366475ccb0f68c0ec5b514e_insta.png"
                height="21"
              ></img>
              <div className={styles.paragrah2}>@beries.eth</div>
            </div>
          </a>
        </div>
      </section>
    </>
  );
};

export default Community;
