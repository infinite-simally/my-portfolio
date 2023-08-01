import { useRef } from "react";
import emailjs from "@emailjs/browser";

import styles from "./ContactFrom.module.scss";

const ContactForm = ({ label, type }: any) => {
  const form = useRef(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5tz75pf",
        "template_4x2itri",
        form.current || "",
        "NV0bynDodZMIyRiC9"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      id='contact-form'
      className={styles.Form}
      onSubmit={sendEmail}
    >
      <label className={styles.Label}>
        Name*
        <input className={styles.Input} required type='text' name='user_name' />
      </label>
      <label className={styles.Label}>
        Email*
        <input
          className={styles.Input}
          required
          type='email'
          name='user_email'
        />
      </label>
      <label className={styles.Label}>
        Subject
        <input className={styles.Input} type='text' name='subject' />
      </label>
      <label className={styles.Label}>
        Message*
        <textarea
          className={styles.Input}
          required
          name='message'
          id='message'
        />
      </label>
      <input className={styles.Input} type='submit' value='SEND' />
    </form>
  );
};

export default ContactForm;
