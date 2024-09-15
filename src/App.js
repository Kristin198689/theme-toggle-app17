import React, { useState } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
} from "@mui/material";
//import { styled } from "@mui/system";
import ThemeToggleButton from "./components/ThemeToggleButton";
import styles from "./styles/App.module.css";

function App() {
  // Определяем светлую и тёмную темы
  const lightTheme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#ff8a65", // Яркий цвет для светлой темы
      },
      background: {
        default: "#f0f0f0", // Цвет фона для светлой темы
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#90caf9", // Яркий цвет для тёмной темы
      },
      background: {
        default: "#303030", // Цвет фона для тёмной темы
      },
    },
  });

  // Состояние для отслеживания текущей темы
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Функция для переключения темы
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <div className={styles.appContainer}>
        <Typography variant="h3" gutterBottom>
          {isDarkMode ? "Тёмная тема" : "Светлая тема"}
        </Typography>
        <ThemeToggleButton onClick={toggleTheme} isDarkMode={isDarkMode} />
      </div>
    </ThemeProvider>
  );
}

export default App;
