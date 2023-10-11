import Offers from "./components/home/Offers";
import ServicesParent from "./components/home/Services/ServicesParent";
import BigScreen from "./components/home/bigScreen";
import Deals from "./components/home/Deals";
import OtherOffers from "./components/home/OtherOffers";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <>
        <Layout active={true}>
          <div className="home">
            <BigScreen />
            <Offers />
            <ServicesParent />
            <Deals />
            <OtherOffers />
          </div>
        </Layout>
      </>
    </Provider>
  );
}

export default App;
