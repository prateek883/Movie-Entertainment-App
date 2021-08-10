import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNav from "./components/MainNav"

function App() {
  return (
    <>
      <Header />
      <div className="app"></div>
      <SimpleBottomNav/>
    </>
  );
}

export default App;
