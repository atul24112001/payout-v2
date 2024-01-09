import { useMemo } from "react";
import PaymentHeader from "./component/Header";
import PaymentBody from "./component/Body";

export default function Payment() {
  const cards = useMemo(() => {
    return [
      {
        title: "Online Orders",
        quantity: 241,
      },
      {
        title: "Amount received",
        quantity: 2392312.19,
        unit: "₹",
      },
    ];
  }, []);

  return (
    <div>
      <PaymentHeader cards={cards} />
      <PaymentBody />
    </div>
  );
}
