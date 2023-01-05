import Form from "./components/form/form";

import data from "./data/db.json";

function App() {
  return (
    <div className="App">
      <Form items={data.items} />
    </div>
  );
}

export default App;
