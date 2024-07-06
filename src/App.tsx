import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["Lagos", "Benin", "Port Harcourt", "Zaria"];

  return (
    <div>
      <ListGroup items={cities} heading={"Cities"} />
    </div>
  );
}

export default App;
