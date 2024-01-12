import Image from "next/image";
import styles from "./sectionStyle.module.css";
import svgDownArrow from "../../svg/paintedarrowcolor.svg";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";

export default function ContactForm() {
  return (
    <main className={styles.main}>
      {/* <div className={styles.contactArrow}>
        <div className={styles.arrowDivider}>
          <Image
            className={styles.svgDownArrowFlipped}
            alt="paintbrush mark"
            src={svgDownArrow}
          ></Image>
        </div>
      </div> */}
      <div className={styles.contactContainer}>
        <div className={styles.twoColumnGrid}>
          <div className={styles.colorTextHead}></div>
          <div className={styles.colorTextHead}>
            <div className={styles.contArrowContainer}>
              <Image
                src={svgDownArrow}
                className={styles.contArrow}
                alt="arrow pointing to next section"
              ></Image>
            </div>
          </div>
        </div>
        <div className={styles.twoColumnGrid}>
          <div className={styles.colorTextHead}>Get in touch</div>
        </div>
        <div className={styles.twoColumnGrid}>
          <div className={styles.headerText}>Contact Form</div>
        </div>
        <div className={styles.formContainer}>
          <form
            className={styles.formContainer}
            action="https://formsubmit.co/adzm00@googlemail.com"
            method="POST"
          >
            <label className={styles.formLabel}>Name</label>
            <input className={styles.formInput} name="name"></input>
            <label className={styles.formLabel}>Email</label>
            <input className={styles.formInput} name="email"></input>
            <label className={styles.formLabel}>Company</label>
            <input className={styles.formInput} name="company"></input>
            <label className={styles.formLabel}>Message</label>
            <textarea className={styles.formMessage} name="message"></textarea>

            <button type="submit" className={styles.formSendBtn}>
              Send message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
