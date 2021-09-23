import { Route, Switch } from "react-router";

import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectsPage";

function App() {
  return (
    <main className="App">
      <div className="main__layer"></div>
      <Header />
      <Switch>
        <Route path="/projects" component={ProjectPage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </main>
  );
}

export default App;
