import type { Device } from "./types";

const laptops: Device[] = [
  {
    id: 1,
    name: "HP OMEN 15-ce002nx",
    released_date: "2017",
    purchased_date: "22/08/2018",
    acquired_year: 2018,
    specs: {
      display: "15.6\" FHD IPS",
      processor: "Intel Core i7-7700HQ",
      gpu: "Nvidia GTX 1050 4GB",
      ram: "12GB",
      storage: ["512GB NVMe M.2 SSD", "1TB HDD"],
    },
    link: "https://support.hp.com/in-en/product/omen-by-hp-15-ce000-laptop-pc-series/15551437/model/20486649?sku=3LH85EA",
    img: "/images/devices/laptops/hp-omen-15.webp",
  },
  {
    id: 2,
    name: "Lenovo Yoga Slim 7i Pro",
    released_date: "2020",
    purchased_date: "10/08/2022",
    acquired_year: 2022,
    specs: {
      display: "14\"",
      processor: "Intel Core i5-1135G7",
      gpu: "Intel Iris Xe",
      ram: "16GB",
      storage: ["512GB NVMe M.2 SSD"],
    },
    link: "https://www.lenovo.com/in/en/laptops/yoga/yoga-s-series/Yoga-Slim-7-Pro-14ITL5/p/WMD00000492",
    img: "/images/devices/laptops/lenovo-yoga-slim-7i-pro.webp",
  },
  {
    id: 3,
    name: "MSI Sword 16 HX B14V",
    purchased_date: "27 September 2025",
    released_date: "January 2024",
    acquired_year: 2025,
    specs: {
      display: "16\" FHD+ 144Hz",
      processor: "Intel Core i7-14700HX",
      gpu: "Nvidia RTX 4050 6GB",
      ram: "32GB",
      storage: [
        "1TB Samsung 990 EVO Plus (Gen4)",
        "1TB Micron NVMe SSD (Gen3)",
      ],
    },
    link: "https://www.msi.com/Laptop/Sword-16-HX-B14VX/Specification",
    img: "/images/devices/laptops/msi-sword-16-hx-b14v.webp",
  },
];

export default laptops;
