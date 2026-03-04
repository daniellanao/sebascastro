"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-black/10 bg-white px-6 py-12 md:px-12 md:py-16 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-montserrat font-bold text-xl text-black md:text-2xl">
          CONTACT
        </h2>

        <div className="mt-10 flex flex-col items-start space-y-8 sm:space-y-12">
          {/* Phone */}
          <ScrollReveal delay={100}>
            <div className="transition-all duration-500 hover:translate-x-2">
              <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                Phone
              </h3>
              <a
                href="tel:+16479891801"
                className="group inline-flex items-center gap-3 text-neutral-600 transition-all duration-300 hover:gap-4 hover:text-black"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="shrink-0 text-neutral-500 transition-all duration-300 group-hover:scale-110 group-hover:text-black"
                />
                <span className="text-sm sm:text-base">+1 (647) 989 1801</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Email */}
          <ScrollReveal delay={200}>
            <div className="transition-all duration-500 hover:translate-x-2">
              <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                Email
              </h3>
              <a
                href="mailto:sebastianfcs@gmail.com"
                className="group inline-flex items-center gap-3 text-neutral-600 transition-all duration-300 hover:gap-4 hover:text-black"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="shrink-0 text-neutral-500 transition-all duration-300 group-hover:scale-110 group-hover:text-black"
                />
                <span className="border-b border-neutral-400 text-sm transition-colors group-hover:border-black sm:text-base">
                  sebastianfcs@gmail.com
                </span>
              </a>
            </div>
          </ScrollReveal>

          {/* Social Links */}
          <ScrollReveal delay={300}>
            <div>
              <h3 className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                Socials
              </h3>
              <div className="flex flex-row items-start gap-4 sm:gap-6">
                <a
                  href="https://wa.me/16479891801"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-full text-neutral-500 transition-all duration-300 hover:scale-110 hover:bg-neutral-100 hover:text-black"
                  aria-label="WhatsApp"
                >
                  <FontAwesomeIcon icon={faWhatsapp} className="text-2xl sm:text-3xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/sebastian-castro-s%C3%A1nchez-12042564/?locale=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-full text-neutral-500 transition-all duration-300 hover:scale-110 hover:bg-neutral-100 hover:text-black"
                  aria-label="LinkedIn"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="text-2xl sm:text-3xl" />
                </a>
                <a
                  href="https://www.instagram.com/sebas.castro.s/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 w-12 items-center justify-center rounded-full text-neutral-500 transition-all duration-300 hover:scale-110 hover:bg-neutral-100 hover:text-black"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={faInstagram} className="text-2xl sm:text-3xl" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
