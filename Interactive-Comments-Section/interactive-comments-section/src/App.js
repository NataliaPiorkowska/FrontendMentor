import "./App.css";
import CommentsComponent from "./components/comments/comments";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor:"#f5f6fa"
      }}
    >
    <CommentsComponent />
    </div>
  );
}
export default App;
