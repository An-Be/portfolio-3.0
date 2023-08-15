import PropTypes from "prop-types";
import { calculateDate } from "./calculateDate.util";
export const NAME = "Andrea Berrocal";

export const USER_NAME = "@Andrea_Berrocal@dev.social";

export const IMAGE = "/AndreaBerrocal.png";

export const SUMMARY = "Junior Software Engineer @ American Express";

export const PROFILE_STATS = {
  cats: 2,
  followers: 1000,
  following: 1000,
};

export const FEED_SECTIONS = ["Posts", "Projects", "About", "Contact"];

export const feedProptypes = {
  name: PropTypes.string,
  username: PropTypes.string,
  photo: PropTypes.string,
  timestamp: PropTypes.string,
};

export const POST_DISPLAY_ITEMS = [
  {
    header:"",
    text: "🏃This whole year went by so fast, it's crazy to think that Multiverse Fridays will come to an end on August 18th 2023🏅",
    timeStamp: calculateDate(new Date("07/09/2023")),
    tag: '#cruisin',
    github: false,
    reshare: true,
    like: true,
    reposts: true,
    deployed: false
  },
  {
    header:"",
    text: "Multiverse apprenticeship is coming to an end soon, hoping I can finish strong and get offered a position at AMEX💪",
    timeStamp: calculateDate(new Date("05/10/2023")),
    tag: '#hopeful',
    github: false,
    reshare: true,
    like: true,
    reposts: true,
    deployed: false
  },
  {
    header:"",
    text: "Super greatful for multiverse for giving me this opportunity. I think this is the first time I can truly say I love what I do.❤️",
    timeStamp: calculateDate(new Date("01/05/2023")),
    tag: '#greatful',
    github: false,
    reshare: true,
    like: true,
    reposts: true,
    deployed: false
  },
  {
    header:"",
    text: "🧑‍💼This is my first ever job in tech, so jumping into a whole codebase was very intimidating 🫣 but luckily with the help of my teammates and by slowly going through different components things are starting to click.🖱️",
    timeStamp: calculateDate(new Date("10/01/2022")),
    tag: '#excited',
    github: false,
    reshare: true,
    like: true,
    reposts: true,
    deployed: false
  },
  {
    header:"",
    text: "Succesfully finished my first jira story🎈. It was originally a spike but I was able to impliment a solution as well.🎊",
    timeStamp: calculateDate(new Date("09/05/2022")),
    tag: '#chillin',
    github: false,
    reshare: true,
    like: true,
    reposts: true,
    deployed: false
  },
  {
    header:"",
    text: "🖥️Just finished Multiverse Bootcamp. It was an intensive 3 months but I learned a lot and am ready to start working with my team.🧨",
    timeStamp: calculateDate(new Date("08/20/2022")),
    tag: '#big brain',
    github: false,
    reshare: true,
    like: true,
    reposts: true,
    deployed: false
  },
  {
    header:"",
    text: "🔥Excited to announce I just got accepted into Multiverse!🔥",
    timeStamp: calculateDate(new Date("05/16/2022")),
    tag: '#celebrating',
    github: false,
    reshare: true,
    like: true,
    reposts: true,
    deployed: false
  },
];

export const PROJECT_DISPLAY_ITEMS = [
  {
    header:"Caro Hive Front End & Caro Hive Backend",
    text: "Excited to announce I just got accepted into Multiverse!",
    img: '/projects/caro-hive.png',
    timeStamp: calculateDate(new Date("07/07/2023")),
    tag: '#shop',
    github: true,
    reshare: true,
    like: true,
    reposts: true,
    deployed: false
  },
  {
    header:"Astronomy Picture of Day",
    text: "A react application using NASA Astronomy Picture of Day API. Project built to showcase knowlege of Docker and Github Actions.",
    img: '/projects/astr-pic-day.png',
    timeStamp: calculateDate(new Date("04/07/2023")),
    tag: '#NASA',
    github: false,
    reshare: true,
    like: true,
    reposts: true,
    deployed: true
  },
]
