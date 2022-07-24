import "./styles.css";
import { Greet } from "./components/Greet";

export default function App() {
  return (
    <div className="App">
      <Greet text="TypeScript" videoCount={3} />
    </div>
  );
}
