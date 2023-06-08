// https://stripe.com/docs/payments/payment-element
import { FC } from "react";

interface PaymentFormProps {
  string: string;
}
const PaymentForm: FC<PaymentFormProps> = ({ string }) => {
  return (
    <div>
      <div>PaymentForm</div>
    </div>
  );
};

export default PaymentForm;

/*** Notes ***
 * Notes go here.
 */
