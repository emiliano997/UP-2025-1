import "./App.css";
import { Description } from "./components/Description";
import { Hero } from "./components/Hero";
import { Reviews } from "./components/Reviews";

function App() {
  return (
    <main>
      <Hero />

      <Description />

      <Reviews />
    </main>
  );
}

export default App;
