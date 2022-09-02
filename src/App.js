import Calculator from "./component/Calculator";
import Hello from "./component/Hello";
function App() {
  return (
    <div className="App" style={{"width": "100vw", "height": "100vh", "display": "flex", "justifyContent": "center", "alignItems": "center"}}>
      <Calculator/>
    </div>
  );
}

export default App;
