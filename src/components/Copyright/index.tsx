import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Copyright = () => {
  return (
    <>
      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 5 }}
      >
        {"Copyright © "}
        <Link color="inherit" href="https://sistemas.uniandes.edu.co/es/miso">
          (MISO - UniAndes)
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
      <Typography variant="body2" color="text.secondary" align="center">
        Experimento para 'Modernización de Software'
      </Typography>
    </>
  );
};

export default Copyright;
