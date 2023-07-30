import { useEffect, useContext } from "react";
import { CurrentUserContext } from "../../contexts/currentUserContext";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import signOutService from "../../services/signOut";
import { toast } from "react-hot-toast";
import BasicCard from "../../components/BasicCard";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { user, setUser } = useContext(CurrentUserContext);

  const handleLogout = async () => {
    try {
      const response = await signOutService.signOut();

      if (response?.status === 200) {
        toast.success(`${response.data.message}`);
        setUser(null);
        navigate("/");
      } else {
        toast.error(`${response?.data.message}`);
      }
    } catch (e) {
      if (e instanceof Error && e.message) {
        toast.error(e.message);
      }
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit" onClick={handleLogout}>
            Log out
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <h1>Dashboard</h1>
        <BasicCard
          main={user?.username}
          topic={user?.roles.join(", ")}
          caption={user?.email}
          body="
          Welcome! This exclusive web UI card is displayed on protected routes, accessible only for users with httpOnly cookies. Enjoy the enhanced experience tailored just for you!"
        />
      </Container>
    </>
  );
};

export default DashboardPage;
