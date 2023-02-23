import EVENTS from "../constants";

export default function navigate(href) {
  window.history.pushState({}, "", href);
  const navigationEvent = new Event(EVENTS.push);
  window.dispatchEvent(navigationEvent);
}
