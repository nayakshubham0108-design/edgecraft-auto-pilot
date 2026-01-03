declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export function openCalendly() {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/nayakshubham0108'
    });
  }
}
