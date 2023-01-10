var express = require("express");
var router = express.Router();

let laps = [
  {
    link: "https://www.digit.in/laptops/acer-swift-3-oled-nx-kavsi-002-12th-gen-core-i5-124500h-2022-price-331782.html",
    image:
      "https://static.digit.in/product/thumb_303227_product_td_300.jpeg?tr=w-300",
    selector: "1",
    name: "Acer Swift 3",
    processor: "12th Gen Intel Core i5-124500H",
    display: "14″(2880 x 1800)",
    os: "Windows 11",
    memory: "16 GB DDR5 RAM & 512 GB SSD",
    graphics: "Intel Iris Xe",
    body: "312 x 214 x 17 mm dimension",
    price: "₹95,999",
  },
  {
    link: "https://www.digit.in/laptops/lenovo-ideapad-gaming-3-82s900r6in-12th-gen-core-i5-12450h-2022-price-330234.html",
    image:
      "https://static.digit.in/product/thumb_301841_product_td_300.jpeg?tr=w-300",
      selector: "2",
      name: "Lenovo IdeaPad Gaming 3i",
      processor: "12th Gen Intel Core i5-12450H",
      display: "15.6″(1920 x 1080)",
      os: "Windows 11",
      memory: "16 GB DDR5 RAM & 512 GB SSD",
      graphics: "4 GB DDR6 NVIDIA GeForce RTX 3050",
      body: "	360 x 266 x 22 mm dimension",
      price: "₹78,900",
  },
  {
    link: "https://www.digit.in/laptops/msi-katana-gf66-12ue-1001in-12th-gen-core-i5-12450h-2022-price-315847.html",
    image:
      "https://static.digit.in/product/thumb_295793_product_td_300.jpeg?tr=w-300",
      selector: "3",
      name: "MSI Katana GF66",
      processor: "12th Gen Intel Core i5-12450H",
      display: "15.6″(1920 x 1080)",
      os: "Windows 11",
      memory: "16 GB DDR4 RAM & 512 GB SSD",
      graphics: "6 GB DDR6 NVIDIA GeForce RTX 3060",
      body: "359 x 259 x 25 mm dimension",
      price: "₹84,990",
  },
  {
    link: "https://www.digit.in/laptops/xiaomi-notebook-pro-120-12th-gen-core-i5-12450h-2022-price-329442.html",
    image:
      "https://static.digit.in/product/thumb_301339_product_td_300.jpeg?tr=w-300",
      selector: "4",
      name: "Xiaomi Notebook Pro 120",
      processor: "12th Gen Intel Core i5-12450H",
      display: "14″(2560 x 1600)",
      os: "Windows 11",
      memory: "16 GB DDR5 RAM & 512 GB SSD",
      graphics: "Integrated Intel UHD ",
      price: "₹71,490",
  },
  {
    link: "https://www.digit.in/laptops/dell-inspiron-16-bts-icc-c783521win8-12th-gen-core-i5-1240p-2022-price-310079.html",
    image:
      "https://static.digit.in/product/thumb_292786_product_td_300.jpeg?tr=w-300",
      selector: "5",
      name: "Dell Inspiron 16",
      processor: "12th Gen Intel Core i5-1240P",
      display: "16″(1920 x 1200)",
      os: "Windows 11",
      memory: "8 GB DDR4 RAM & 512 GB SSD",
      graphics: "Intel UHD",
      body: "356.78 x 251.9 x 15.67 mm dimension",
  },
  {
    link: "https://www.digit.in/laptops/samsung-galaxy-book2-np750xee-xb1-12th-gen-core-i5-1240p-2022-price-331791.html",
    image:
      "https://static.digit.in/product/thumb_303234_product_td_300.jpeg?tr=w-300",
      selector: "6",
      name: "Samsung Galaxy Book2",
      processor: "12th Gen Intel Core i5-1240P",
      display: "15.6″(1920 x 1080)",
      os: "Windows 11",
      memory: "8 GB DDR4 RAM & 512 GB SSD",
      graphics: "Intel ARC",
      body: "356.6 x 229.1 x 15.4 mm dimension",
      price: "₹1,03,490",
  },
  {
    link: "https://www.digit.in/laptops/hp-pavilion-15-15-eg2009tu-12th-gen-core-i5-1240p-2022-price-291277.html",
    image:
      "https://static.digit.in/product/thumb_242196_product_td_300.jpeg?tr=w-300",
      selector: "7",
      name: "HP Pavilion 15",
      processor: "12th Gen Intel Core i5-1240P",
      display: "15.6″(1920 x 1080)",
      os: "Windows 11",
      memory: "8 GB DDR4 RAM & 512 GB SSD",
      graphics: "Intel Iris Xe",
      body: "360 x 234 x 18 mm dimension",
      price: "₹62,720",
  }
];
router.get("/", function (req, res) {
  res.render("cards", {laps});
});
router.get("/laptopslist", function (req, res) {
  res.render("laptopslist", {laps});
});
router.get("/ranks", function (req, res) {
  res.render("ranks", {laps});
});
module.exports = router;