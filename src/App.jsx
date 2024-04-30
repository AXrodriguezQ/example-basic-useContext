import Footer from "./components/Footer";
import Header from "./components/Header";
import InfoCard from "./components/InfoCard";
import TopBar from "./components/TopBar";
import StateComponent from "./context/StateComponent";

const App = () => {

  return (
      <StateComponent>
        <Header />
        <InfoCard />
        <TopBar />
        <Footer />
      </StateComponent>
  )
}

export default App