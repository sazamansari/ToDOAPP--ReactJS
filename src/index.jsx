import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ItemStorage from "./ItemStorage";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
<App
todoItems={ItemStorage.getItems()}
onSaveItems={ItemStorage.onSaveItems}/>,
);

