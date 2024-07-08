import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        Hello <strong>Typescript</strong>
      </Alert>
      <Button color="primary" onClick={() => console.log("clicked")}>
        Primary Button
      </Button>
    </div>
  );
}

export default App;
