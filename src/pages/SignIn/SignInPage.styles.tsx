import Grid from "@mui/material/Grid";
import Banner from "./img/banner.jpg";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export const Container = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => (
  <Grid container component="main" sx={{ height: "100vh" }}>
    {children}
  </Grid>
);

export const FormContainer = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => (
  <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
    <Box
      sx={{
        my: 8,
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {children}
    </Box>
  </Grid>
);

export const FormGroup = ({
  handleSubmit,
  children,
}: {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  children: JSX.Element[] | JSX.Element;
}) => (
  <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
    {children}
  </Box>
);

export const MainButton = ({ children }: { children: string }) => (
  <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
    {children}
  </Button>
);

export const MainImage = () => (
  <Grid
    item
    xs={false}
    sm={4}
    md={7}
    sx={{
      background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${Banner})`,
      backgroundRepeat: "no-repeat",
      backgroundColor: (t) =>
        t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
      backgroundSize: "cover",
      backgroundPosition: "top",
    }}
  />
);
