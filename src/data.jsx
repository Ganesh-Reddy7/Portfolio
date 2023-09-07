import{
    FaHome,
    FaUser,
    FaFolderOpen,
    FaBriefcase,
    FaGraduationCap,
    FaCode,
    FaEnvelopeOpen,
    FaExternalLinkAlt,
} from 'react-icons/fa';
import {FiFileText , FiUser } from 'react-icons/fi';
import Work1 from './assets/project-1.png';
import Work2 from './assets/project-2.png';
import Work3 from './assets/project-3.png';
import Work4 from './assets/project-4.png';
import Work5 from './assets/project-5.png';
import Work6 from './assets/project-6.png';

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/bluevoilet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenred.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
    {
        id : 1 ,
        name: 'Home',
        icon : <FaHome className='nav_icon'/>,
        path:'/',
    },
    {
        id : 2 ,
        name: 'About',
        icon : <FaUser className='nav_icon'/>,
        path:'/About',
    },
    {
        id : 3 ,
        name: 'Portfolio',
        icon : <FaFolderOpen className='nav_icon'/>,
        path:'/Portfolio',
    },
    {
        id : 4 ,
        name: 'Contact',
        icon : <FaEnvelopeOpen className='nav_icon'/>,
        path:'/Contact',
    },
];

export const personalInfo = [
    {
        id: 1,
        title:'First Name : ',
        description:'Ganesh Kumar Reddy',
    },
    {
        id: 2,
        title:'Last Name : ',
        description:'Meenige',
    },
    {
        id: 3,
        title: 'Age : ',
        description:'21 Years',
    },
    {
        id: 4,
        title:'Nationality : ',
        description:'India',
    },
    {
        id: 5,
        title:'Freelance : ',
        description:'Available',
    },
    {
        id: 6,
        title:'Adress : ',
        description:'Giddalur',
    },
    {
        id: 7,
        title:'Phone : ',
        description:'+919010545180',
    },
    {
        id: 8,
        title:'Email : ',
        description:'ganeshreddym717@gmail.com',
    },
    {
        id: 9,
        title:'LinkedIn : ',
        description:'https://www.linkedin.com/in/ganesh-reddy-558a0b24b',
    },
    {
        id: 10,
        title:'Languages : ',
        description:'English ,Telugu , Hindhi , French',
    },
];

export const stats =[
    {
        id: 1,
        no: '0',
        title : 'Fresher',
    },
    {
        id: 2,
        no: '10+',
        title:'Completed <br /> Projects',
    },
    {
        id: 3,
        no: '0',
        title:'Customers',
    },
    {
        id: 4,
        no:'0.25+',
        title:'Internship <br /> Experience',
    }
];

export const resume1 = [
    {
        id: 1,
        category:'experience',
        icon:<FaBriefcase />,
        year:'JULY-AUGUST 2023',
        title:'Data Science Intern <span> Code Clause </span>',
        desc:'During This Internship I learned how to work with Data Science projects,and I improved my communciation skills and Cordination skills.',
    },
    {
        id: 2,
        category:'experience',
        icon:<FaBriefcase />,
        year:'JULY-SEPTEMBER 2023',
        title:'Data Science Intern <span> YBI Foundation </span>',
        desc:'During This Internship I learned how to build prective models and classification models to achieve accurate results. ',
    },
    {
        id: 3,
        category:'experience',
        icon:<FaBriefcase />,
        year:'MAY 2023',
        title: 'Web Application Designing <span> FarmAtech </span>',
        desc:'While working with this project I learned how to deal with frontend and backend of a web application which provides features for farmers.',
        
    },
    {
        id: 4,
        category:'education',
        icon:<FaGraduationCap/>,
        year:'2020 - 2024',
        title:'Bachelors Degree <span>RGUKT Ongole</span>',
        desc:'Currenty I am an udergraduate with  CGPA 9.5 upto 3rd year in the stream of computer Science and Engineering.',
    },
    {
        id: 5,
        category:'education',
        icon:<FaGraduationCap/>,
        year:'2018 - 2020',
        title:'Pre-University Course <span>RGUKT Ongole</span>',
        desc:'I have completed my pre-university course in RGUKT Ongole at RK Valley with CGPA 9.45 in MPC',

    },
    {
        id: 6,
        category:'education',
        icon:<FaGraduationCap/>,
        year:'2013 - 2018',
        title:'Secondary School <span>AP Model School Racherla</span>',
        desc:'I have my secondary school education at AP Model School Racherla and I got GPA 10 in my 10th standard',
    },

];

export const skill = [
    {
        id: 1,
        title:'Html',
        percentage:'75',
    },
    {
        id: 2,
        title:'Css',
        percentage:'50',
    },
    {
        id: 3,
        title:'Javascript',
        percentage:'50',
    },
    {
        id: 4,
        title:'React',
        percentage:'20',
    },
    {
        id: 5,
        title:'SQL',
        percentage:'60',
    },
    {
        id: 6,
        title:'PHP',
        percentage:'30',
    },
    {
        id: 7,
        title:'python',
        percentage:'80',
    },
    {
        id: 8,
        title:'C',
        percentage:'70',
    },
    {
        id: 9,
        title:'Java',
        percentage:'40',
    },
    {
        id: 10,
        title:'Data Science',
        percentage:'30',
    },
    {
        id: 11,
        title:'Machine Learning',
        percentage:'20',
    },
    {
        id: 12,
        title:'Flutter',
        percentage:'15',
    },

];

export const portfolio = [
    {
        id : 1,
        img: Work1,
        title:'Web Application',
        details: [
            {
                icon:<FiFileText />,
                title:'Project : ',
                desc:'farmAtech',
            },
            {
                icon:<FiUser />,
                title:'Client : ',
                desc:'Farmer',
            },
            {
                icon:<FaCode />,
                title:'Language : ',
                desc:'HTML CSS PHP and JAVASCRIPT',
            },
            {
                icon:<FaExternalLinkAlt />,
                title:'Preview : ',
                desc:'https://github.com/Ganesh-Reddy7/FarmAtech.git',
            },
        ],
    },
    {
        id : 2,
        img: Work2,
        title:'Web Application',
        details: [
            {
                icon:<FiFileText />,
                title:'Project : ',
                desc:'Online Voting',
            },
            {
                icon:<FiUser />,
                title:'Client : ',
                desc:'Voter',
            },
            {
                icon:<FaCode />,
                title:'Language : ',
                desc:'HTML CSS JAVASCRIPT and PHP',
            },
            {
                icon:<FaExternalLinkAlt />,
                title:'Preview : ',
                desc:'https://github.com/Ganesh-Reddy7/Online-Voting.git',
            },
        ],
    },
    {
        id : 3,
        img: Work3,
        title:'Website Building',
        details: [
            {
                icon:<FiFileText />,
                title:'Project : ',
                desc:'Food Menu Selection',
            },
            {
                icon:<FiUser />,
                title:'Client : ',
                desc:'Users',
            },
            {
                icon:<FaCode />,
                title:'Language : ',
                desc:'HTML & CSS',
            },
            {
                icon:<FaExternalLinkAlt />,
                title:'Preview : ',
                desc:'https://github.com/Ganesh-Reddy7/Food-Menu-Selection.git',
            },
        ],
    },
    {
        id : 4,
        img: Work4,
        title:'Website',
        details: [
            {
                icon:<FiFileText />,
                title:'Project : ',
                desc:'Personal Portfolio',
            },
            {
                icon:<FiUser />,
                title:'Client : ',
                desc:'personal',
            },
            {
                icon:<FaCode />,
                title:'Language : ',
                desc:'React Js',
            },
            {
                icon:<FaExternalLinkAlt />,
                title:'Preview : ',
                desc:'https://github.com/Ganesh-Reddy7/Portfolio.git',
            },
        ],
    },
    {
        id : 5,
        img: Work5,
        title:'Machine Learning',
        details: [
            {
                icon:<FiFileText />,
                title:'Project : ',
                desc:'Next Word Prediction',
            },
            {
                icon:<FiUser />,
                title:'Client : ',
                desc:'Farmer',
            },
            {
                icon:<FaCode />,
                title:'Language : ',
                desc:'DataScience & Python',
            },
            {
                icon:<FaExternalLinkAlt />,
                title:'Preview : ',
                desc:'https://github.com/Ganesh-Reddy7/next-word-prediction.git',
            },
        ],
    },
    {
        id : 6,
        img: Work6,
        title:'Machine Learning',
        details: [
            {
                icon:<FiFileText />,
                title:'Project : ',
                desc:'Iris Flower Identification',
            },
            {
                icon:<FiUser />,
                title:'Client : ',
                desc:'Farmer',
            },
            {
                icon:<FaCode />,
                title:'Language : ',
                desc:'Python & Data Science',
            },
            {
                icon:<FaExternalLinkAlt />,
                title:'Preview : ',
                desc:'https://github.com/Ganesh-Reddy7/iris-flower-classification.git',
            },
        ],
    },

];

export const themes = [
    {
        id : 1,
        img: Theme1,
        color:'hsl(252 , 35% , 52%)',
    },
    {
        id: 2,
        img:Theme2,
        color:'hsl(4 , 93% , 54%)',
    },
    {
        id: 3,
        img:Theme3,
        color:'hsl(271 , 76% , 53%)',
    },
    {
        id: 4,
        img:Theme4,
        color:'hsl(225 , 73% , 57%)',
    },
    {
        id: 5,
        img:Theme5,
        color:'hsl(43 , 74% , 49%)',
    },
    {
        id: 6,
        img:Theme6,
        color:'hsl(339 , 81% , 66%)',
    },
    {
        id: 7,
        img:Theme7,
        color:'hsl(80 , 61% , 50%)',
    },
    {
        id: 8,
        img:Theme8,
        color:'hsl(19 , 96% , 52%)',
    },
    {
        id: 9,
        img:Theme9,
        color:'hsl(88 , 65% , 43%)',
    },
    {
        id: 10,
        img:Theme10,
        color:'hsl(60 , 100% , 50%)',
    },
]
