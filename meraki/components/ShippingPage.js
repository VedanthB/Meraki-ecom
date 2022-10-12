import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import Cookies from "js-cookie";
import useStyles from "../utils/styles";
import { useStore } from "../context";
import CheckoutWizard from "./CheckoutWizard";

export default function ShippingPage() {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const router = useRouter();
  const { state, dispatch } = useStore();
  const {
    userInfo,
    cart: { shippingAddress },
  } = state;

  useEffect(() => {
    if (!userInfo) {
      router.push("/login?redirect=/shipping");
    }
    setValue("fullName", shippingAddress?.fullName);
    setValue("address", shippingAddress?.address);
    setValue("city", shippingAddress?.city);
    setValue("postalCode", shippingAddress?.postalCode);
    setValue("country", shippingAddress?.country);
  }, []);

  const classes = useStyles();

  const submitHandler = ({ fullName, address, city, postalCode, country }) => {
    dispatch({
      type: "SAVE_SHIPPING_ADDRESS",
      payload: { fullName, address, city, postalCode, country },
    });

    Cookies.set(
      "shippingAddress",
      JSON.stringify({
        fullName,
        address,
        city,
        postalCode,
        country,
      }),
    );

    router.push("/payment");
  };
  return (
    <div title="Shipping Address">
      <CheckoutWizard activeStep={0} />
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
          <Typography component="h1" variant="h1">
            Shipping Address
          </Typography>
          <List>
            <ListItem>
              <Controller
                name="fullName"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="fullName"
                    label="Full Name"
                    error={Boolean(errors.fullName)}
                    helperText={
                      errors.fullName
                        ? errors.fullName.type === "minLength"
                          ? "Full Name must be more than 1 character"
                          : "Full Name is required"
                        : ""
                    }
                    {...field}
                  />
                )}
              />
            </ListItem>
            <ListItem>
              <Controller
                name="address"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="address"
                    label="Address"
                    error={Boolean(errors.address)}
                    helperText={
                      errors.address
                        ? errors.address.type === "minLength"
                          ? "Address must be more than 1 character"
                          : "Address is required"
                        : ""
                    }
                    {...field}
                  />
                )}
              />
            </ListItem>
            <ListItem>
              <Controller
                name="city"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="city"
                    label="City"
                    error={Boolean(errors.city)}
                    helperText={
                      errors.city
                        ? errors.city.type === "minLength"
                          ? "City must be more than 1 character"
                          : "City is required"
                        : ""
                    }
                    {...field}
                  />
                )}
              />
            </ListItem>
            <ListItem>
              <Controller
                name="postalCode"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="postalCode"
                    label="Postal Code"
                    error={Boolean(errors.postalCode)}
                    helperText={
                      errors.postalCode
                        ? errors.postalCode.type === "minLength"
                          ? "Postal Code must be more than 1 character"
                          : "Postal Code is required"
                        : ""
                    }
                    {...field}
                  />
                )}
              />
            </ListItem>
            <ListItem>
              <Controller
                name="country"
                control={control}
                defaultValue=""
                rules={{
                  required: true,
                  minLength: 2,
                }}
                render={({ field }) => (
                  <TextField
                    variant="outlined"
                    fullWidth
                    id="country"
                    label="Country"
                    error={Boolean(errors.country)}
                    helperText={
                      errors.country
                        ? errors.country.type === "minLength"
                          ? "Country must be more than 1 character"
                          : "Country is required"
                        : ""
                    }
                    {...field}
                  />
                )}
              />
            </ListItem>
            <ListItem>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                color="primary"
              >
                Continue
              </Button>
            </ListItem>
          </List>
        </form>
      </div>
    </div>
  );
}
