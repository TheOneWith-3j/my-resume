import React from "react";
import { Container, Grid } from "@material-ui/core";
// import mypic from "../assets/mypic.jpg";
import backgroundImage from "../assets/bgimg.jpg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// import CustomTimeline, {
//   CustomTimelineSeparator,
// } from "../components/Timeline";
// import resumeData from "../utils/resumeData";
// import PersonIcon from "@mui/icons-material/Person";
// import TimelineItem from "@mui/lab/TimelineItem";
// import TimelineContent from "@mui/lab/TimelineContent";
// import DownloadIcon from "@mui/icons-material/DownloadRounded"
import Header from "../components/Header";
import Profile from "../components/Profile";

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
             <Profile/>
            </Grid>

            <Grid
              item
              xs
              className="shadow-2xl p-4 rounded-3xl backdrop-blur-sm backdrop-brightness-150"
            >
              
              <Header/>
              <Footer/>
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
