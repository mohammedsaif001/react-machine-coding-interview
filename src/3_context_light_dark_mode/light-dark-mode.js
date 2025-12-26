import { useContext } from "react";
import ThemeProvider, { ThemeContext } from "./context/theme";

const LightDarkMode = () => {
  return (
    <ThemeProvider>
      <LightDarkModeContainer />
    </ThemeProvider>
  );
};

const LightDarkModeContainer = () => {
  return (
    <div>
      <Navbar />
      <Body />
    </div>
  );
};

const Navbar = () => {
  const { toggleTheme } = useContext(ThemeContext);
  return <button onClick={toggleTheme}>Toggle</button>;
};

const Body = () => {
  const { theme } = useContext(ThemeContext);
  return <div>Current Theme - {theme}</div>;
};

export default LightDarkMode;
