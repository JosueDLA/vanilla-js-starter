import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/index.css";
import { Router } from "./router";
import { PATHS } from "./routes";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

window.ROUTER = new Router(PATHS);
