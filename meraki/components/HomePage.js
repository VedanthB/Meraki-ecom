import NextLink from "next/link";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { data, useStyles } from "../utils";

export default function HomePage() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={2}>
        {data.products.map((product) => (
          <Grid item md={3} key={product.name}>
            <Card className={classes.home_page_card}>
              <NextLink href={`/product/${product.slug}`} passHref>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    image={product.image}
                    title={product.name}
                    className={classes.home_page_card_img}
                  />
                  <CardContent className={classes.home_page__card_details}>
                    <Typography>{product.name}</Typography>
                    <Typography>{product.brand}</Typography>
                    <Typography>Rs.{product.price}</Typography>
                  </CardContent>
                </CardActionArea>
              </NextLink>
              <CardActions className={classes.home_page_btn_container}>
                <Button
                  size="small"
                  color="primary"
                  className={classes.home_page_card_btn}
                >
                  Add to cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
