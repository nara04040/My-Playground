import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./styles/themes.css";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div>
        <h1>Playground</h1>
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
};

export default App;
