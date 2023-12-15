import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {solid,regular, brands , icon} from '@fortawesome/fontawesome-svg-core'
// import {fa-linkedin} from '@fortawesome/free-regular-svg-icons'
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"

export default{
    name:"Jash J. Joshi",
    designation: "Computer Engineer",

    dob : "15th January, 2002",
    email: "jashjoshi57@gmail.com",

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
    }
    
}








// <FontAwesomeIcon icon="fa-brands fa-linkedin" fade size="xl" />