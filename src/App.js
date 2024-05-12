import { Route, Switch } from "react-router";

import Header from "./components/Header";
// import Experience from "./pages/Experience";
// import ExperienceDetails from "./pages/ExperienceDetails";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectsPage";
import ExperienceT from "./pages/ExperienceT";

function App() {
  return (
    <main className="App">
      <div className="main__layer"></div>
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/projects" component={ProjectPage} />

        <Route path="/experience" component={ExperienceT} />
        {/* <Route path="/experience/:companyName" component={ExperienceDetails} /> */}
      </Switch>
    </main>
  );
}

export default App;
