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

function ProductsTable({ products, deleteHandler }) {
  const classes = useStyles();
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center" className={classes.table_headings}>
              ID
            </TableCell>
            <TableCell align="center" className={classes.table_headings}>
              NAME
            </TableCell>
            <TableCell align="center" className={classes.table_headings}>
              PRICE
            </TableCell>
            <TableCell align="center" className={classes.table_headings}>
              CATEGORY
            </TableCell>
            <TableCell align="center" className={classes.table_headings}>
              COUNT
            </TableCell>
            <TableCell align="center" className={classes.table_headings}>
              RATING
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product._id}>
              <TableCell className={classes.table_headings}>
                {product._id.substring(20, 24)}
              </TableCell>
              <TableCell align="center" className={classes.table_headings}>
                {product.name}
              </TableCell>
              <TableCell align="center" className={classes.table_headings}>
                Rs.{product.price}
              </TableCell>
              <TableCell align="center" className={classes.table_headings}>
                {product.category}
              </TableCell>
              <TableCell align="center" className={classes.table_headings}>
                {product.countInStock}
              </TableCell>
              <TableCell align="center" className={classes.table_headings}>
                {product.rating}
              </TableCell>
              <TableCell align="center">
                <NextLink href={`/admin/product/${product._id}`} passHref>
                  <Button className={classes.table_icons}>
                    <i className="fa-solid fa-pen-to-square" />
                  </Button>
                </NextLink>{" "}
                <Button
                  className={classes.table_icons}
                  onClick={() => deleteHandler(product._id)}
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

export default ProductsTable;
