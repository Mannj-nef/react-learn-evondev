import { css } from "styled-components";

export const GlobalClasses = css`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap");

  html {
    font-family: "Poppins", sans-serif;
    background-color: #ccc;
  }
`;
