import "./App.css";
import CollectionCard from "./components/CollectionCard";
import Header from "./components/Header";
import nft from "./assets/nft4.jpeg";
import nft2 from "./assets/nft5.jpeg";
import nft3 from "./assets/nft3.jpeg";
import nft4 from "./assets/nft7.jpeg";
import nft5 from "./assets/nft8.jpeg";
import nft1 from "./assets/nft2.jpeg";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="list">
        <CollectionCard name={"Shawly Pirate"} image={nft} price={0.002} />
        <CollectionCard name={"Shawly Pirate"} image={nft2} price={0.002} />
        <CollectionCard name={"Shawly Pirate"} image={nft4} price={0.002} />
        <CollectionCard name={"Shawly Pirate"} image={nft} price={0.002} />
        <CollectionCard name={"Shawly Pirate"} image={nft3} price={0.002} />
        <CollectionCard name={"Shawly Pirate"} image={nft4} price={0.002} />
        <CollectionCard name={"Shawly Pirate"} image={nft2} price={0.002} />
        <CollectionCard name={"Shawly Pirate"} image={nft1} price={0.002} />
        <CollectionCard name={"Shawly Pirate"} image={nft3} price={0.002} />
        <CollectionCard name={"Shawly Pirate"} image={nft5} price={0.002} />
      </div>
    </div>
  );
}

export default App;
