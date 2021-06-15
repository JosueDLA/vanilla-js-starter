import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/index.scss";
import { Router } from "./router";
import { PATHS } from "./routes";

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

window.ROUTER = new Router(PATHS);
