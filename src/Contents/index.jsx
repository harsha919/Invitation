import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import PlaceIcon from '@mui/icons-material/Place';
import Link from '@mui/material/Link';
import IconButton from "@mui/material/IconButton";

const Container1 = styled("div")({
  borderTop: "2px solid #FE036A",
  borderBottom: "2px solid #FE036A",
  "& > h5": {
    fontFamily: "'Anton', sans-serif",
    textAlign: "center",
  },
  height: "2..5rem",
});

const Container2 = styled("div")({
  "& > h5": { fontFamily: "'Caveat', cursive", textAlign: "center" }
});

const Contents = () => (
  <Stack spacing={2} alignItems="center">
    <Container2>
      <Typography variant="h5">
        Together with their families you are invited to wedding of
      </Typography>
    </Container2>
    <Typography
      variant="h3"
      sx={{
        fontFamily: "'Dancing Script', cursive",
        textAlign: "center",
      }}
    >Bindu</Typography>
    <Typography
      variant="h3"
      sx={{
        fontFamily: "'Dancing Script', cursive",
        textAlign: "center",
      }}
    >&</Typography>
    <Typography
      variant="h3"
      sx={{
        fontFamily: "'Dancing Script', cursive",
        textAlign: "center",
      }}
    >Chandu</Typography>
    <Stack direction="row" spacing={2} alignItems="center">
      <Container1> <Typography variant="h5">Saturday</Typography></Container1>
      <Stack alignItems="center" sx={{
        "& > h5": { fontFamily: "'Caveat', cursive" }
      }}>
        <Typography variant="h5">Dec</Typography>
        <Typography variant="h3" fontWeight={500}>03</Typography>
        <Typography variant="h5">2022</Typography>
      </Stack>
      <Container1><Typography variant="h5">At 2 PM</Typography></Container1>
    </Stack>
    <Container2 sx={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
      <Link href="https://goo.gl/maps/HCiMnmsKsJrjDBSbA" rel="location noreferrer" target="_blank">
        <IconButton aria-label="delete" size="small" color="primary">
          <PlaceIcon fontSize="inherit" />
        </IconButton>
      </Link>
      <Typography variant="h5">PR&SR theatre Road, Vetapalem</Typography>
    </Container2>
  </Stack>
)

export default Contents;