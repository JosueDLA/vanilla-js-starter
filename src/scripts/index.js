import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import { PATHS } from "./routes";
import Router from "./router";
import "../styles/index.css";

const ROUTER = new Router(PATHS);

if (process.env.NODE_ENV === "development") {
  require("../index.html");
}

console.log("webpack starterkit");
