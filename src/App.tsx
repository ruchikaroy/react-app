import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  const [alertVisibility, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
};

export default App;
