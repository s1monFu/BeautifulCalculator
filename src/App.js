import Bar from "./component/Bar";
import Calculator from "./component/Calculator";

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Bar />
        <div
          className="App"
          style={{
            width: "100vw",
            height: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Calculator />
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
