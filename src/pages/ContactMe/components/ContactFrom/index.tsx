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
      <label htmlFor='user_name'>Name</label>
      <input
        className={styles.Input}
        required
        type='text'
        id='user_name'
        name='user_name'
      />
      <label>Email</label>
      <input className={styles.Input} type='email' name='user_email' />
      <label>Message</label>
      <textarea className={styles.Input} name='message'></textarea>
      <input className={styles.Input} type='submit' value='Send' />
    </form>
  );
};

export default ContactForm;
