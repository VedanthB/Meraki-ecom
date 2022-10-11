import React from "react";
import NextLink from "next/link";
import {
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { useStyles } from "../../../utils";

function OrdersTable({ orders }) {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.table_headings} align="center">
              ID
            </TableCell>
            <TableCell className={classes.table_headings} align="center">
              USER
            </TableCell>
            <TableCell className={classes.table_headings} align="center">
              DATE
            </TableCell>
            <TableCell className={classes.table_headings} align="center">
              TOTAL
            </TableCell>
            <TableCell className={classes.table_headings} align="center">
              PAID
            </TableCell>
            <TableCell className={classes.table_headings} align="center">
              DELIVERED
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order._id}>
              <TableCell className={classes.table_headings} align="center">
                {order._id.substring(20, 24)}
              </TableCell>
              <TableCell className={classes.table_headings} align="center">
                {order.user ? order.user.name : "DELETED USER"}
              </TableCell>
              <TableCell className={classes.table_headings} align="center">
                {order.createdAt.substring(0, 10)}
              </TableCell>
              <TableCell className={classes.table_headings} align="center">
                Rs.{order.totalPrice}
              </TableCell>
              <TableCell className={classes.table_headings} align="center">
                {order.isPaid ? "paid" : "not paid"}
              </TableCell>
              <TableCell className={classes.table_headings} align="center">
                {order.isDelivered ? "delivered" : "not delivered"}
              </TableCell>
              <TableCell align="center">
                <NextLink href={`/order/${order._id}`} passHref>
                  <Button variant="contained" className={classes.btn_primary}>
                    Details
                  </Button>
                </NextLink>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrdersTable;
