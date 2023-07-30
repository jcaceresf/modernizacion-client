import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { FormContainer } from "./SignUpPage.styles";
import Copyright from "../../components/Copyright";
import MainBadge from "../../components/MainBadge";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import NativeSelect from "@mui/material/NativeSelect";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import signUpService from "../../services/signUp";
import { useContext, useEffect } from "react";
import { CurrentUserContext } from "../../contexts/currentUserContext";

export default function SignUpPage() {
  const navigate = useNavigate();
  const { user } = useContext(CurrentUserContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");
    const role = [data.get("role") ?? "user"];

    if (
      username &&
      password !== null &&
      String(password).length >= 6 &&
      email &&
      role
    ) {
      try {
        const response = await signUpService.signUp({
          username,
          password,
          email,
          role,
        });

        if (response?.status === 200) {
          toast.success(`${response.data.message}`);
          navigate("/");
        } else {
          toast.error(`${response?.data.message}`);
        }
      } catch (e) {
        if (e instanceof Error && e.message) {
          toast.error(e.message);
        }
      }
    } else {
      toast.error("Verify the provided info");
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, []);

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <FormContainer>
        <MainBadge>
          <LockOutlinedIcon />
        </MainBadge>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
              />
            </Grid>
            <Grid item xs={4}>
              <InputLabel htmlFor="user-role">Role</InputLabel>
              <NativeSelect
                defaultValue={"user"}
                inputProps={{
                  name: "role",
                  id: "user-role",
                }}
              >
                <option value={"user"}>User</option>
                <option value={"admin"}>Admin</option>
                <option value={"moderator"}>Moderator</option>
              </NativeSelect>
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                helperText="6 characters minimum"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <NavLink to="/">
                <Typography variant="body2">
                  Already have an account? Sign in
                </Typography>
              </NavLink>
            </Grid>
          </Grid>
        </Box>
      </FormContainer>
      <Copyright />
    </Container>
  );
}
