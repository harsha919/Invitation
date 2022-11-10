import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

const Container1 = styled("div")({
  borderTop: "2px solid #FE036A",
  borderBottom: "2px solid #FE036A",
  "& > h5": {
    fontFamily: "'Anton', sans-serif",
  },
  height: "2..5rem",
});

const Container2 = styled("div")({
  "& > h5": { fontFamily: "'Caveat', cursive" }
});

const Contents = () => (
  <Stack spacing={2} alignItems="center">
    <Container2>
      <Typography variant="h5">
        Together with their families you are invited to wedding of
      </Typography>
    </Container2>
    <Typography
      variant="h2"
      sx={{
        fontFamily: "'Dancing Script', cursive"
      }}
    >Bindu & Chandu</Typography>
    <Stack direction="row" spacing={2} alignItems="center">
      <Container1> <Typography variant="h5">Saturday</Typography></Container1>
      <Stack alignItems="center" sx={{
        "& > h5": { fontFamily: "'Caveat', cursive" }
      }}>
        <Typography variant="h5">Dec</Typography>
        <Typography variant="h2" fontWeight={500}>03</Typography>
        <Typography variant="h5">2022</Typography>
      </Stack>
      <Container1><Typography variant="h5">At 2 PM</Typography></Container1>
    </Stack>
  </Stack>
)

export default Contents;