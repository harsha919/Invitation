import "./App.css";
// mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Location from "@mui/icons-material/LocationOnRounded";
import Link from "@mui/material/Link";
// componets
import { Typography } from "@mui/material";
// assets
import background from "./assets/background.png";
import headerImg from "./assets/theme-7.png";
import bride from "./assets/bride.jpg";
import groom from "./assets/groom.jpg";

function App() {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box
      sx={{
        backgroundImage: `url(${background})`,
        minHeight: "100vh",
        minWidth: "100vw",
        width: "100%",
        height: "100%",
        paddingBottom: "5rem",
      }}
    >
      <Stack spacing={5} alignItems="center">
        <Box
          component={"img"}
          src={headerImg}
          width={isMobile ? "100%" : "40rem"}
        />
        <Box>
          <Typography variant="h5" fontWeight="bold">
            ఈర్ల వారి పెండ్లి పిలుపు
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          width="90%"
          maxWidth="900px"
        >
          <Stack spacing={1} alignItems="center">
            <Box
              component={"img"}
              src={groom}
              width={isMobile ? "7rem" : "12rem"}
              borderRadius="50%"
            />
            <Typography variant="body2" fontWeight="bold" textAlign="center">
              వరుడు&nbsp;{isMobile ? null : "చి || తేజేష్"}
            </Typography>
            {isMobile ? (
              <Typography variant="body2" fontWeight="bold" textAlign="center">
                చి || తేజేష్
              </Typography>
            ) : null}
          </Stack>
          <Stack spacing={1} alignItems="center">
            <Box
              component={"img"}
              src={bride}
              width={isMobile ? "7rem" : "12rem"}
              borderRadius="50%"
            />
            <Typography variant="body2" fontWeight="bold" textAlign="center">
              వధువు&nbsp;{isMobile ? null : "చి || ల || సౌ || సంధ్య"}
            </Typography>
            {isMobile ? (
              <Typography variant="body2" fontWeight="bold" textAlign="center">
                చి || ల || సౌ || సంధ్య
              </Typography>
            ) : null}
          </Stack>
        </Box>
        <Stack
          spacing={1}
          sx={{
            width: "90%",
            maxWidth: "900px",
          }}
        >
          <Typography variant="subtitle1" textAlign="center" fontWeight="bold">
            శుభముహూర్తం 12.05.2023 శుక్రవారం రాత్రి 02.43 ని.లకు
          </Typography>
          <Typography variant="subtitle1" textAlign="center" fontWeight="bold">
            కళ్యాణవేదిక -  
            <Link
              href="https://goo.gl/maps/tsJeDN5k8AKMZh8N9"
              rel="location noreferrer"
              target="_blank"
              sx={{ display: "inline-block" }}
            >
              {/* <Button variant="text" color="info">
                <Icon sx={{ fontSize: "24px" }}>
                  <Location />
                </Icon>
              </Button> */}
              శ్రీ వరసిద్ధి వినాయక కళ్యాణ మండపము ,కోలవెన్ను
            </Link>
          </Typography>
          {/* మరియు రిసెప్షన్ */}
          <br></br>
          <Typography variant="subtitle1" textAlign="center" fontWeight="bold">
            వ్రతం - 13 .05 .2023 శనివారం ఉదయం 09 .00 నుండి
          </Typography>
          <Typography variant="subtitle1" textAlign="center" fontWeight="bold">
            విందు - మధ్యాహ్నం 12 .00 నుండి
          </Typography>
          <br></br>
          <Typography variant="subtitle1" textAlign="center" fontWeight="bold">
            కోలవెన్ను కు వెళ్లే బస్సు నంబరు - 211
          </Typography>
        </Stack>
        <Stack
          spacing={1}
          sx={{
            marginTop: "3rem !important",
            width: "90%",
            maxWidth: "900px",
          }}
        >
          <Typography variant="subtitle1" textAlign="center" fontWeight="bold">
            వ్రతం జరుగు మా గృహముకు మార్గ నిర్దేశములు
          </Typography>
          <Typography variant="subtitle1" textAlign="center">
            <b>బస్ స్టాండ్ నుండి</b> - 31, 31H నెంబర్ బస్సు ఎక్కి కాటా దగ్గర
            దిగి కాటా పక్కన రోడ్డులో 200 మీటర్లు నడవ వలెను
          </Typography>
          <Typography variant="subtitle1" textAlign="center">
            <b>రైల్వే స్టేషన్ నుండి</b> - 54, 5SG నెంబర్ బస్సు ఎక్కి కాటా దగ్గర
            దిగి కాటా పక్కన రోడ్డులో 200 మీటర్లు నడవ వలెను
          </Typography>
          <Typography variant="subtitle1" textAlign="center">
            <b>OLA / UBER / RAPIDO</b> - లో వచ్చే వారు KANTA అని టైపు చేసి KANTA
            SRINIVAS NAGAR BANK COLONY - SELECT చేయవలెను
          </Typography>
          <Typography variant="subtitle1" textAlign="center">
            <b>సొంత వాహనంలో</b> వచ్చేవారు క్రింద ఇచ్చిన లింక్ ను మప్స్ లో
            చూసుకొని రావలెను
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ marginTop: "2rem !important" }}
            onClick
          >
            <Link
              href="https://goo.gl/maps/UimQcML4ZDLjfmMa9"
              rel="location noreferrer"
              target="_blank"
            >
              <Button variant="outlined" color="success">
                <Location />
                &nbsp; Location
              </Button>
            </Link>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
}

export default App;
