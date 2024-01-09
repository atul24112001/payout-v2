import React, { useMemo, useState } from "react";
import Button from "./Button";
import ChevronRight from "../../assets/icons/ChevronRight";
import ChevronLeft from "../../assets/icons/ChevronLeft";

type Row = {
  title: string;
  id: string;
};

type Props = {
  headers: Row[];
  data: { [key: string]: string | number }[];
  links: { [key: string]: (v: string | number) => void };
};

export default function Table({ headers, data, links }: Props) {
  const [currentPage, setCurrentPage] = useState(1);

  const finalData = useMemo(() => {
    const arr = [];
    const start = (currentPage - 1) * 20;

    for (let i = start; i < start + 20; i++) {
      arr.push(data[i]);
    }
    return arr;
  }, [currentPage, data.length]);

  const totalPages = useMemo(() => {
    return Math.ceil(data.length / 20);
  }, [data.length]);

  return (
    <div className="bg-secondary-background rounded-lg">
      <div className="flex bg-third-background px-3 py-[10px] rounded-lg">
        {headers.map((col, index) => {
          // if()
          return (
            <div
              className={`flex-1 text-sm font-medium ${
                index + 1 == headers.length ? "text-right" : ""
              }`}
              key={col.id}
            >
              {col.title}
            </div>
          );
        })}
      </div>
      <div className="px-2 mb-6">
        {data.length == 0 ? (
          <div className="text-center text-third text-sm py-2">No data</div>
        ) : (
          finalData.map((row) => {
            return (
              <div className="flex border-0 border-b-[1px] border-solid border-primary-border">
                {row &&
                  headers.map((header, index) => {
                    return (
                      <div
                        onClick={() => {
                          if (links[header.id]) {
                            links[header.id](row[header.id]);
                          }
                        }}
                        className={`flex-1 p-3 text-[14px] ${
                          index + 1 == headers.length ? "text-right" : ""
                        } ${
                          links[header.id]
                            ? "text-[#146EB4] cursor-pointer hover:underline"
                            : ""
                        }`}
                        key={row.id}
                      >
                        {row[header.id]}
                      </div>
                    );
                  })}
              </div>
            );
          })
        )}
      </div>
      <div className="flex items-center gap-6 justify-center">
        <Button
          onClick={() => {
            setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
          }}
          addOnLeft={<ChevronLeft width={18} />}
        >
          Previous
        </Button>
        <div className="flex gap-1">
          {Array(totalPages)
            .fill(0)
            .map((_, index) => {
              if (
                index < totalPages - 5 &&
                index > 5 &&
                index + 1 != currentPage
              ) {
                return <div>.</div>;
              }
              return (
                <div
                  onClick={() => setCurrentPage(index + 1)}
                  className={`w-7 h-7 flex justify-center items-center cursor-pointer rounded ${
                    currentPage == index + 1 ? "bg-[#146EB4] text-white" : ""
                  }`}
                >
                  {index + 1}
                </div>
              );
            })}
        </div>
        <Button
          onClick={() => {
            setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev));
          }}
          addOnLeft={<ChevronRight width={18} />}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
