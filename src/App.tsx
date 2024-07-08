import { useState } from "react";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Port Harcourt", "Onitsha", "Ibadan", "Lagos"];

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={() => {}}
      ></ListGroup>
    </div>
  );
}

export default App;
