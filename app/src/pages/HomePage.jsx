import React from "react";
import Offers from "../components/home/Offers";
import ServicesParent from "../components/home/Services/ServicesParent";
import BigScreen from "../components/home/bigScreen";
import Deals from "../components/home/Deals";
import OtherOffers from "../components/home/OtherOffers";
import Layout from "../components/Layout/Layout";
import AUTH from "../components/AUTH";

export default function Home() {
  return (
    <>
      <AUTH type={"home"}>
        <Layout active={true}>
          <div className="home">
            <BigScreen />
            <Offers />
            <ServicesParent />
            <Deals />
            <OtherOffers />
          </div>
        </Layout>
      </AUTH>
    </>
  );
}
