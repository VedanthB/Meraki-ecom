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
  Select,
  MenuItem,
} from "@material-ui/core";
import { useStyles } from "../../utils";

function CartItemsTable({ cartItems }) {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item._id}>
              <TableCell className={classes.cursor_pointer}>
                <NextLink href={`/product/${item.slug}`} passHref>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={60}
                    height={60}
                  />
                </NextLink>
              </TableCell>

              <TableCell className={classes.cursor_pointer}>
                <NextLink href={`/product/${item.slug}`} passHref>
                  <Typography>{item.name}</Typography>
                </NextLink>
              </TableCell>
              <TableCell align="right">
                <Select value={item.quantity}>
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <MenuItem key={x + 1} value={x + 1}>
                      {x + 1}
                    </MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell align="right">Rs.{item.price}</TableCell>
              <TableCell align="right" className={classes.cart_page_icon}>
                <i className="fa-solid fa-trash-can" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartItemsTable;
