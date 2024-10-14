import ThemeToggle from "./components/ThemeToggle";
import { AuthProvider } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import LoginPage from "./pages/LoginPage";
import "./styles/themes.css";
import "./styles/auth.css";
import { Routes, Route, BrowserRouter as Router, Link } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div>
          <h1>Playground</h1>
          <ThemeToggle />
        </div>
        <Router>
          <nav>
            <Link to="/login">로그인</Link> | <Link to={"/register"}>회원가입</Link>
          </nav>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
