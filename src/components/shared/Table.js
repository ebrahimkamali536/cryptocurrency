import React from "react";
import millify from "millify";

const Table = ({ data }) => {
  return (
    <table className="w-full mx-auto md:w-3/4 mt-8">
      <thead className="bg-yellow-500">
        <tr>
          <th className="text-xs md:text-base font-medium text-gray-900 px-2 md:px-6 py-4 text-center md:text-left">
            Coin
          </th>
          <th className="text-xs md:text-base font-medium text-gray-900 px-2 md:px-6 py-4 text-center md:text-left">
            Price
          </th>
          <th className="text-xs md:text-base font-medium text-gray-900 px-2 md:px-6 py-4 text-center md:text-left">
            24h
          </th>
          <th className="text-xs md:text-base font-medium text-gray-900 px-2 md:px-6 py-4 text-center md:text-left">
            Market Cap
          </th>
        </tr>
      </thead>
      <tbody>
        
        {data.map(coin => (
          <tr key={coin.id} className="text-xs md:text-base border-b border-gray-700 transition duration-300 ease-in-out md:hover:bg-slate-700">
            <td className="text-white px-1 md:px-6 py-4 text-center md:text-left flex items-center">
              <img src={coin.image} alt={coin.name} className="w-5 mr-2 md:w-10" />
              <span className="">{coin.name}</span>
            </td>
            <td className="text-white px-1 font-medium md:px-6 py-4 text-center md:text-left w-1/4">
              $ {coin.current_price.toFixed(2).toLocaleString()}
            </td>
            <td className="text-white px-1 md:px-6 py-4 text-center md:text-left w-1/4">
              {coin.market_cap_change_percentage_24h.toFixed(2)}
            </td>
            <td className="text-white px-1 font-medium md:px-6 py-4 text-center md:text-left w-1/4">
              $ {millify(coin.market_cap)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
