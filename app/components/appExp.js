"use client";
import Image from "next/image";
import styles from "./sectionStyle.module.css";
import svgDownArrow from "../../svg/paintedarrowcolor.svg";
import docExpImg from "../../photos/doc-expert-img.jpg";
import cvbuilderimg from "../../photos/cvbuilder.jpg";
import worktrackerImg from "../../photos/worktracker.jpg";
import msgtrackerImg from "../../photos/messagesystem.jpg";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import { useState } from "react";

const BtnChecked = () => {
  return (
    <RadioButtonCheckedIcon
      sx={{ fontSize: 20 }}
      style={{
        backgroundColor: "#202020",
        color: "#e01a4f",
      }}
    />
  );
};
const BtnUnchecked = () => {
  return (
    <RadioButtonUncheckedIcon
      sx={{ fontSize: 20 }}
      style={{
        backgroundColor: "#202020",
      }}
    />
  );
};

export default function AppExp() {
  const [buttonState, setButtonState] = useState("1");

  const visStyles = `${styles.card}`;
  const hidStyles = `${styles.cardHidden}`;

  console.log(buttonState);

  return (
    <main className={styles.main}>
      <div className={styles.twoColumnGrid}>
        <div className={styles.colorTextHead}></div>
        <div className={styles.colorTextHead}>
          <div className={styles.appExpArrowContainer}>
            <Image
              src={svgDownArrow}
              className={styles.appExpArrow}
              alt="arrow pointing to next section"
            ></Image>
          </div>
        </div>
      </div>
      <div className={styles.twoColumnGrid}>
        <div className={styles.colorTextHead}>Programming</div>
      </div>
      <div className={styles.twoColumnGrid}>
        <div className={styles.headerText}>Applied Experience</div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardNav}>
          <span className={styles.circle} onClick={() => setButtonState("1")}>
            {buttonState === "1" ? (
              <BtnChecked data-proexp="1" />
            ) : (
              <BtnUnchecked data-proexp="1" />
            )}
          </span>
          <span className={styles.circle} onClick={() => setButtonState("2")}>
            {buttonState === "2" ? (
              <BtnChecked data-proexp="2" />
            ) : (
              <BtnUnchecked
                onClick={() => setButtonState("2")}
                data-proexp="2"
              />
            )}
          </span>
          <span className={styles.circle} onClick={() => setButtonState("3")}>
            {buttonState === "3" ? (
              <BtnChecked data-proexp="3" />
            ) : (
              <BtnUnchecked data-proexp="3" />
            )}
          </span>
          <span className={styles.circle} onClick={() => setButtonState("4")}>
            {buttonState === "4" ? (
              <BtnChecked data-proexp="4" />
            ) : (
              <BtnUnchecked data-proexp="4" />
            )}
          </span>
        </div>
        <div className={buttonState === "1" ? visStyles : hidStyles}>
          <div className={styles.cardImgContainer}>
            <Image
              src={docExpImg}
              alt="Image of the document expert website"
              className={styles.cardImage}
            ></Image>
          </div>
          <div className={styles.cardDetails}>
            <div className={styles.cardHeader}>Doc Expert</div>
            <div className={styles.cardSubHead}>Website and Web App</div>
            <div className={styles.cardBody}>
              Doc Expert is a website that contains useful applications for use
              in a professional environment. I built the website from scratch
              with authentication, user account systems and databases using
              Javascript, React and Next JS, utilising MongoDB and next-auth.
            </div>
            <div className={styles.cardBody}>
              The website allows users to create accounts in order to use the
              tools on the site. Users can manage their accounts and access the
              tools they have access to.
            </div>
            <div className={styles.cardBtnContainer}>
              <a
                href="https://www.doc-expert.co.uk"
                target="_blank"
                className={styles.cardBtn}
              >
                Visit site
              </a>
            </div>
          </div>
        </div>
        <div className={buttonState === "2" ? visStyles : hidStyles}>
          <div className={styles.cardImgContainer}>
            <Image
              src={cvbuilderimg}
              alt="Image of the document expert website"
              className={styles.cardImage}
            ></Image>
          </div>
          <div className={styles.cardDetails}>
            <div className={styles.cardHeader}>CV Builder App</div>
            <div className={styles.cardSubHead}>Web Application</div>
            <div className={styles.cardBody}>
              CV Builder is a tool within the Doc Expert website which automates
              all formatting and saving of a CV document. A registered user
              simply fills out a form and upon completion the tool formats all
              information and allows the user to save a word document.
            </div>
            <div className={styles.cardBody}>
              The application was built with Next JS, MongoDB and utilised the
              docx.js API.
            </div>
            <div className={styles.cardBtnContainer}>
              <a
                href="https://www.doc-expert.co.uk"
                target="_blank"
                className={styles.cardBtn}
              >
                Visit site
              </a>
            </div>
          </div>
        </div>
        <div className={buttonState === "3" ? visStyles : hidStyles}>
          <div className={styles.cardImgContainer}>
            <Image
              src={worktrackerImg}
              alt="Image of the work tracker"
              className={styles.cardImage}
            ></Image>
          </div>
          <div className={styles.cardDetails}>
            <div className={styles.cardHeader}>Legal Knowledge Tracker</div>
            <div className={styles.cardSubHead}>
              Microsoft Application (Excel)
            </div>
            <div className={styles.cardBody}>
              The legal knowledge tracker is an application which provides a UI
              for an employee to register their areas of expertise and relevant
              skills.
            </div>
            <div className={styles.cardBody}>
              The data is contained in the application for review by management.
              Additionally users can add new areas of expertise for others to
              select to allow the application to stay up to date with relevant
              legal knowledge.
            </div>
          </div>
        </div>
        <div className={buttonState === "4" ? visStyles : hidStyles}>
          <div className={styles.cardImgContainer}>
            <Image
              src={msgtrackerImg}
              alt="Image of the messaging tracker"
              className={styles.cardImage}
            ></Image>
          </div>
          <div className={styles.cardDetails}>
            <div className={styles.cardHeader}>Message Tracker System</div>
            <div className={styles.cardSubHead}>
              Microsoft Application (Excel)
            </div>
            <div className={styles.cardBody}>
              This message tracker was built for project managers to exchange
              messages on a local system for other management to see and
              address.
            </div>
            <div className={styles.cardBody}>
              This included data validation to only allow messages in the
              current month, this helped stop user error of filing a message
              under the wrong date and kept the system accurate for the project
              managers.
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
