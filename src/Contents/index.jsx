import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const Contents = () => (
  <Stack spacing={4}>
    <Typography
      variant="h2"
      sx={{
        fontFamily: "'Dancing Script', cursive"
      }}
    >Bindu & Chandu</Typography>
    <Typography>Dec</Typography>
    <Stack direction="row" spacing={2}>
      <Typography>Saturday</Typography>
      <Typography>03</Typography>
      <Typography>At 2 PM</Typography>
    </Stack>
    <Typography>2022</Typography>
  </Stack>
)

export default Contents;