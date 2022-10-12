import React from "react";
import {
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import NextLink from "next/link";
import { useStyles } from "../../../utils";

function UserTable({ users, deleteHandler }) {
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
              EMAIL
            </TableCell>
            <TableCell align="center" className={classes.table_headings}>
              ADMIN
            </TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <TableCell align="center" className={classes.table_headings}>
                {user._id.substring(20, 24)}
              </TableCell>
              <TableCell align="center" className={classes.table_headings}>
                {user.name}
              </TableCell>
              <TableCell align="center" className={classes.table_headings}>
                {user.email}
              </TableCell>
              <TableCell align="center" className={classes.table_headings}>
                {user.isAdmin ? "YES" : "NO"}
              </TableCell>
              <TableCell align="center">
                <NextLink href={`/admin/product/${user._id}`} passHref>
                  <Button className={classes.table_icons}>
                    <i className="fa-solid fa-pen-to-square" />
                  </Button>
                </NextLink>{" "}
                <Button
                  className={classes.table_icons}
                  onClick={() => deleteHandler(user._id)}
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

export default UserTable;
