/** @typedef {import('pear-interface')} */
/* global Pear, document */

import React from "react";
import ReactDOM from "react-dom/client";
import updates from "pear-updates";
import wakeups from "pear-wakeups";

function App() {
  const [mensaje, setMensaje] = React.useState("Cargando...");

  React.useEffect(() => {
    async function cargarInfo() {
      const { app, platform } = await Pear.versions();
      if (app.key) {
        setMensaje(`Health P2P - App: ${app.key.slice(0, 8)}...`);
      } else {
        setMensaje("Health P2P - Modo desarrollo");
      }
    }
    cargarInfo();
  }, []);

  return React.createElement(
    "div",
    { style: { padding: "20px", backgroundColor: "#f0f0f0", height: "100vh" } },
    React.createElement("h1", { style: { color: "#2c3e50" } }, "Health P2P"),
    React.createElement("p", { style: { color: "#34495e" } }, mensaje),
  );
}

// Montar React
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(App));

updates((update) => {
  console.log("update available:", update);
});

wakeups(async (wakeup) => {
  console.log("GOT WAKEUP", wakeup);
});
