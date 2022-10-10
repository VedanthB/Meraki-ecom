import { Step, StepLabel, Stepper } from "@material-ui/core";
import React from "react";
import { useStyles } from "../utils";

export default function CheckoutWizard({ activeStep = 0 }) {
  const classes = useStyles();

  return (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      className={classes.transparent_backgroud}
    >
      {["Shipping Address", "Payment Method", "Place Order"].map((step) => (
        <Step key={step}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
