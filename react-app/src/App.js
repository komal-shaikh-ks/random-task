import React from "react";
import A from "./A";

import { PersonProvider } from "./personContext";

function App() {
  return (
    <PersonProvider value="KOMAL">
      <A/>
    </PersonProvider>
  );
}

export default App;