import React from "react";
import Header from "../components/Header";
import { Tabs, Tab, Card, CardActionArea, CardMedia, CardContent, Typography, Grow } from "@mui/material";
import { Container, Grid } from "@material-ui/core";
import { useState } from "react";
import CustomTabs from "../components/CustomTabs";
import resumeData from "../utils/resumeData";
import { useLocation } from "react-router";

const Portfolio = () => {
  // const { tabValue, setTabValue } = useState("All");

  const pathName = useLocation().pathname;
  return (
    // <Grid container>
    // <Grid
    //   item
    //   className=" text-yellow-300 cursor-auto animate-bounce inline-block relative "
    // >
    //   <h3 className="relative border-b-8 border-yellow-200 mb-7 mt-7 whitespace-pre-line">
    //     My Portfolio
    //   </h3>
    // </Grid>

    // <Grid container>
    // <Grid item>
    //       <Tabs value={tabValue} textColor="inherit" indicatorColor="yellow" onChange={(event, newValue) => setTabValue(newValue)}>
    //         <Tab value="All" Label='All' className={tabValue==='All' ? "text-white" : "text-blue-600"}/>
    //         {/* <Tab value="All" label='All' textColor="primary"/>  */}
    //       </Tabs>
    //       adncnkjn
    //       <Header/>

    // </Grid>
    // </Grid>

    // </Grid>

    <Grid container>
      <Grid item xs={12}>
        <CustomTabs />
      </Grid>

      <Grid item xs={12}>
        <Grid container spacing={3} className="mt-2">
          {resumeData.projects.map(proj =>(
            
            <>
              {console.log(pathName)}
              {pathName== proj.tag || pathName=='All' ? (
              <Grid item>
              <Grow in timeout={1000}>
              <Card>
                <CardActionArea>
                  <CardMedia/>
                  <CardContent>
                    <Typography>{proj.title}</Typography>
                    <Typography>{proj.description}</Typography>
                    <Typography>Learn More</Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
              </Grow>
            </Grid>) 
            
            :
            
            null}
              
            </>
            

          ))}

        </Grid>
      </Grid>
    </Grid>
  );
};

export default Portfolio;
