import { Container } from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNav from "./components/MainNav"
import Series from "./pages/Series/Series";
import Trending from "./pages/Trending/Trending";
import Movies from "./pages/Movies/Movies";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app"></div>

      <Container>
        <Switch>
          <Route path="/" component={Trending} exact/>
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/search" component={Search} />
        </Switch>
      </Container>
      <SimpleBottomNav/>
    </BrowserRouter>
  );
}

export default App;
