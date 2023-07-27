import { useContext } from "react";
import { DataContext } from "./dataContext/data";

import Header from "./components/header/header";
import Welcome from "./components/welcome/welcome";
import Skills from "./components/skills/skills";

function App() {
  const dataContext = useContext(DataContext);
  return (
    <div className="App">
      <Header data={dataContext.theme} />
      <Welcome dataContext={dataContext} />
      <Skills data={dataContext.skills} />
    </div>
  );
}

export default App;
