import React from "react";
import { Button } from "@mui/material";
import { styled } from "@mui/system";

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "#fff",
  padding: "10px 20px",
  borderRadius: "20px",
  fontSize: "1rem",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const ThemeToggleButton = ({ onClick, isDarkMode }) => {
  return (
    <StyledButton onClick={onClick}>
      {isDarkMode
        ? "Переключиться на светлую тему"
        : "Переключиться на тёмную тему"}
    </StyledButton>
  );
};

export default ThemeToggleButton;
