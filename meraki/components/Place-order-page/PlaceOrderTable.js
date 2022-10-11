import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import {
  TableContainer,
  Table,
  Typography,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@material-ui/core";
import { useStyles } from "../../utils";
import { useStore } from "../../context";

function PlaceOrderTable() {
  const classes = useStyles();
  const { state } = useStore();
  const {
    cart: { cartItems },
  } = state;
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.table_headings}>Item</TableCell>
            <TableCell align="center" className={classes.table_headings}>
              Quantity
            </TableCell>
            <TableCell align="center" className={classes.table_headings}>
              Price
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item._id}>
              <TableCell>
                <NextLink href={`/product/${item.slug}`} passHref>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                    <Typography className={classes.table_headings}>
                      {item.name}
                    </Typography>
                  </div>
                </NextLink>
              </TableCell>
              <TableCell align="center" className={classes.table_headings}>
                <Typography>{item.quantity}</Typography>
              </TableCell>
              <TableCell align="center" className={classes.table_headings}>
                <Typography>Rs.{item.price}</Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PlaceOrderTable;
