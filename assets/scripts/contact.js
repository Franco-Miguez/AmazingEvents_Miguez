import data from "./amazing.js";
import { createImages, createTitle } from "./banner.js";

const contentBanner = document.getElementById("content-banner")

contentBanner.appendChild(createImages(data.events))
contentBanner.appendChild(createTitle("CONTACT"))