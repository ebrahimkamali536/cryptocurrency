import React, { useState } from "react";
import millify from "millify";

import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

const Table = ({ data }) => {
  const [pageNumber, setPageNumber] = useState(0);

  const dataPerPage = 10;
  const pagesVisited = pageNumber * dataPerPage;

  const pageCount = Math.ceil(data.length / dataPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <table className="w-full mx-auto md:w-3/4 my-6 overflow-hidden">
        <thead className="bg-yellow-500">
          <tr>
            <th className="text-xs md:text-base font-bold text-gray-900 px-2 md:px-6 py-4 text-center md:text-left">
              Coin
            </th>
            <th className="text-xs md:text-base font-bold text-gray-900 px-2 md:px-6 py-4 text-center md:text-left">
              Price
            </th>
            <th className="text-xs md:text-base font-bold text-gray-900 px-2 md:px-6 py-4 text-center md:text-left">
              24h
            </th>
            <th className="text-xs md:text-base font-bold text-gray-900 px-2 md:px-6 py-4 text-center md:text-left">
              Market Cap
            </th>
          </tr>
        </thead>
        <tbody>
          {data.slice(pagesVisited, pagesVisited + dataPerPage).map((coin) => (
            <tr
              key={coin.id}
              className="text-xs md:text-base border-b border-gray-700 transition duration-300 ease-in-out md:hover:bg-slate-700"
            >
              <td className="text-white px-1 md:px-6 py-4 text-center md:text-left flex items-center">
                <Link to={`/coins/${coin.id}`}>
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-5 mr-2 md:w-10"
                  />
                </Link>
                <Link to={`/coins/${coin.id}`}>
                  <span className="">{coin.name}</span>
                </Link>
              </td>
              <td className="text-white px-1 font-medium md:px-6 py-4 text-center md:text-left w-1/4">
                <Link to={`/coins/${coin.id}`}>
                  $ {coin.current_price.toFixed(2).toLocaleString()}
                </Link>
              </td>
              <td className="text-white px-1 md:px-6 py-4 text-center md:text-left w-1/4">
                <Link to={`/coins/${coin.id}`}>
                  {coin.market_cap_change_percentage_24h.toFixed(2)}
                </Link>
              </td>
              <td className="text-white px-1 font-medium md:px-6 py-4 text-center md:text-left w-1/4">
                <Link to={`/coins/${coin.id}`}>
                  $ {millify(coin.market_cap)}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ReactPaginate
        previousLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        }
        nextLabel={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        }
        pageCount={pageCount}
        onPageChange={changePage}
        className={"flex items-center justify-center mx-auto"}
        pageLinkClassName={"text-yellow-500 block py-1 px-3 font-medium"}
        activeLinkClassName={"bg-gray-600 rounded-full"}
        previousClassName={"text-yellow-500 mr-4 font-bold"}
        nextClassName={"text-yellow-500 mr-4 font-bold"}
        disabledClassName={"opacity-50"}
      />
    </>
  );
};

export default Table;
