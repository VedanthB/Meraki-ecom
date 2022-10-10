import { Step, StepLabel, Stepper } from "@material-ui/core";
import React from "react";
import { useStore } from "../context";
import { useStyles } from "../utils";

export default function CheckoutWizard({ activeStep = 0 }) {
  const classes = useStyles();
  const { state } = useStore();
  const { darkMode } = state;
  return darkMode ? (
    <Stepper
      activeStep={activeStep}
      alternativeLabel
      className={classes.dark_checkout_wizard}
    >
      {["Shipping Address", "Payment Method", "Place Order"].map((step) => (
        <Step key={step}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  ) : (
    <Stepper activeStep={activeStep} alternativeLabel>
      {["Shipping Address", "Payment Method", "Place Order"].map((step) => (
        <Step key={step}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  );
}
