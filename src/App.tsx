import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("clicked")}>Primary Button</Button>
    </div>
  );
}

export default App;
