import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MojaKomponent from "./components/comments/comments";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    <MojaKomponent />
    </div>
  );
}

export default App;
