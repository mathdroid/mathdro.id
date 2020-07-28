import React from "react";

const ContactForm = () => (
  <form
    name="contact"
    method="POST"
    netlify-honeypot="contact_me_by_fax_only"
    data-netlify="true"
  >
    <input
      className="hidden"
      type="checkbox"
      name="contact_me_by_fax_only"
      value="1"
      tabIndex="-1"
      autoComplete="off"
    />
    <label>
      Email: <input type="text" name="email" />
    </label>
    <br />
    <label>
      Nama: <input type="text" name="name" />
    </label>
    <br />
    <label>
      Tahun Kelahiran: <input type="text" name="birthyear" />
    </label>
    <br />
    <label>
      Organisasi: <input type="text" name="organization" />
    </label>
    <input type="hidden" name="form-name" value="contact" />

    <br />
    <button type="submit">{cta}</button>
  </form>
);

export default ContactForm;
