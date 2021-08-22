export const aboutMeInfoPanel = {
    id: 'about',
    darkPanel: true,
    headline: "About Me",
    description1: "My name is Dylan and I am currently in my second year studying Computer Science at the University of Cambridge",
    description2: "I love programming and working on new projects",
    description3: "Click here to find out more",
    button: true,
    buttonLabel: "About Me",
    imgStart: false, 
    img: require('../../imgs/Selection_009.png').default, // 17/14/9
    internal: true,
    link: "/aboutme",
    circleImg: true,
    alt: "Img desc",
    primary:  true,
    arrow: true,
};

export const projectsInfoPanel = {
    id: 'projects',
    darkPanel: false,
    topLine: "",
    headline: "Projects",
    description1: "I have built many programs to learn new skills and I always enjoy applying them to try and solve real world problems",
    description2: "These include humanoid robots, Rubik's cube solvers, websites and more!",
    description3: "Click here to find out more",
    button: true,
    buttonLabel: "Projects",
    imgStart: true, 
    img: require('../../imgs/Gary.svg').default,
    internal: true,
    link: "/projects",
    circleImg: false,
    alt: "Img desc",
    primary:  true,
    arrow: true,
};

export const contactMeInfoPanel = {
    id: 'contact',
    darkPanel: true,
    topLine: "",
    headline: "Contact Me",
    description1: "Send me a message if you want to have a chat!",
    description2: "I am looking forward to try and find an internship for the summer of 2022, if you have any opportunities, please let me know",
    description3: "Click here to send a message",
    button: true,
    buttonLabel: "Contact Me",
    imgStart: false, 
    img: require('../../imgs/email.png').default,
    internal: true,
    link: "/contactme",
    circleImg: false,
    alt: "Img desc",
    primary:  true,
    arrow: true,
};