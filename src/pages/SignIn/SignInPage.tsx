import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import {
  Container,
  FormContainer,
  FormGroup,
  MainButton,
  MainImage,
} from "./SignInPage.styles";
import signInService from "../../services/signIn";
import { toast } from "react-hot-toast";
import Copyright from "../../components/Copyright";
import MainBadge from "../../components/MainBadge";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/currentUserContext";

export default function SignInPage() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(CurrentUserContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const password = data.get("password");
    if (username && password) {
      try {
        const response = await signInService.signIn({
          username,
          password,
        });

        if (response?.status === 200) {
          toast.success(
            `Authenticated user with email ${response?.data.email}`
          );
          setUser(response.data);
          navigate("/dashboard");
        } else {
          toast.error(`${response?.data.message}`);
        }
      } catch (e) {
        if (e instanceof Error && e.message) {
          toast.error(e.message);
        }
      }
    } else {
      toast.error("Verify your credentials and try again.");
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <Container>
      <CssBaseline />
      <MainImage />
      <FormContainer>
        <MainBadge>
          <LockOutlinedIcon />
        </MainBadge>
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <FormGroup handleSubmit={handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <MainButton>Log in</MainButton>
          <Grid container>
            <Grid item>
              <NavLink to="/signup">
                <Typography variant="body2">
                  Don't have an account? Sign Up
                </Typography>
              </NavLink>
            </Grid>
          </Grid>
          <Copyright />
        </FormGroup>
      </FormContainer>
    </Container>
  );
}
