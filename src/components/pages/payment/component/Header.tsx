type Card = {
  title: string;
  quantity: number;
  unit?: string;
};

type Props = {
  cards: Card[];
};

export default function PaymentHeader({ cards }: Props) {
  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[20px]">Overview</h3>
        <div className="text-[16px] text-secondary">Last Month</div>
      </div>
      <div className="flex justify-between items-center mb-6  gap-5">
        {cards.map((card, index) => {
          return (
            <div
              key={`${index + 1}`}
              className="flex-1 bg-secondary-background p-5 rounded-lg"
            >
              <h4 className="text-[16px] text-third font-normal">
                {card.title}
              </h4>
              <p className="text-3xl font-medium mt-4">
                {card.unit}
                {card.quantity}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}
