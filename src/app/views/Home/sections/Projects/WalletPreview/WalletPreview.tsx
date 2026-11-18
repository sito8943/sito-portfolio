import type { CSSProperties } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { Icon } from "@/shared/ui/atoms";

import { useThemeCycle } from "../useThemeCycle";
import { WalletMark } from "../WalletMark";

import { ACCOUNTS, MONTHS, NAV_ACTIVE, NAV_TABS } from "./constants";

/**
 * Sito Wallet shown without its data (private): a skeleton of the phone app (balance, accounts,
 * bottom bar), a monthly chart and a quick transaction, plus its app icon. Shapes only, in the
 * Wallet's green. Shares `InternalPreview`'s palette, pieces, light/dark cycle and float.
 * Decorative.
 */
export function WalletPreview() {
  const { ref, theme, onScreen } = useThemeCycle<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className="internal-preview wallet-preview"
      data-theme={theme}
      data-on={onScreen}
      aria-hidden="true"
    >
      <div className="internal-preview-card wallet-preview-chart">
        <span className="internal-preview-toolbar wallet-preview-chart-head">
          <span
            className="internal-preview-line internal-preview-title"
            style={{ width: "36%" }}
          />
          <span className="wallet-preview-legend" />
        </span>
        <span className="wallet-preview-bars">
          {MONTHS.map((month, i) => (
            <span
              key={i}
              className="wallet-preview-month"
              style={{ "--bar-i": i } as CSSProperties}
            >
              <span
                className="wallet-preview-bar"
                data-flow="in"
                style={{ height: `${month.in}%` }}
              />
              <span
                className="wallet-preview-bar"
                data-flow="out"
                style={{ height: `${month.out}%` }}
              />
            </span>
          ))}
        </span>
      </div>

      <div className="internal-preview-card wallet-preview-phone">
        <span className="wallet-preview-notch" />
        <span className="wallet-preview-header">
          <WalletMark className="wallet-preview-logo" />
          <span className="internal-preview-line internal-preview-title" />
          <span className="wallet-preview-me" />
        </span>
        <span className="wallet-preview-search" />
        <span className="wallet-preview-balance">
          <span className="wallet-preview-balance-label" />
          <span className="wallet-preview-balance-figure" />
          <svg viewBox="0 0 100 24" preserveAspectRatio="none">
            <path
              d="M0 20 C10 18 16 12 26 14 S40 20 50 13 S66 4 76 8 S90 10 100 3"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </span>
        <span className="wallet-preview-accounts">
          {ACCOUNTS.map((account, i) => (
            <span
              key={i}
              className="wallet-preview-account"
              style={{ "--row-i": i } as CSSProperties}
            >
              <span className="wallet-preview-account-icon" />
              <span
                className="internal-preview-line"
                style={{ width: `${account.width}%` }}
              />
              <span
                className="wallet-preview-amount"
                data-income={account.income}
              />
            </span>
          ))}
        </span>
        <span className="wallet-preview-nav">
          {NAV_TABS.map((tab) => (
            <span
              key={tab}
              className="wallet-preview-tab"
              data-active={tab === NAV_ACTIVE}
            />
          ))}
          <span className="wallet-preview-add">
            <Icon icon={faPlus} />
          </span>
        </span>
      </div>

      <div className="internal-preview-card wallet-preview-quick">
        <span className="wallet-preview-quick-icon" />
        <span className="internal-preview-lines">
          <span className="internal-preview-line" style={{ width: "64%" }} />
          <span
            className="internal-preview-line internal-preview-line-soft"
            style={{ width: "40%" }}
          />
        </span>
        <span className="wallet-preview-amount" data-income="true" />
      </div>

      <span className="wallet-preview-icon">
        <WalletMark className="wallet-preview-icon-mark" />
      </span>
    </div>
  );
}
