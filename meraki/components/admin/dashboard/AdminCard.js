import React from "react";
import NextLink from "next/link";
import {
  Typography,
  Card,
  Button,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { useStyles } from "../../../utils";

function AdminCards({ title, category, link, href }) {
  const classes = useStyles();
  return (
    <Card raised className={classes.admin_dashboard_cards}>
      <CardContent>
        <Typography variant="h1">{title}</Typography>
        <Typography>{category}</Typography>
      </CardContent>
      <CardActions>
        <NextLink href={href} passHref>
          <Button size="small" color="primary">
            {link}
          </Button>
        </NextLink>
      </CardActions>
    </Card>
  );
}

export default AdminCards;
