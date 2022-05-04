import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { SingleCoin } from "../services/api";
import { CryptoContext } from "../context/CryptoContextProvider";

import CoinDescription from "../components/CoinDescription";
import CoinInfo from "../components/CoinInfo";
import Loader from "../components/shared/Loader";

const CoinPage = () => {
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

  if (!coin) return <Loader />;
  return (
    <div className="flex flex-col items-center justify-center lg:flex-row lg:mt-10 sm:px-4 py-8">
      <div className="flex flex-col items-center px-4 lg:w-2/3 xl:w-1/4 lg:border-r">
        <CoinDescription coin={coin} />
      </div>
      <div className="w-full lg:w-2/3 px-4 sm:px-7 mt-4 xl-w-3/4">
        <CoinInfo coin={coin} />
      </div>
    </div>
  );
};

export default CoinPage;
