import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Minimal inline SVG favicon (spark)
const inlineFavicon = `data:image/svg+xml;utf8,${encodeURIComponent(
  `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
    <defs>
      <linearGradient id='g' x1='0' y1='0' x2='1' y2='1'>
        <stop offset='0%' stop-color='hsl(262,52%,47%)'/>
        <stop offset='100%' stop-color='hsl(142,76%,46%)'/>
      </linearGradient>
    </defs>
    <rect rx='12' ry='12' width='64' height='64' fill='hsl(224,20%,8%)'/>
    <path d='M38 10 L18 34 h12 L26 54 L46 30 H34 Z' fill='url(#g)'/>
  </svg>`
)}`;

// Dynamically set favicon using bundled asset
const ensureFavicon = () => {
  const head = document.head;
  let link: HTMLLinkElement | null = head.querySelector("link[rel='icon']");
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "icon");
    head.appendChild(link);
  }
  link.type = "image/svg+xml";
  link.href = inlineFavicon;
};

ensureFavicon();

createRoot(document.getElementById("root")!).render(<App />);
