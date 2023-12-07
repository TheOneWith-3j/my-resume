import React from "react";
import { Container, Grid } from "@material-ui/core";
import mypic from "../assets/mypic.jpg";
import backgroundImage from "../assets/bgimg.jpg";
import Navbar from "../components/Navbar";
import CustomTimeline from "../components/Timeline";

const BasicInfo = () => {
  return (
    <div className="bg-cover bg-center bg-fixed h-screen" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div className="overflow-hidden h-screen">
      <Container>
        <Grid container >
          <Grid
            item
            xs={12}
            sm={12}
            md={4}
            lg={3}
            className="shadow-3xl rounded-3xl backdrop-blur-sm backdrop-brightness-150"
          >
            
            <div className="p-5 mx-4 cursor-pointer hover:scale-105 transition-all duration-300 text-yellow-200" bg->
              <p className="font-bold text-xl uppercase">Jash J. Joshi</p>
              <p>Computer Engineer</p>
              <figure className="flex items-center w-full justify-center ">
                <img
                  src={mypic}
                  alt="my image"
                  className="p-5 rounded-full w-72 cursor-auto"
                />
              </figure>
              <div
                // onClick={handleClick}
                className="mt-5 bg-yellow-400 shadow-md p-3 rounded-full  cursor-pointer hover:bg-yellow-300"
              >
                <p className="font-Poppins text-2xl text-black text-center">
                  Download Resume
                </p>
              </div>
            </div>
          </Grid>

          <Grid sm item className="shadow-2xl p-4 rounded-3xl text-yellow-200 backdrop-blur-sm backdrop-brightness-150">
            <div className="p-2 mx-4 cursor-pointer hover:scale-105 transition-all duration-300">
              ajcbkjcbackabc
              <CustomTimeline/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
    </div>
    
  );
};

export default BasicInfo;
