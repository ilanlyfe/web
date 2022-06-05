import { useState } from "react";
import Type from "../../../elements/Type";
// import Button from "@material-ui/core/Button";
// import ListColumn from "../../Bits/List/listcolumn";
import PaymentForm from "../../PaymentForm";

const Step2 = ({ handleStepChange }) => {
  const [points, setPoints] = useState(0);
  const [totalCost, setTotalCost] = useState(0);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  return (
    <div>
      <div>
        <Type variant="shout">How many points would you like?</Type>
      </div>
      <div>
        <Type variant="subtitle2">/years (2 years included)</Type>
      </div>
      <div x-data="{total_value:50}" className="max-w-screen-xl mx-auto ">
        <div className="flex justify-center">
          <div className="text-center">
            <Type variant="shout">{new Intl.NumberFormat().format(points)}</Type>
            <Type variant="base">{formatter.format(totalCost)}</Type>
          </div>
        </div>
        <input className="w-full" type="range" min={1} max={10000} step={1} onChange={(e) => handleTotalDueUpdate(e)} />
      </div>

      <div>{/* <ListColumn columns="1" items={data.features} /> */}</div>
      <div>Choose how much points you would like to purchase and we well match each one dollar for dollar when you plan your next trip. I know, its crazy!</div>
      <div>
        <Type variant="link" href="/get-points">
          Learn more
        </Type>
      </div>
      <div>
        <PaymentForm totalCost={totalCost} handleStepChange={handleStepChange} />
      </div>
    </div>
  );

  function handleTotalDueUpdate(e) {
    setPoints(e.target.value * 350);
    setTotalCost(e.target.value);
  }
};
export default Step2;
