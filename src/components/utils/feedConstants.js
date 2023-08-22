import PropTypes from "prop-types";
import { calculateDate } from "./calculateDate.util";
export const NAME = "Andrea Berrocal";

export const USER_NAME = "@Andrea_Berrocal@dev.social";

export const IMAGE = "/AndreaBerrocal.png";

export const SUMMARY = "Software Engineer III @ American Express";

export const PROFILE_STATS = {
  cats: 2,
  followers: 8,
  following: 8,
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
    text: "I have been officially promototed to Software Engineer III at American Express!! Time to CELEBRATE🏅",
    timeStamp: calculateDate(new Date("08/28/2023")),
    tag: '#promoted',
    github: {isPresent: false, data: null},
    reshare: {isPresent: true, data: '56'},
    like: {isPresent: true, data: '34'},
    comment: {isPresent: true, data: '23'},
    deployed: {isPresent: false, data: null}
  },
  {
    header:"",
    text: "🏃This whole year went by so fast, it's crazy to think that Multiverse Fridays will come to an end on August 18th 2023🏅",
    timeStamp: calculateDate(new Date("07/09/2023")),
    tag: '#cruisin',
    github: {isPresent: false, data: null},
    reshare: {isPresent: true, data: '56'},
    like: {isPresent: true, data: '34'},
    comment: {isPresent: true, data: '23'},
    deployed: {isPresent: false, data: null}
  },
  {
    header:"",
    text: "Multiverse apprenticeship is coming to an end soon, hoping I can finish strong and get offered a position at AMEX💪",
    timeStamp: calculateDate(new Date("05/10/2023")),
    tag: '#hopeful',
    github: {isPresent: false, data: null},
    reshare: {isPresent: true, data: '23'},
    like: {isPresent: true, data: '45'},
    comment: {isPresent: true, data: '75'},
    deployed: {isPresent: false, data: null}
  },
  {
    header:"",
    text: "Super greatful for multiverse for giving me this opportunity. I think this is the first time I can truly say I love what I do.❤️",
    timeStamp: calculateDate(new Date("01/05/2023")),
    tag: '#greatful',
    github: {isPresent: false, data: null},
    reshare: {isPresent: true, data: '12'},
    like: {isPresent: true, data: '43'},
    comment: {isPresent: true, data: '54'},
    deployed: {isPresent: false, data: null}
  },
  {
    header:"",
    text: "🧑‍💼This is my first ever job in tech, so jumping into a whole codebase was very intimidating 🫣 but luckily with the help of my teammates and by slowly going through different components things are starting to click.🖱️",
    timeStamp: calculateDate(new Date("10/01/2022")),
    tag: '#excited',
    github: {isPresent: false, data: null},
    reshare: {isPresent: true, data: '12'},
    like: {isPresent: true, data: '43'},
    comment: {isPresent: true, data: '56'},
    deployed: {isPresent: false, data: null}
  },
  {
    header:"",
    text: "Succesfully finished my first jira story🎈. It was originally a spike but I was able to impliment a solution as well.🎊",
    timeStamp: calculateDate(new Date("09/05/2022")),
    tag: '#chillin',
    github: {isPresent: false, data: null},
    reshare: {isPresent: true, data: '45'},
    like: {isPresent: true, data: '32'},
    comment: {isPresent: true, data: '54'},
    deployed: {isPresent: false, data: null}
  },
  {
    header:"",
    text: "🖥️Just finished Multiverse Bootcamp. It was an intensive 3 months but I learned a lot and am ready to start working with my team.🧨",
    timeStamp: calculateDate(new Date("08/20/2022")),
    tag: '#big brain',
    github: {isPresent: false, data: null},
    reshare: {isPresent: true, data: '43'},
    like: {isPresent: true, data: '23'},
    comment: {isPresent: true, data: '65'},
    deployed: {isPresent: false, data: null}
  },
  {
    header:"",
    text: "🔥Excited to announce I just got accepted into Multiverse!🔥",
    timeStamp: calculateDate(new Date("05/16/2022")),
    tag: '#celebrating',
    github: {isPresent: false, data: null},
    reshare: {isPresent: true, data: '56'},
    like: {isPresent: true, data: '34'},
    comment: {isPresent: true, data: '12'},
    deployed: {isPresent: false, data: null}
  }
];

export const PROJECT_DISPLAY_ITEMS = [
  {
    header:"Caro Hive Front End & Caro Hive Backend",
    text: "Ecommerce site built using React.js, Redux Toolkit, Tailwind, DaisyUI, Strapi, and Stripe.",
    img: '/projects/caro-hive.png',
    timeStamp: calculateDate(new Date("07/07/2023")),
    tag: '#shop',
    github: {isPresent: true, data: 'https://github.com/An-Be/CaroHive-frontend'},
    reshare: {isPresent: true, data: '34'},
    like: {isPresent: true, data: '89'},
    comment: {isPresent: true, data: '21'},
    deployed: {isPresent: false, data: null}
  },
  {
    header:"Astronomy Picture of Day",
    text: "A react application using NASA Astronomy Picture of Day API. Project built to showcase knowlege of Docker and Github Actions.",
    img: '/projects/astr-pic-day.png',
    timeStamp: calculateDate(new Date("04/07/2023")),
    tag: '#NASA',
    github: {isPresent: true, data: 'https://github.com/An-Be/Astrononomy-picture-of-day'},
    reshare: {isPresent: true, data: '76'},
    like: {isPresent: true, data: '51'},
    comment: {isPresent: true, data: '20'},
    deployed: {isPresent: true, data: 'https://astrononomy-picture-of-day.vercel.app/'}
  },
  {
    header:"Chattr",
    text: "Chat app using redux toolkit, socket.io, express, tailwind/Daisy UI for multiverse workshop",
    img: '/projects/chattr.png',
    timeStamp: calculateDate(new Date("02/03/2023")),
    tag: '#chat',
    github: {isPresent: true, data: 'https://github.com/Multiverse-Workshop/Chattr'},
    reshare: {isPresent: true, data: '10'},
    like: {isPresent: true, data: '24'},
    comment: {isPresent: true, data: '35'},
    deployed: {isPresent: false, data: null}
  },
]
