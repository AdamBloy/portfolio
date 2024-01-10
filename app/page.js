import Image from "next/image";
import styles from "./page.module.css";
import AdamHeroImg from "../photos/adam2.jpg";
import { ArrowDownward } from "@mui/icons-material";
import WorkExp from "./components/workExp";
import { Fragment } from "react";
import AppExp from "./components/appExp";
import svgBrush from "../svg/paintstrokecolor.svg";
import svgDownArrow from "../svg/paintedarrowcolor.svg";
import PersonalLife from "./components/personalLife";
import ContactForm from "./components/contactForm";

export default function Home() {
  return (
    <Fragment>
      <main className={styles.main}>
        <div className={styles.heroheadcontainer}>
          <div className={styles.lefthero}>
            <div className={styles.socialsmalltext}>Working with Clients</div>
            <div className={styles.socialsmalltext}>Problem Solving</div>
            <div className={styles.socialsmalltext}>Development</div>
            <div className={styles.socialsmalltext}>Creativity</div>
            <div className={styles.socialsmalltext}>Design</div>
            <div className={styles.sociallargetext}></div>
          </div>
          <a
            className={styles.linkReset}
            href="https://www.linkedin.com/in/adam-b-762a8b238/"
            target="_blank"
          >
            <div className={styles.linkedinhero}>
              <div className={styles.socialsmalltext}>Visit my</div>
              <div className={styles.sociallargetext}>LinkedIn</div>
            </div>
          </a>
        </div>

        <div className={styles.heroheader}>
          <div className={styles.heroname}>
            <Image
              className={styles.svgPaintBrush1}
              alt="paintbrush mark"
              src={svgBrush}
            ></Image>
            <div className={styles.firstName}>Adam</div>
            <Image
              className={styles.svgPaintBrush2}
              alt="paintbrush mark"
              src={svgBrush}
            ></Image>
            <div className={styles.lastName}>Bloy</div>
          </div>
          <div className={styles.heroimg}>
            <Image
              className={styles.heroImgAdam}
              alt="Image of Adam Bloy"
              placeholder="blur"
              src={AdamHeroImg}
            ></Image>
          </div>
        </div>
        {/* <div className={styles.heroheadcontainerbtm}>
          <div className={styles.leftherobtm}>
            <div className={styles.sociallargetextbtm}>More</div>
            <span class="material-icons-outlined">
              <ArrowDownward sx={{ fontSize: 80 }} />
            </span>
          </div>
        </div> */}
        <div className={styles.heroheadcontainerBtm}>
          {/* <div className={styles.leftherobtm}>
            <div className={styles.sociallargetextbtm}>Scroll</div>
            <span className="material-icons-outlined">
              <ArrowDownward sx={{ fontSize: 80 }} />
            </span>
          </div> */}
          <Image
            className={styles.svgDownArrow}
            alt="paintbrush mark"
            src={svgDownArrow}
          ></Image>
          <a className={styles.linkReset} href="mailto:adzm00@googlemail.com">
            <div className={styles.linkedinhero}>
              <div className={styles.socialsmalltext}>Contact </div>
              <div className={styles.sociallargetext}>Email me</div>
            </div>
          </a>
          <div className={styles.linkedinhero1}>
            <div className={styles.socialsmalltext1}>Check below for</div>
            <div className={styles.sociallargetext1}>More Info</div>
          </div>
        </div>
        <WorkExp />
        <AppExp />
        <PersonalLife />
        <ContactForm />
      </main>
    </Fragment>
  );
}
