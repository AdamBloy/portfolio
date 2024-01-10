"use client";
import Image from "next/image";
import styles from "./sectionStyle.module.css";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useState } from "react";

export default function WorkExp() {
  const [selected, setSelected] = useState("Cur");

  const selectedStyles = `${styles.proExpBtn} ${styles.proExpBtnSelected}`;
  const unselectedStyles = `${styles.proExpBtn}`;

  const visStyles = `${styles.proExpVis}`;
  const hidStyles = `${styles.proExpHid}`;

  return (
    <main className={styles.main}>
      <div className={styles.dividerLine}></div>
      <div className={styles.twoColumnGrid}>
        <div className={styles.colorTextHead}>Legal Sector</div>
      </div>
      <div className={styles.twoColumnGrid}>
        <div className={styles.headerText}>Professional Experience</div>
      </div>
      <div className={styles.twoColumnGrid}>
        <div className={styles.proExpLeft}>
          <div
            onClick={() => setSelected("Cur")}
            data-role="Cur"
            className={selected === "Cur" ? selectedStyles : unselectedStyles}
          >
            Current Role
          </div>
          <div
            onClick={() => setSelected("Prev")}
            data-role="Prev"
            className={selected === "Prev" ? selectedStyles : unselectedStyles}
          >
            Previous Role
          </div>
          <div
            onClick={() => setSelected("Know")}
            data-role="Know"
            className={selected === "Know" ? selectedStyles : unselectedStyles}
          >
            Knowledge
          </div>
        </div>
        <div className={styles.proExpRight}>
          <div className={selected === "Cur" ? visStyles : hidStyles}>
            <div className={styles.proExpHeader}>
              Working for a global law firm
            </div>
            <div className={styles.proExpBody}>
              Since 2012 I have worked for one of the largest global law firms,
              working across multiple sectors taking in design, problem solving,
              temeplate building, programming and teaching.
            </div>
            <div className={styles.proExpBody}>
              I have worked alongside both internal and external clients to
              deadlines providing assistance on some of the largest deals with
              some of the biggest global companies.
            </div>
            <div className={styles.proExpBody}>
              I work well both within teams and alone, present with a high
              degree of professionalism and use my experience and knowledge to
              promote better efficiency.
            </div>
            <div className={styles.proExpBody}>
              Some of my experience includes:
            </div>
            <div className={styles.proExpBullet}>
              <ul>
                <li>Creating bespoke templates</li>
                <li>Programming custom tools for firmwide use</li>
                <li>
                  Testing new third party tools for potential global rollout
                </li>
                <li>
                  Helping integrate automation tools and project management
                  systems
                </li>
                <li>Running workshops and training firmwide</li>
                <li>
                  Brainstorming problem solving sessions with internal and
                  external clients
                </li>
              </ul>
            </div>
          </div>
          <div className={selected === "Prev" ? visStyles : hidStyles}>
            <div className={styles.proExpHeader}>
              Working for a magic circle law firm (Linklaters)
            </div>
            <div className={styles.proExpBody}>
              Prior to working at my current firm I worked for 6 months at
              Linklaters LLP, and previous to that when I lived in Sheffield I
              worked for Narbarro LLP (now CMS LLP).
            </div>
            <div className={styles.proExpBody}>
              During this time I worked as a Document Specialist and first
              started learning about the design of large legal documentation and
              presentations.
            </div>
            <div className={styles.proExpBody}>
              I worked as part of a team creating well presented legal documents
              and presentations for clients, understanding templates, xml and
              fixing corruption, as well as using tools to help automate some
              processes.
            </div>
            <div className={styles.proExpBody}>
              My experience here is what pushed an interest in design and
              wanting to do something that more utilised the technical
              technology based skillset I have and combine this with design.
            </div>
          </div>
          <div className={selected === "Know" ? visStyles : hidStyles}>
            <div className={styles.proExpHeader}>Skills and Knowledge</div>
            <div className={styles.proExpBody}>
              Having studied computer and technology based subjects since
              college, I have always had a keen interest in technology. After
              formal education I ended up working within the legal sector and
              have learned a great wealth of knowledge in high level corporate
              sectors.
            </div>
            <div className={styles.proExpBody}>
              I have a great deal of experience working in teams of all sizes,
              with both internal and external clients, project management and
              lifecycles, process analysis, design and problem solving skills
              all within a high stress environment.
            </div>
            <div className={styles.proExpBody}>
              Since 2020 I have been learning software development primarily
              using Javascript and all the relevant tools which go hand in hand
              with this such as HTML, animation, backend tools such as NodeJS,
              Express, NoSQL databases, data security and authentication and
              building APIs .
            </div>
            <div className={styles.proExpBody}>
              I have experience in a number of front end and backend
              technologies, some of these are: Javascript, NodeJS, ExpressJS,
              CSS, SASS, React, Redux, NextJS, GSAP, Firebase, MongoDB,
              Mongoose, AWS, Postman, Parcel, JWT, Git, Babel, NPM, API building
              and quite a lot more!
            </div>
            {/* <div className={styles.proExpBody}>
              Some of the technologies I can use are:
            </div>
            <div className={styles.proExpBodyGrid}>
              <div className={styles.expItem}>1</div>
              <div className={styles.expItem}>2</div>
              <div className={styles.expItem}>3</div>
              <div className={styles.expItem}>4</div>
              <div className={styles.expItem}>5</div>
              <div className={styles.expItem}>6</div>
              <div className={styles.expItem}>7</div>
              <div className={styles.expItem}>8</div>
              <div className={styles.expItem}>9</div>
              <div className={styles.expItem}>10</div>
              <div className={styles.expItem}>11</div>
              <div className={styles.expItem}>12</div>
            </div> */}
          </div>
        </div>
      </div>
    </main>
  );
}
