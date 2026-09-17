import type { Device } from "./types";

const consoles: Device[] = [
  {
    id: 1,
    name: "PlayStation 2 Slim",
    released_date: "November 2007",
    acquired_year: 2010,
    specs: {
      processor: "Emotion Engine (MIPS R5900)",
      gpu: "Graphics Synthesizer",
      ram: "32MB",
    },
    link: "https://en.wikipedia.org/wiki/PlayStation_2",
    img: "/images/devices/consoles/playstation-2-slim.webp",
  },
  {
    id: 2,
    name: "Xbox 360 S + Kinect",
    released_date: "June 2010",
    acquired_year: 2014,
    specs: {
      processor: "IBM Xenon tri-core 3.2GHz",
      gpu: "ATI Xenon",
      ram: "512MB",
      storage: ["250GB"],
    },
    link: "https://en.wikipedia.org/wiki/Xbox_360",
    img: "/images/devices/consoles/xbox-360-s.webp",
  },
];

export default consoles;
