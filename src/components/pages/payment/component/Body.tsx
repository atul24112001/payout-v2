import { useMemo, useState } from "react";
import Table from "../../../helper/Table";
import DownloadIcon from "../../../../assets/icons/Download";
import Button from "../../../helper/Button";
import SearchIcon from "../../../../assets/icons/Search";
import SortIcon from "../../../../assets/icons/Sort";

const months = [
  "Jan",
  "Fab",
  "Mar",
  "Apr",
  "May",
  "June",
  "Jly",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export default function PaymentBody() {
  const [searchText, setSearchText] = useState("");

  const headers = useMemo(() => {
    return [
      {
        id: "orderId",
        title: "Order Id",
      },
      {
        id: "orderDate",
        title: "Order Date",
      },
      {
        id: "orderAmount",
        title: "Order Amount",
      },
      {
        id: "transactionFees",
        title: "Transaction fees",
      },
    ];
  }, []);

  const data = useMemo(() => {
    const finalData = [];

    const date = new Date();

    for (let i: number = 0; i < 242; i++) {
      finalData.push({
        orderId: "#" + 1000 + i,
        orderDate: `${date.getDate()} ${
          months[date.getMonth()]
        } ${date.getFullYear()}`,
        orderAmount: `₹${(Math.random() * 1000).toFixed(2)}`,
        transactionFees: `₹22`,
      });
    }

    return finalData;
  }, []);

  return (
    <div>
      <div className="text-[20px] font-medium mb-5">
        Transactions | This Month{" "}
      </div>
      <div className="p-3 bg-white rounded-lg">
        <div className="flex justify-between items-center mb-2  gap-2 ">
          <div className="border-[1px] border-solid border-primary-border px-4 py-[10px] rounded-md flex gap-2 items-center">
            <SearchIcon />
            <input
              placeholder="Search by order ID.."
              className=" focus:outline-0"
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
          </div>

          <div className="flex-1"></div>
          <Button addOnRight={<SortIcon />} onClick={() => {}}>
            Sort
          </Button>
          <Button onClick={() => {}}>
            <DownloadIcon />
          </Button>
        </div>
        <Table
          links={{
            orderId: () => {},
          }}
          data={data.filter((o) => o.orderId.includes(searchText))}
          headers={headers}
        />
      </div>
    </div>
  );
}
