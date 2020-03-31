import { useState } from "react";

const getRegistrations = async () =>
  (typeof navigator !== "undefined" &&
    navigator?.serviceWorker?.getRegistrations()) ||
  [];

export const useServiceWorkerRegistrations = () => {
  const [registrations, setRegistrations] = useState<
    readonly ServiceWorkerRegistration[]
  >([]);
  getRegistrations().then((registrations) => setRegistrations(registrations));
  return registrations;
};
