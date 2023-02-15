import React from "react";
import { createRoot } from "react-dom/client";

// importing component
import App from "./App";

// defining root
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// rendering
root.render(<App />);
