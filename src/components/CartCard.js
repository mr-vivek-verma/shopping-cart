import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Rating from "@mui/material/Rating";
// import { cards } from "../components/Cards";
// import { data } from "../data";

export default function CartCard(props) {
  const { cartdata } = props;
  console.log(cartdata);
  return (
    <Card sx={{ display: "flex" }}>
      <CardContent>
        <>
          <img src={cartdata.coverImg} alt="img" className="card--image" />
          <div className="card--stats">
            <Rating name="size-medium" defaultValue={3} />
            <span className="gray">({cartdata.stats.reviewCount}) • </span>
            <span className="gray">{cartdata.location}</span>
          </div>
          <Typography gutterBottom variant="h5" component="div">
            {cartdata.title}
          </Typography>

          <p className="card--description">{cartdata.description}</p>
        </>
        <Box sx={{ display: "flex", alignItems: "center", pl: 2, pb: 30 }}>
          <IconButton aria-label="sub">{<RemoveIcon />}</IconButton>
          <p className="card--price">
            <span className="bold"> ${cartdata.price}</span>
          </p>
          <IconButton aria-label="add">{<AddIcon />}</IconButton>
          <Button variant="contained" color="primary">
            Remove Cart
            <ShoppingCartIcon />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
