import Box from "@mui/material/Box";

export const FormContainer = ({
  children,
}: {
  children: JSX.Element[] | JSX.Element;
}) => (
  <Box
    sx={{
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {children}
  </Box>
);
