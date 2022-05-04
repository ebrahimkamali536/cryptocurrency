import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AliceCarousel from "react-alice-carousel";
//context
import { CryptoContext } from "../../context/CryptoContextProvider";

//api
import { TrendingCoins } from "../../services/api";

const Carousel = () => {
  const [trendingCoin, setTrendingCoin] = useState([]);
  const { currency, symbol } = useContext(CryptoContext);
  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrendingCoin(data);
  };
  useEffect(() => {
    fetchTrendingCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);
  const items = trendingCoin.map((coin) => {
    let profit = coin.price_change_percentage_24h >= 0;

    return (
      <Link to={`/coins/${coin.id}`} className="flex flex-col items-center">
        <img src={coin.image} alt={coin.name} className="mb-2.5 h-20" />

        <span className="text-sm mb-1">
          <span className="text-white mr-2">{coin.name}</span>
          <span className={profit ? "text-green-500" : "text-red-500"}>
            {profit && "+"}
            {coin.price_change_percentage_24h.toFixed(2)}
          </span>
        </span>

        <span className="text-xl font-medium text-gray-300">
          {symbol}{coin.current_price.toFixed(2)}
        </span>
      </Link>
    );
  });

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
    768: {
        items: 5,
    }
  };

  return (
    <div className="h-1/2">
      <AliceCarousel
        infinite
        autoPlayInterval={1500}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
        autoPlay
        mouseTracking
      />
    </div>
  );
};

export default Carousel;
