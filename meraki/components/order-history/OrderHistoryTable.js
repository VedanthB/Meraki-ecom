/* eslint-disable no-nested-ternary */
import React from "react";
import NextLink from "next/link";
import {
  CircularProgress,
  List,
  ListItem,
  TableContainer,
  Typography,
  Card,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@material-ui/core";
import { useStyles } from "../../utils";

function OrderHistoryTable({ loading, error, orders }) {
  const classes = useStyles();
  return (
    <Card className={classes.order_history_cards}>
      <List>
        <ListItem>
          <Typography component="h2" variant="h2">
            Order History
          </Typography>
        </ListItem>
        <ListItem>
          {loading ? (
            <CircularProgress />
          ) : error ? (
            <Typography className={classes.error}>{error}</Typography>
          ) : (
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell
                      align="center"
                      className={classes.table_headings}
                    >
                      ID
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_headings}
                    >
                      DATE
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_headings}
                    >
                      TOTAL
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_headings}
                    >
                      PAID
                    </TableCell>
                    <TableCell
                      align="center"
                      className={classes.table_headings}
                    >
                      DELIVERED
                    </TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order._id}>
                      <TableCell
                        align="center"
                        className={classes.table_headings}
                      >
                        {order._id.substring(20, 24)}
                      </TableCell>
                      <TableCell
                        align="center"
                        className={classes.table_headings}
                      >
                        {order.createdAt.substring(0, 10)}
                      </TableCell>
                      <TableCell
                        align="center"
                        className={classes.table_headings}
                      >
                        Rs.{order.totalPrice}
                      </TableCell>
                      <TableCell
                        align="center"
                        className={classes.table_headings}
                      >
                        {order.isPaid ? "paid" : "not paid"}
                      </TableCell>
                      <TableCell
                        align="center"
                        className={classes.table_headings}
                      >
                        {order.isDelivered ? "delivered" : "not delivered"}
                      </TableCell>
                      <TableCell align="center">
                        <NextLink href={`/order/${order._id}`} passHref>
                          <Button
                            variant="solid"
                            className={classes.btn_primary}
                          >
                            Details
                          </Button>
                        </NextLink>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </ListItem>
      </List>
    </Card>
  );
}

export default OrderHistoryTable;
