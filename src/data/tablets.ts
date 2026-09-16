import type { Device } from "./types";

const tablets: Device[] = [
  {
    id: 1,
    name: "Samsung Galaxy Tab 2 7.0",
    released_date: "April 2012",
    purchased_date: "01/07/2013",
    acquired_year: 2013,
    specs: {
      display: "7.0\" PLS LCD",
      processor: "TI OMAP 4430",
      ram: "1GB",
      storage: ["8GB"],
    },
    link: "https://www.gsmarena.com/samsung_galaxy_tab_2_7_0_p3100-4543.php",
    img: "/images/devices/tablets/samsung-galaxy-tab-2.webp",
  },
];

export default tablets;
