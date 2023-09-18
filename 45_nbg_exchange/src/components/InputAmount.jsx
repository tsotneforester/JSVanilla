import React from "react";
import styled from "styled-components";
import { root } from "../theme";
import { NumericFormat } from "react-number-format";

function InputAmount({ amount, setAmount, setAmountStr }) {
  return (
    <Input
      value={amount}
      thousandSeparator={" "} // Use a comma as a thousand separator
      decimalScale={2} // Display up to 2 decimal places
      allowNegative={false} // Do not allow negative numbers
      onValueChange={(values) => {
        console.log(values);
        setAmount(values.formattedValue);
        setAmountStr(values.floatValue);
      }}
    />
  );
}

export default InputAmount;

const Input = styled(NumericFormat)`
  //width: 100%;
  font-weight: 600;
  text-align: center;
  padding: 2px 10px;
  border: none;
  font-size: 18px;
  color: inherit;
  min-width: 0;
  background-color: ${(prop) => prop.theme.body};
  transition: background-color ${root.animation_time};
`;
