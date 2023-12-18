import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid,regular, brands , icon} from '@fortawesome/fontawesome-svg-core'
// import {fa-linkedin} from '@fortawesome/free-regular-svg-icons'
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { StorageRounded, Web, WebRounded } from '@material-ui/icons'
import { DataObjectRounded } from '@mui/icons-material'

export default{
    name:"Jash J. Joshi",
    designation: "Computer Engineer",
    dob : "15th January, 2002",
    email: "jashjoshi57@gmail.com",
    address: "Borivali (W), Mumbai-92, MH, India",

    social :{
        Linkedin : {
            link: "https://linkedin.com/in/jash-joshi01/",
            text: "LinkedIn Profile",
            icon : <LinkedInIcon/>
        },
        Github : {
            link:"https://github.com/TheOneWith-3j",
            text:"GitHub Profile",
            icon: <GitHubIcon/>
        }
    },
   
    about_me :"B. Tech in Computer Engineering. Well-versed in computer science foundations, including object-oriented programming, data structures, algorithms, and relational databases. Aninventive thinker and problem-solving enthusiast, harnessing technology to deliver effective solutions. A devoted team leader, managing collaborative efforts toward achievement, blending a perfectionist's eye for detail with a curiosity-driven approach to handle problems.",
   
    experiences: [
        {
            title:"Work 1",
            date : "2018- present",
            description: "B. Tech in Computer Engineering. Well-versed in computer science foundations, including object-oriented"
        },
        {
            title:"Work 2",
            date : "2018- present",
            description: "B. Tech in Computer Engineering. Well-versed in computer science foundations, including object-oriented"
        },
        {
            title:"Work 3",
            date : "2018- present",
            description: "B. Tech in Computer Engineering. Well-versed in computer science foundations, including object-oriented"
        },
        {
            title:"Work 4",
            date : "2018- present",
            description: "B. Tech in Computer Engineering. Well-versed in computer science foundations, including object-oriented"
        }
    ],

    education: [
        {
            title:"edu 1",
            date : "2018- present",
            description: "B. Tech in Computer Engineering. Well-versed in computer science foundations, including object-oriented"
        },

        {
            title:"edu 2",
            date : "2018- present",
            description: "B. Tech in Computer Engineering. Well-versed in computer science foundations, including object-oriented"
        },

        {
            title:"edu 3",
            date : "2018- present",
            description: "B. Tech in Computer Engineering. Well-versed in computer science foundations, including object-oriented"
        },

        {
            title:"edu 4",
            date : "2018- present",
            description: "B. Tech in Computer Engineering. Well-versed in computer science foundations, including object-oriented"
        }
    ],

    services : [
        {
            title: "Web Development",
            description : "I am a web dev",
            icon : <WebRounded/>
        },
        {
            title: "Data Analysis",
            description : "I am a web dev",
            icon : <StorageRounded/>
        },
        {
            title: "Programming",
            description : "I am a web dev",
            icon : <DataObjectRounded/>
        }
    ],

    skills : [
        {
            title: "Front-End",
            description : ["a", "b","c"],
        },
        {
            title: "Backend",
            description : ["I am a kjasdncweb dev"],
        },
        {
            title: "Data Analysis",
            description : ["I am a welkmsdammb dev"],
        },
        {
            title: "Source Control",
            description: ["GitHub", "git"]
        }
    ]
    
}








// <FontAwesomeIcon icon="fa-brands fa-linkedin" fade size="xl" />