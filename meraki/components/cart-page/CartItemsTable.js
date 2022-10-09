/* eslint-disable no-alert */
import React from "react";
import NextLink from "next/link";
import Image from "next/image";
import axios from "axios";
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
  Button,
} from "@material-ui/core";
import { useStyles } from "../../utils";
import { useStore } from "../../context";

function CartItemsTable({ cartItems }) {
  const { dispatch } = useStore();

  const updateCartHandler = async (item, quantity) => {
    const { data } = await axios.get(`/api/products/${item._id}`);
    if (data.countInStock < quantity) {
      window.alert("Sorry. Product is out of stock");
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...item, quantity } });
  };
  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const classes = useStyles();
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Item</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {cartItems.map((item) => (
            <TableRow key={item._id}>
              <TableCell className={classes.cursor_pointer}>
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
                      width={60}
                      height={60}
                    />
                    <Typography>{item.name}</Typography>
                  </div>
                </NextLink>
              </TableCell>
              <TableCell align="center">
                <Select
                  value={item.quantity}
                  onChange={(e) => updateCartHandler(item, e.target.value)}
                >
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <MenuItem key={x + 1} value={x + 1}>
                      {x + 1}
                    </MenuItem>
                  ))}
                </Select>
              </TableCell>
              <TableCell align="center">Rs.{item.price}</TableCell>
              <TableCell align="center">
                <Button
                  onClick={() => removeItemHandler(item)}
                  className={classes.cart_page_icon}
                >
                  <i className="fa-solid fa-trash-can" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CartItemsTable;
