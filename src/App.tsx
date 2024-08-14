import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Like from "./components/Like";
const App = () => {
  const items = ["Delhi", "Mumbai", "Pune", "Kolkata"];
  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
      <ListGroup items={items} heading="Cities" />
      <Like onClick={() => console.log("clicked")} />
    </div>
  );
};

export default App;
