"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const rowBoxClass =
  "flex items-center gap-3 rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black transition hover:border-black/30 sm:text-base";

const iconBoxClass =
  "flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-neutral-100 text-neutral-700 sm:h-12 sm:w-12";

export default function InfoContactCard() {
  return (
    <section className="mx-auto w-full max-w-xl rounded-2xl border border-black/10 bg-white p-5 shadow-sm sm:p-7">
      <p className="font-montserrat text-xs uppercase tracking-[0.2em] text-neutral-500">
        Contact Card
      </p>
      <h1 className="mt-2 font-montserrat text-2xl font-extrabold text-black sm:text-3xl">
        Sebastian Castro
      </h1>
      <p className="mt-1 text-sm text-neutral-600 sm:text-base">
        Director & Producer
      </p>

      <div className="mt-6 space-y-3">
        <a href="tel:+16479891801" className={rowBoxClass}>
          <span className={iconBoxClass} aria-hidden>
            <FontAwesomeIcon icon={faPhone} className="text-lg sm:text-xl" />
          </span>
          <span className="min-w-0 flex-1 text-left">
            <span className="block text-xs uppercase tracking-[0.16em] text-neutral-500">
              Phone
            </span>
            <span className="mt-0.5 block font-medium">+1 (647) 989 1801</span>
          </span>
        </a>

        <a href="mailto:sebastianfcs@gmail.com" className={rowBoxClass}>
          <span className={iconBoxClass} aria-hidden>
            <FontAwesomeIcon icon={faEnvelope} className="text-lg sm:text-xl" />
          </span>
          <span className="min-w-0 flex-1 text-left">
            <span className="block text-xs uppercase tracking-[0.16em] text-neutral-500">
              Email
            </span>
            <span className="mt-0.5 block font-medium break-all">
              sebastianfcs@gmail.com
            </span>
          </span>
        </a>
      </div>

      <div className="mt-6">
        <p className="text-xs uppercase tracking-[0.16em] text-neutral-500">
          Social
        </p>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <a
            href="https://wa.me/16479891801"
            target="_blank"
            rel="noopener noreferrer"
            className={rowBoxClass}
          >
            <span className={iconBoxClass} aria-hidden>
              <FontAwesomeIcon
                icon={faWhatsapp}
                className="text-xl sm:text-2xl"
              />
            </span>
            <span className="font-medium">WhatsApp</span>
          </a>
          <a
            href="https://www.linkedin.com/in/sebastian-castro-s%C3%A1nchez-12042564/?locale=en_US"
            target="_blank"
            rel="noopener noreferrer"
            className={rowBoxClass}
          >
            <span className={iconBoxClass} aria-hidden>
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-xl sm:text-2xl"
              />
            </span>
            <span className="font-medium">LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/sebas.castro.s/"
            target="_blank"
            rel="noopener noreferrer"
            className={rowBoxClass}
          >
            <span className={iconBoxClass} aria-hidden>
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-xl sm:text-2xl"
              />
            </span>
            <span className="font-medium">Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
