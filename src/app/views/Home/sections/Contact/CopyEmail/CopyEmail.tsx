import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@sito/ui";
import {
  faArrowRight,
  faCheck,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

import { COPIED_MS } from "./constants";
import type { CopyEmailProps } from "./types";

/** Email link with an arrow, plus a small button that copies the address. */
export function CopyEmail({ email, copyLabel, copiedLabel }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timer = window.setTimeout(() => setCopied(false), COPIED_MS);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="copy-email" data-copied={copied}>
      <a className="copy-email-address" href={`mailto:${email}`}>
        {email}
        <FontAwesomeIcon icon={faArrowRight} className="copy-email-arrow" />
      </a>
      <Tooltip label={copied ? copiedLabel : copyLabel}>
        <button
          type="button"
          className="copy-email-button"
          aria-label={copyLabel}
          onClick={copy}
        >
          <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
        </button>
      </Tooltip>
      <span className="copy-email-status" role="status">
        {copied ? copiedLabel : ""}
      </span>
    </div>
  );
}
