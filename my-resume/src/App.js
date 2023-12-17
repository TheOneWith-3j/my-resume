import './App.css';
import BasicInfo from './pages/BasicInfo';
import { BrowserRouter, Switch , Route, Routes } from "react-router-dom";
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import Timeline from './components/Timeline';
import Header from './components/Header';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route index element={<BasicInfo/>}/>
        <Route path='/Timeline' element={<Timeline/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;



// import { Container, Grid } from "@material-ui/core";

// import Profile from "./components/Profile";
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import Portfolio from "./pages/Portfolio";
// import Resume from "./pages/Resume";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <Container>
//       <Grid container>
//         <Grid
//         item
//         xs={12}
//         sm={12}
//         md={4}
//         lg={3}
//         >
//           <Profile />
//         </Grid>
      
//         <Grid item xs >
//         <Header/>
//         <Router>
//           <Routes>
//             <Route path="/portfolio">
//               <Portfolio />
//             </Route>
//             <Route path="/">
//               <Resume/>
//             </Route>
//           </Routes>
//         </Router>

//         <Footer/>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// }

// export default App;