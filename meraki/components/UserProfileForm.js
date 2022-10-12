import React from "react";
import { Controller, useForm } from "react-hook-form";
import { List, ListItem, Button, TextField } from "@material-ui/core";
import { useStyles } from "../utils";
import { useStore } from "../context";

function UserProfileForm({ submitHandler }) {
  const classes = useStyles();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const {
    state: { userInfo },
  } = useStore();

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      className={classes.user_profile_form}
    >
      <List>
        <ListItem>
          <Controller
            name="name"
            control={control}
            defaultValue={userInfo?.name ? userInfo?.name : ""}
            rules={{
              required: true,
              minLength: 2,
            }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                id="name"
                label="Name"
                inputProps={{ type: "name" }}
                error={Boolean(errors.name)}
                helperText={
                  errors.name
                    ? errors.name.type === "minLength"
                      ? "Name length is more than 1"
                      : "Name is required"
                    : ""
                }
                {...field}
              />
            )}
          />
        </ListItem>
        <ListItem>
          <Controller
            name="email"
            control={control}
            defaultValue={userInfo?.email ? userInfo?.email : ""}
            rules={{
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email"
                inputProps={{ type: "email" }}
                error={Boolean(errors.email)}
                helperText={
                  errors.email
                    ? errors.email.type === "pattern"
                      ? "Email is not valid"
                      : "Email is required"
                    : ""
                }
                {...field}
              />
            )}
          />
        </ListItem>
        <ListItem>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              validate: (value) =>
                value === "" ||
                value.length > 5 ||
                "Password length is more than 5",
            }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                id="password"
                label="New Password"
                inputProps={{ type: "password" }}
                error={Boolean(errors.password)}
                helperText={
                  errors.password ? "Password length is more than 5" : ""
                }
                {...field}
              />
            )}
          />
        </ListItem>
        <ListItem>
          <Controller
            name="confirmPassword"
            control={control}
            defaultValue=""
            rules={{
              validate: (value) =>
                value === "" ||
                value.length > 5 ||
                "Confirm Password length is more than 5",
            }}
            render={({ field }) => (
              <TextField
                variant="outlined"
                fullWidth
                id="confirmPassword"
                label="Confirm New Password"
                inputProps={{ type: "password" }}
                error={Boolean(errors.confirmPassword)}
                helperText={
                  errors.password
                    ? "Confirm Password length is more than 5"
                    : ""
                }
                {...field}
              />
            )}
          />
        </ListItem>
        <ListItem>
          <Button variant="contained" type="submit" fullWidth color="primary">
            Update
          </Button>
        </ListItem>
      </List>
    </form>
  );
}

export default UserProfileForm;
