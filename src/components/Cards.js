import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CartCard from "../components/CartCard";
import { data } from "../data";

export default function Cards(props) {
  const [show, setShow] = useState(false);
  const [cardData, setCardData] = useState(data);

  const handleClick = () => {
    setShow(true);
  };
  return (
    <>
      {!show ? (
        <>
          {" "}
          <Card sx={{ maxWidth: 430 }}>
            <CardMedia />
            <CardContent>
              <>
                <img
                  src={cardData.coverImg}
                  alt="img"
                  className="card--image"
                />
                <div className="card--stats">
                  <Rating name="size-medium" defaultValue={3} />
                  <span className="gray">
                    ({cardData.stats.reviewCount}) •{" "}
                  </span>
                  <span className="gray">{cardData.location}</span>
                </div>
                <Typography gutterBottom variant="h5" component="div">
                  {cardData.title}
                </Typography>
                <p className="card--price">
                  <span className="bold"> ${cardData.price}</span> / person
                </p>
                <p className="card--description">{cardData.description}</p>
              </>
            </CardContent>

            <Box
              m={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Button onClick={handleClick} variant="contained" color="primary">
                Add To Cart
                <ShoppingCartIcon />
              </Button>
            </Box>

            <CardActions>
              <Button size="small">Share</Button>
            </CardActions>
          </Card>
        </>
      ) : (
        <>
          {/* <h1>Cart Page</h1> */}
          <CartCard cartdata={cardData} />
        </>
      )}
    </>
  );
}
