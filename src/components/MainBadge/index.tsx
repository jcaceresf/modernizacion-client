import Avatar from "@mui/material/Avatar";

const MainBadge = ({ children }: { children: JSX.Element[] | JSX.Element }) => (
  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>{children}</Avatar>
);

export default MainBadge;
