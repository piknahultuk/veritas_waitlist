"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import { Logo, LogoMark } from "@/components/Logo";
import {
  CheckIcon,
  DocumentIcon,
  LinkIcon,
  SendIcon,
  ShieldIcon,
  SparkleIcon,
} from "@/components/icons";

const DEMO_MESSAGE =
  "We're stretched thin since the reorg — sprint goals feel unrealistic.";
const TYPE_INTERVAL_MS = 55;
const HOLD_TICKS = 24;
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mqernlde";

const FEATURES = [
  {
    icon: LinkIcon,
    title: "One link, zero friction",
    text: "Share a single link with your team. No sign-ups, no installs — anyone can write in seconds.",
  },
  {
    icon: SparkleIcon,
    title: "AI-sorted themes",
    text: "Every message lands in the right bucket — workload, management, tools, culture — automatically.",
  },
  {
    icon: DocumentIcon,
    title: "Weekly summaries",
    text: "A short, readable report every week: what changed, what's rising, and what to do about it.",
  },
];

export default function Home() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [typedN, setTypedN] = useState(0);
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTypedN((n) => (n >= DEMO_MESSAGE.length + HOLD_TICKS ? 0 : n + 1));
    }, TYPE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  async function handleJoin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim() || submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setJoined(true);
      } else {
        setError("Something went wrong — please try again.");
      }
    } catch {
      setError("Something went wrong — please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function focusTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
    emailInputRef.current?.focus({ preventScroll: true });
  }

  const typedMsg = DEMO_MESSAGE.slice(0, Math.min(typedN, DEMO_MESSAGE.length));

  return (
    <div className={styles.page}>
      <div className={styles.bgCircleA} aria-hidden="true" />
      <div className={styles.bgCircleB} aria-hidden="true" />

      <div className={styles.container}>
        <header className={styles.header}>
          <Logo size={28} />
        </header>

        <section className={styles.hero}>
          <h1 className={`${styles.h1} ${styles.rise}`}>
            Let your team say what they&apos;re{" "}
            <span className={styles.h1Highlight}>afraid to say</span>
          </h1>
          <p className={`${styles.heroParagraph} ${styles.rise} ${styles.riseDelay1}`}>
            Anonymous team feedback with AI-sorted themes and weekly summaries.
            No accounts, no names — just the honest signal you&apos;re missing.
          </p>

          {joined ? (
            <div className={styles.joinedPill}>
              <CheckIcon size={18} />
              You&apos;re on the list — we&apos;ll be in touch.
            </div>
          ) : (
            <form
              onSubmit={handleJoin}
              className={`${styles.form} ${styles.rise} ${styles.riseDelay2}`}
            >
              <input
                ref={emailInputRef}
                type="email"
                required
                placeholder="work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
              <button type="submit" className={styles.button} disabled={submitting}>
                {submitting ? "Joining…" : "Join the waitlist"}
              </button>
            </form>
          )}

          {error && <div className={styles.formError}>{error}</div>}

          <div className={`${styles.fineprint} ${styles.rise} ${styles.riseDelay3}`}>
            Free while in beta · No credit card
          </div>
        </section>

        <section className={styles.cardSection}>
          <div className={`${styles.cardWrap} ${styles.rise} ${styles.riseDelay4}`}>
            <div className={styles.card}>
              <div className={styles.cardBadgeRow}>
                <div className={styles.cardBadge}>
                  <ShieldIcon size={13} />
                  You&apos;re anonymous
                </div>
              </div>
              <div className={styles.cardBody}>
                {typedMsg}
                <span className={styles.caret} />
              </div>
              <div className={styles.cardFooter}>
                <div className={styles.sendPill}>
                  <SendIcon size={14} />
                  Send
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          {FEATURES.map(({ icon: Icon, title, text }) => (
            <div className={styles.featureCard} key={title}>
              <div className={styles.iconChip}>
                <Icon size={22} />
              </div>
              <div className={styles.featureTitle}>{title}</div>
              <div className={styles.featureText}>{text}</div>
            </div>
          ))}
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaHeading}>
            Hear what your team{" "}
            <span className={styles.ctaHighlight}>
              really
              <svg
                className={styles.underlineSvg}
                viewBox="0 0 120 12"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  className={styles.underlinePath}
                  d="M2 8 C 30 3, 60 10, 88 5 S 114 7, 118 6"
                />
              </svg>
            </span>{" "}
            thinks.
          </div>
          <div className={styles.ctaSub}>Be first in line when we open the doors.</div>

          {joined ? (
            <div className={styles.ctaJoinedPill}>
              <CheckIcon size={17} />
              You&apos;re on the list
            </div>
          ) : (
            <button
              onClick={focusTop}
              className={`${styles.button} ${styles.buttonLarge}`}
            >
              Join the waitlist
            </button>
          )}
        </section>

        <footer className={styles.footer}>
          <div className={styles.footerLeft}>
            <LogoMark size={17} />
            <span>© 2026 Veritas</span>
          </div>
          <div className={styles.footerLinks}>
            <a href="#">Privacy</a>
            <a href="#">Contact</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
