import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { DemoBanner } from "./DemoBanner.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <>
    {/* Above the app, not fixed: the athlete and recruiter screens have their
        own fixed tab bar at the bottom on phones, which a fixed banner hid. */}
    <DemoBanner />
    <App />
  </>,
);
