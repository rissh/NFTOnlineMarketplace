import "./App.css";
import Header from "./components/Header";
import PunkCard from "./components/PunkCard";
import { useState, useEffect } from "react";
import axios from "axios";
import PunkList from "./components/PunkList";
import MainPunk from "./components/MainPunk";

function App() {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?order_direction=asc&asset_contract_address=0x4980B867Fd429B0a17A4eBb359369B7d93dBcAAc"
      );
      console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);
  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <MainPunk punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
