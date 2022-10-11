import React from "react";
import { Grid } from "@material-ui/core";
import AdminCard from "./AdminCard";
import { useStyles } from "../../../utils";

function AdminCardGrid({ summary }) {
  const classes = useStyles();
  return (
    <Grid className={classes.admin_card_grid} container spacing={5}>
      <Grid item md={3}>
        <AdminCard
          title={`Rs.${summary.ordersPrice}`}
          category="Sales"
          link="view sales"
          href="/admin/orders"
        />
      </Grid>
      <Grid item md={3}>
        <AdminCard
          title={summary.ordersCount}
          category="Orders"
          link="view orders"
          href="/admin/orders"
        />
      </Grid>
      <Grid item md={3}>
        <AdminCard
          title={summary.productsCount}
          category="Products"
          link="view products"
          href="/admin/products"
        />
      </Grid>
      <Grid item md={3}>
        <AdminCard
          title={summary.usersCount}
          category="Users"
          link="view users"
          href="/admin/users"
        />
      </Grid>
    </Grid>
  );
}

export default AdminCardGrid;
