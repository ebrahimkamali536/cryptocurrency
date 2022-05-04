import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { CryptoContext } from "../context/CryptoContextProvider";

import { SingleCoin } from "../services/api";

const CoinDescription = () => {
  const [coin, setCoin] = useState();
  const { id } = useParams();
  const { currency, symbol } = useContext(CryptoContext);

  const fetchCoin = async () => {
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data);
  };

  useEffect(() => {
    fetchCoin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);
  return (
    <>
      <img src={coin.image.large} alt={coin.name} className="w-40 mb-4" />
      <div className="mb-4 lg:mb-10">
        <div className="flex items-center justify-center lg:mb-10">
          <h2 className="font-bold text-white text-3xl text-center mb-4">
            {coin.name}
          </h2>
        </div>
        <p
          className="text-gray-400"
          dangerouslySetInnerHTML={{
            __html: coin.description.en.split(". ")[0],
          }}
        ></p>
      </div>
      <div className="w-full">
        <p className="text-white font-bold text-xl mb-2 lg:mb-8">
          Rank:{" "}
          <span className="text-gray-300 font-medium">
            {coin.market_cap_rank}
          </span>
        </p>
        <p className="text-white font-bold text-xl mb-2 lg:mb-8">
          Current Price:{" "}
          <span className="text-gray-300 font-medium">
            {symbol}{" "}
            {coin.market_data.current_price[
              currency.toLowerCase()
            ].toLocaleString()}
          </span>
        </p>
        <p className="text-white font-bold text-xl mb-2 lg:mb-8">
          Market Cap:{" "}
          <span className="text-gray-300 font-medium">
            {symbol}{" "}
            {coin.market_data.market_cap[
              currency.toLowerCase()
            ].toLocaleString()}
          </span>
        </p>
      </div>
    </>
  );
};

export default CoinDescription;
