"use client";
import Image from "next/image";
import styles from "./sectionStyle.module.css";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useState } from "react";
import svgDownArrow from "../../svg/directdown.svg";
import Photo1 from "../../photos/personal/1.jpg";
import Photo2 from "../../photos/personal/2.jpg";
import Photo3 from "../../photos/personal/3.jpg";
import Photo4 from "../../photos/personal/4.jpg";
import Photo5 from "../../photos/personal/5.jpg";
import Photo6 from "../../photos/personal/6.jpg";
import Photo7 from "../../photos/personal/7.jpg";
import Photo8 from "../../photos/personal/8.jpg";
import Photo9 from "../../photos/personal/9.jpg";

export default function WorkExp() {
  const [selected, setSelected] = useState("Cur");

  const selectedStyles = `${styles.proExpBtn} ${styles.proExpBtnSelected}`;
  const unselectedStyles = `${styles.proExpBtn}`;

  const visStyles = `${styles.proExpVis}`;
  const hidStyles = `${styles.proExpHid}`;

  const allPhotos = [
    Photo1,
    Photo2,
    Photo3,
    Photo4,
    Photo5,
    Photo6,
    Photo7,
    Photo8,
    Photo9,
  ];

  return (
    <main className={`${styles.main} ${styles.perLife}`}>
      <div className={styles.perLifeContainer}>
        <div className={styles.twoColumnGrid}>
          <div className={styles.colorTextHead}></div>
          <div className={styles.colorTextHead}>
            <div className={styles.perLifeArrowContainer}>
              <Image
                src={svgDownArrow}
                className={styles.perLifeArrow}
                alt="arrow pointing to next section"
              ></Image>
            </div>
          </div>
        </div>
        <div className={styles.twoColumnGrid}>
          <div className={styles.colorTextHead}>About me</div>
        </div>
        <div className={styles.twoColumnGrid}>
          <div className={styles.headerText}>Personal Life</div>
        </div>
        <div className={styles.twoColumnGrid}>
          <div className={styles.proExpLeft}>
            <div
              onClick={() => setSelected("Cur")}
              data-role="Cur"
              className={selected === "Cur" ? selectedStyles : unselectedStyles}
            >
              Personality
            </div>
            <div
              onClick={() => setSelected("Prev")}
              data-role="Prev"
              className={
                selected === "Prev" ? selectedStyles : unselectedStyles
              }
            >
              Interests
            </div>
            <div
              onClick={() => setSelected("Know")}
              data-role="Know"
              className={
                selected === "Know" ? selectedStyles : unselectedStyles
              }
            >
              Gallery
            </div>
          </div>
          <div className={styles.proExpRight}>
            <div className={selected === "Cur" ? visStyles : hidStyles}>
              <div className={styles.proExpHeader}>About me</div>
              <div className={styles.proExpBody}>
                In general I am quite an outgoing person but, I do of course
                like my own time occasionally. Growing up I enjoyed socialising
                so being open and friendly with people is my general manner.
              </div>
              <div className={styles.proExpBody}>
                I am also hardworking and focussed. If I have a goal I can spend
                great amounts of time and effort in order to achieve that goal.
                While I set deadlines for myself, I try to be flexible as you
                never know what things will happen in life.
              </div>
              <div className={styles.proExpBody}>
                My working in a professional corporate environment for so long
                has given me the ability to deal with people in an approachable
                and reasonable way even when having to communicate something the
                other person might not want to hear.
              </div>
              <div className={styles.proExpBody}>
                I prefer always to look at things in a calm and logical manner
                and not dive into something without thinking about it or in an
                emotional state. I feel that I am pleasant to get along with and
                work alongside and that my expectations of others are to do
                their best in a professional manner at work, and to be
                trustworthy and reliable in all life.
              </div>
            </div>
            <div className={selected === "Prev" ? visStyles : hidStyles}>
              <div className={styles.proExpHeader}>My personal interests </div>
              <div className={styles.proExpBodyHead}>Cycling</div>
              <div className={styles.proExpBody}>
                I have a keen interest in cycling both on the road and mountain
                biking. I have a couple of bikes, one for the mountains and one
                for the road. While the road cycling helps me keep fit, I enjoy
                the extreme aspect of mountain biking
              </div>
              <div className={styles.proExpBodyHead}>Snowboarding</div>
              <div className={styles.proExpBody}>
                For at least 15 years I have been into snowboarding. I go away
                ever year with friends to spend a few days in the mountains in
                the winter time.
              </div>
              <div className={styles.proExpBodyHead}>Music</div>
              <div className={styles.proExpBody}>
                Since I was young I had a passion for music, at the age of 18 I
                bought some turntables and learned how to DJ. I have played in
                clubs across the world and was a regular DJ in the London clubs.
                I still enjoy music and often make my own music at home in my
                little studio.
              </div>
              <div className={styles.proExpBodyHead}>Food</div>
              <div className={styles.proExpBody}>
                A big lover of all kinds of food. There is very little that I
                wont try and I do enjoy cooking. My wife likes to photograph
                this as she is a photographer, so we have some nice albums of
                the food we have made together.
              </div>
              <div className={styles.proExpBodyHead}>Gaming and technology</div>
              <div className={styles.proExpBody}>
                Ever since being a little kid I have loved technology and
                gaming, from my first Commadore 64 I was hooked on it.
                Technology and science have always been interesting which is why
                my studies have always been computer and technology related.
              </div>
            </div>
            <div className={selected === "Know" ? visStyles : hidStyles}>
              <div className={styles.proExpHeader}>Some photos</div>

              <div className={styles.bodyGrid3x3}>
                <Image
                  className={styles.photoItem}
                  src={Photo1}
                  alt="Photo of adam"
                ></Image>
                <Image
                  className={styles.photoItem}
                  src={Photo2}
                  alt="Photo of adam"
                ></Image>
                <Image
                  className={styles.photoItem}
                  src={Photo3}
                  alt="Photo of adam"
                ></Image>
                <Image
                  className={styles.photoItem}
                  src={Photo4}
                  alt="Photo of adam"
                ></Image>
                <Image
                  className={styles.photoItem}
                  src={Photo5}
                  alt="Photo of adam"
                ></Image>
                <Image
                  className={styles.photoItem}
                  src={Photo6}
                  alt="Photo of adam"
                ></Image>
                <Image
                  className={styles.photoItem}
                  src={Photo7}
                  alt="Photo of adam"
                ></Image>
                <Image
                  className={styles.photoItem}
                  src={Photo8}
                  alt="Photo of adam"
                ></Image>
                <Image
                  className={styles.photoItem}
                  src={Photo9}
                  alt="Photo of adam"
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
