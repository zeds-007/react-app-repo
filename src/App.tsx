import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let states = ["New York", "California", "Texas", "Connecticut", "Florida"];
  let cities = ["New York", "San Francisco", "Dallas", "Bridgeport", "Miami"];

  const [showAlert, setShowAlert] = useState(false);

  function handleSelectItem(item: string) {
    console.log(item);
  }

  return (
    <div>
      {showAlert && <Alert onClose={() => setShowAlert(false)}>My Alert</Alert>}
      <Button onClick={() => setShowAlert(true)}>Alert</Button>
      <Button color="light" onClick={() => console.log("Light button clicked")}>
        Light
      </Button>
      <Button color="dark" onClick={() => console.log("Dark button clicked")}>
        Dark
      </Button>
      <ListGroup
        items={states}
        heading="States"
        handleSelectItem={handleSelectItem}
      />
      <ListGroup
        items={cities}
        heading="Cities"
        handleSelectItem={handleSelectItem}
      />
      <Alert>
        This is an alert <strong>message !!!</strong>
      </Alert>
    </div>
  );
}

export default App;
