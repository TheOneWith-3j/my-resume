import React from "react";
import { Container, Grid } from "@material-ui/core";
import mypic from "../assets/mypic.jpg";
import backgroundImage from "../assets/bgimg.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import CustomTimeline, {
  CustomTimelineSeparator,
} from "../components/Timeline";
import resumeData from "../utils/resumeData";
import PersonIcon from "@mui/icons-material/Person";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import DownloadIcon from "@mui/icons-material/DownloadRounded"

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent>
      {link ? (
        <p>
          <span className="font-bold">{title}: </span> <a href={link} target="_blank" className="inline-flex underline text-yellow-100 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">{text}</a>
        </p>
      ) : (
        <p>
          <span className="font-bold">{title}: </span>
          <span className="inline-flex text-yellow-100 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent will-change-transform">{text}</span>
        </p>
      )}
    </TimelineContent>
  </TimelineItem>
);

const BasicInfo = () => {
  return (
    <div
      className="bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Navbar/>
        <Container className="mt-5">
          <Grid container >
            <Grid item
              xs={12}
              sm={12}
              md={4}
              lg={3}
              className="shadow-3xl rounded-3xl backdrop-blur-sm backdrop-brightness-150"
            >
              <div className="p-5 mx-4 cursor-pointer hover:scale-y-105 transition-all duration-300 text-yellow-200">
                <p className="font-bold text-xl uppercase">{resumeData.name}</p>
                <p>{resumeData.designation}</p>
              </div>

              <div className="flex items-center w-full justify-center ">
                  <img
                    src={mypic}
                    alt="my image"
                    // className="p-5 rounded-full w-72 cursor-auto"
                    className="clip polygon cursor-auto"
                  />
              </div>  
              <div className="p-5 mx-4 cursor-pointer hover:scale-y-105 transition-all duration-300 text-yellow-200">
                <div className="-my-7">
                  <CustomTimeline icon={<PersonIcon />} >
                    <CustomTimelineItem title='Name' text={resumeData.name}/>
                    <CustomTimelineItem title='Designation' text={resumeData.designation}/>
                    <CustomTimelineItem title='Email' text={resumeData.email}/>
                    {Object.keys(resumeData.social).map(key=>(
                      <CustomTimelineItem title={key} text={resumeData.social[key].text} link={resumeData.social[key].link}/>
                    ))}
                  </CustomTimeline>
                </div>
              </div>
              <div
                    // onClick={handleClick}
                    className="mt-4 bg-yellow-400 shadow-2xl m-4 p-3 rounded-full  cursor-pointer hover:bg-yellow-300"
                  >
                    <p className="font-Poppins text-xl text-black text-center">
                      Download Resume {<DownloadIcon/>}
                    </p>
                </div>
            </Grid>

            <Grid
              item
              xs
              className="shadow-2xl p-4 rounded-3xl text-yellow-200 backdrop-blur-sm backdrop-brightness-150"
            >
              <div className="p-2 mx-4 cursor-pointer hover:scale-y-105 transition-all duration-300">
                Header components
                router
              </div>
            </Grid>
            
            <Grid container></Grid>
                    <Navbar/>
          </Grid>
        </Container>
        <Footer/>
    </div>
  );
};

export default BasicInfo;
