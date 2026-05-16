import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper, { SectionHeading } from "../layouts/SectionWrapper";
import { HiMail, HiArrowRight, HiCheckCircle, HiXCircle } from "react-icons/hi";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = "service_775s615";
const EMAILJS_TEMPLATE_ID = "template_uor10ed";
const EMAILJS_PUBLIC_KEY = "BN_KsWQKJg9Z5hbeJ";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");
  const [fields, setFields] = useState({ from_name: "", reply_to: "", message: "" });

  const handleChange = (e) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, EMAILJS_PUBLIC_KEY);
      setStatus("success");
      setFields({ from_name: "", reply_to: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side */}
        <div>
          <SectionHeading label="Get in touch" title="Let's Work Together" />
          <p className="text-dark/70 leading-relaxed mb-8 text-[15px]">
            Have a project in mind, a question, or just want to say hello?
            Fill in the form and I'll get back to you as soon as possible.
          </p>
          <div className="flex items-center gap-3 text-dark text-sm">
            <div className="w-10 h-10 bg-terra border-[3px] border-dark flex items-center justify-center shadow-neo-sm">
              <HiMail size={18} className="text-light" />
            </div>
            <a href="mailto:muhammadfazrielfaddilah@gmail.com" className="font-display font-bold animated-link hover:text-terra transition-colors">
              muhammadfazrielfaddilah@gmail.com
            </a>
          </div>
        </div>

        {/* Right Side — Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="neo-card p-7"
        >
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-display font-bold text-dark uppercase tracking-widest mb-2">Name</label>
              <input type="text" name="from_name" value={fields.from_name} onChange={handleChange} required placeholder="Your full name" className="neo-input" />
            </div>
            <div>
              <label className="block text-xs font-display font-bold text-dark uppercase tracking-widest mb-2">Email</label>
              <input type="email" name="reply_to" value={fields.reply_to} onChange={handleChange} required placeholder="you@example.com" className="neo-input" />
            </div>
            <div>
              <label className="block text-xs font-display font-bold text-dark uppercase tracking-widest mb-2">Message</label>
              <textarea name="message" value={fields.message} onChange={handleChange} required rows={5} placeholder="Tell me about your project..." className="neo-input resize-none" />
            </div>

            <button type="submit" disabled={status === "sending"} className="neo-btn neo-btn-primary w-full justify-center">
              {status === "sending" ? "Sending..." : (<>Send Message <HiArrowRight /></>)}
            </button>

            {status === "success" && (
              <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm font-display font-bold text-terra">
                <HiCheckCircle size={16} /> Message sent! I'll get back to you soon.
              </motion.p>
            )}
            {status === "error" && (
              <motion.p initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 text-sm font-display font-bold text-dark">
                <HiXCircle size={16} /> Something went wrong. Please try again.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}