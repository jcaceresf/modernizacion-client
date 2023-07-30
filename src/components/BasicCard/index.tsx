import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function BasicCard({
  main,
  caption,
  topic,
  body,
}: {
  main: string;
  caption: string;
  topic: string;
  body: string;
}) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {topic}
        </Typography>
        <Typography variant="h5" component="div">
          {main}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {caption}
        </Typography>
        <Typography variant="body2">{body}</Typography>
      </CardContent>
    </Card>
  );
}
