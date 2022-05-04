import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

//api
import { CoinList } from "../services/api";

//context
import { CryptoContext } from "../context/CryptoContextProvider";

//component
import Table from "./Table";
import Loader from "./shared/Loader";

const CoinsTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const { currency } = useContext(CryptoContext);

  const fetchCoins = async () => {
    setLoading(true);
    const { data } = await axios.get(CoinList(currency));
    setCoins(data);
    setLoading(false);
  };
  const filterCoins = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(search.toLowerCase())
    );
  };

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);

  return (
    <div className="text-center p-4 w-full mx-auto">
      <h3 className="text-white font-medium sm:text-3xl mb-5">
        Cryptocurrency Price by Market Cap
      </h3>

      <input
        type="text"
        placeholder="Search Coin..."
        className="w-full md:w-3/4 text-gray-400 rounded-md outline-none p-1.5 bg-transparent border border-gray-500"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {loading ? <Loader /> : <Table data={filterCoins()} />}
    </div>
  );
};

export default CoinsTable;
