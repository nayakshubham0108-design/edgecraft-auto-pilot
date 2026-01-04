declare global {
  interface Window {
    Cal?: {
      (action: string, ...args: unknown[]): void;
      ns?: {
        [key: string]: (action: string, ...args: unknown[]) => void;
      };
    };
  }
}

export function openCalendly() {
  if (window.Cal?.ns?.["30min"]) {
    window.Cal.ns["30min"]("modal", {
      calLink: "shubhh.co/30min",
      config: { layout: "month_view" },
    });
  }
}
