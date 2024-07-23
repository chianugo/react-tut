import Button from "./components/Button";
import "./components/Button/Button.module.css";

function App() {
  return (
    <div>
      <Button
        onClick={() => {
          console.log("hello");
        }}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
