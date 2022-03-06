import { Route, Switch } from "react-router";

import Header from "./components/Header";
import Experience from "./pages/Experience";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectsPage";

function App() {
  return (
    <main className="App">
      <div className="main__layer"></div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/projects" component={ProjectPage} />
        <Route path="/experience" component={Experience} />
      </Switch>
    </main>
  );
}

export default App;
