import React from "react";
const loremIpsum = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus ullamcorper tortor, sed ultricies justo. Quisque ut malesuada ipsum. Phasellus consectetur lectus sit amet erat dignissim, ut vehicula libero aliquam. Sed ac lectus auctor, commodo felis nec, tempus justo.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus ullamcorper tortor, sed ultricies justo. Quisque ut malesuada ipsum. Phasellus consectetur lectus sit amet erat dignissim, ut vehicula libero aliquam. Sed ac lectus auctor, commodo felis nec, tempus justo.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus ullamcorper tortor, sed ultricies justo. Quisque ut malesuada ipsum. Phasellus consectetur lectus sit amet erat dignissim, ut vehicula libero aliquam. Sed ac lectus auctor, commodo felis nec, tempus justo.",
];

import styles from "./userStyles.module.css";

import playIcon from "../../assets/playIcon.png";

function UserWallboard() {
  const [msgSlidePos, setMsgSlidePos] = React.useState(0);
  const [doAnimation, setDoAnimation] = React.useState(false);

  const msgSlides = [...loremIpsum];
  function handleSlideClick(value) {
    if (value > 0) setDoAnimation("right");
    if (value < 0) setDoAnimation("left");

    setTimeout(() => {
      setDoAnimation(false);

      setMsgSlidePos((prev) => {
        if (prev + value > msgSlides.length - 1) return 0;
        if (prev + value < 0) return msgSlides.length - 1;
        return prev + value;
      });
      
    }, 500);
  }

  return (
    <div className={styles.userScreenContainer}>
      <div className={styles.wallBoardContainer}>
        <p>Recados para os Responsáveis</p>
        <div className={`${styles.slideContainer}`}>
          <div
            className={`${styles.wallBoard} ${
              doAnimation
                ? doAnimation === "right"
                  ? `slideRight slideInFromRight`
                  : styles.slideLeft
                : ""
            }`}
          >
            {msgSlides[msgSlidePos]}
          </div>
          <div
            className={`${styles.slideBtn} ${styles.slideBtnBack}`}
            onClick={() => handleSlideClick(-1)}
          >
            <img src={playIcon} alt="Play Icon" />
          </div>
          <div
            className={`${styles.slideBtn} ${styles.slideBtnNext}`}
            onClick={() => handleSlideClick(1)}
          >
            <img src={playIcon} alt="Play Icon" />
          </div>
          <div className={styles.indexGroup}>
            {msgSlides.map((item, index) => {
              return (
                <div
                  key={index}
                  id={index}
                  className={`${styles.itemGroupBtn} ${
                    index === msgSlidePos && "active"
                  }`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserWallboard;
