import './App.css';
// mui
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
// componets
import Contents from './Contents';
// assets
import flora from "./assets/flora.png"
// import borderPng from "./assets/border.png"

function App() {
  return (
    <Paper
      elevation={10}
      sx={{
        maxWidth: "900px",
        margin: "auto",
        position: 'relative',
        mt: "50px",
        height: 'calc(100vh - 100px)',
        padding: "30px"
      }}>

      <Box sx={{ maxWidth: "600px", margin: "auto" }}>
        <Contents />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '100%',
          height: '100%',
        }}
      >
        <img src={flora} alt="backgroung" height="100%" />
      </Box>
    </Paper>
  );
}

export default App;
