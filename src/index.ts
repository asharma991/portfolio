import "./styles/main.scss";
import profile from "./assets/profile.jpg";
import cssLogo from "./assets/css-logo.jpg";
import htmlLogo from "./assets/html-logo.jpg";
import jsLogo from "./assets/js-logo.jpg";
import reactJsLogo from "./assets/react-logo.jpg";
import tsLogo from "./assets/ts-logo.jpg";
import twitterLogo from "./assets/twitter-logo.svg";
import githubLogo from "./assets/github-logo.svg";
import linkedinLogo from "./assets/linkedin-logo.svg";
import resumePath from "./assets/resume.pdf";

const homePageLink: HTMLElement | null =
  document.getElementById("homePageLink");
homePageLink?.setAttribute("href", "/portfolio/");

const aboutPageLink: HTMLElement | null =
  document.getElementById("aboutPageLink");
aboutPageLink?.setAttribute("href", "/portfolio/about");

const projectsPageLink: HTMLElement | null =
  document.getElementById("projectPageLink");
projectsPageLink?.setAttribute("href", "/portfolio/projects");
const projectPageLinkButton: HTMLElement | null = document.getElementById(
  "projectPageLinkButton"
);
projectPageLinkButton?.setAttribute("href", "/portfolio/projects");

const currentPath: string = location.pathname;

const linksArr: NodeListOf<HTMLAnchorElement> =
  document.getElementsByClassName("link");

const activeLink: HTMLAnchorElement | undefined = Array.from(linksArr).find(
  (link: HTMLAnchorElement) =>
    link.pathname === (currentPath || currentPath.split("/")[2])
);

if (activeLink) {
  activeLink.classList.add("link-active");
}

const profileImg: HTMLElement | null = document.getElementById("profileImg");
profileImg?.setAttribute("src", profile);
const cssLogoImg: HTMLElement | null = document.getElementById("css3Img");
cssLogoImg?.setAttribute("src", cssLogo);
const htmlLogoImg: HTMLElement | null = document.getElementById("html5Img");
htmlLogoImg?.setAttribute("src", htmlLogo);
const jsLogoImg: HTMLElement | null = document.getElementById("jsImg");
jsLogoImg?.setAttribute("src", jsLogo);
const reactJsLogoImg: HTMLElement | null = document.getElementById("reactImg");
reactJsLogoImg?.setAttribute("src", reactJsLogo);
const tsLogoImg: HTMLElement | null = document.getElementById("tsImg");
tsLogoImg?.setAttribute("src", tsLogo);
const gitLogoSvg = document.getElementById("gitLogo");
gitLogoSvg?.setAttribute("src", githubLogo);
const twitterLogoSvg = document.getElementById("twitterLogo");
twitterLogoSvg?.setAttribute("src", twitterLogo);
const linkedinLogoSvg = document.getElementById("linkedinLogo");
linkedinLogoSvg?.setAttribute("src", linkedinLogo);
const resumeLink = document.getElementById("resumeLink");
resumeLink?.setAttribute("href", resumePath);
