import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentsComponent from "./components/comments/comments";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
    <CommentsComponent />
    </div>
  );
}
export default App;
