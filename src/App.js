import './App.css';
// mui
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import useMediaQuery from "@mui/material/useMediaQuery";
// componets
import Contents from './Contents';
// assets
import flora from "./assets/flora.png";
// import borderPng from "./assets/border.png"

function App() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <div style={{ position: "relative" }}>
      <Box
        height="100px"
        width="100%"
        sx={{
          position: "fixed",
          top: "0px",
          left: "0px",
          backgroundColor: "#FE036A"
        }}
        />
      <Paper
        elevation={10}
        sx={{
          maxWidth: "900px",
          maxHeight: "900px",
          margin: isMobile ? "50px 20px" : "auto",
          position: 'relative',
          mt: isMobile ? "20px" : "50px",
          height: 'calc(100vh - 100px)',
          padding: "30px",
          zIndex: "1300",
        }}>

        <Box sx={{ maxWidth: "600px", margin: "auto", paddingTop: "4rem" }}>
          <Contents />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '100%',
            height: '100%',
            backgroundImage: `url(${flora})`
          }}
        >
        </Box>
      </Paper>
    </div>
  );
}

export default App;
