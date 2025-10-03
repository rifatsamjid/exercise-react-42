import { Suspense } from "react";
import "./App.css";
import NavBar from "./assets/component/NavBar/NavBar";
import PricingOption from "./assets/component/PricingOption/PricingOption";

const pricingPromise = fetch("pricingData.json").then((res) => res.json());

function App() {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <PricingOption pricingPromise={pricingPromise}></PricingOption>
        </Suspense>
      </main>
    </>
  );
}

export default App;
