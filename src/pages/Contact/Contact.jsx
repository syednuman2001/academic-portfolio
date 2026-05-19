import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from "react-icons/fi";

import SectionTitle from "../../components/ui/SectionTitle.jsx";
import Button from "../../components/ui/Button.jsx";

import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const [isSending, setIsSending] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);
    setFormMessage("");

    emailjs
      .sendForm(
        "service_h8lewoi",
        "template_s45e83n",
        form.current,
        "NY8QDJ9WuntIo3dR_",
      )
      .then(
        () => {
          setFormMessage("Message sent successfully.");
          setIsSending(false);
          form.current.reset();

          setTimeout(() => {
            setFormMessage("");
          }, 4000);
        },
        () => {
          setFormMessage("Failed to send message. Please try again.");
          setIsSending(false);
        },
      );
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <SectionTitle
            eyebrow="Contact"
            title="Let’s Connect"
            description="Open to research collaboration, PhD opportunities, academic discussions, and AI/computer vision projects."
          />
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Contact Information</h2>

            <p>
              Feel free to reach out for research discussions, fully funded PhD
              opportunities, collaboration, or technical project inquiries.
            </p>

            <div className="contact-info-list">
              <a href="mailto:itsnumanrazagardezi@gmail.com">
                <FiMail />
                itsnumanrazagardezi@gmail.com
              </a>

              <a
                href="https://github.com/syednuman2001"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiGithub />
                github.com/syednuman2001
              </a>

              <a
                href="https://www.linkedin.com/in/syed-numan-raza-5a290a237/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLinkedin />
                LinkedIn Profile
              </a>

              <span>
                <FiMapPin />
                Lahore, Pakistan
              </span>
            </div>
          </div>

          <form ref={form} className="contact-form" onSubmit={sendEmail}>
            <div className="form-group">
              <label htmlFor="from_name">Full Name</label>
              <input
                id="from_name"
                name="from_name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="from_email">Email Address</label>
              <input
                id="from_email"
                name="from_email"
                type="email"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Research collaboration / PhD opportunity"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            {formMessage && (
              <p className="contact-form-message">{formMessage}</p>
            )}

            <Button type="submit" icon={<FiSend />} disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
