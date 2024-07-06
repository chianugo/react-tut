import ListGroup from "./components/ListGroup";

function App() {
  let cities = ["Lagos", "Benin", "Port Harcourt", "Zaria"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={cities}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
