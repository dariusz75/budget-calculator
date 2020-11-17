import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";

import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faTrash,
  faChevronUp,
  faChevronDown
} from "@fortawesome/free-solid-svg-icons";
import { BudgetCalculator } from "./components";

export default function App() {
  library.add(fab, faCheckSquare, faTrash, faChevronUp, faChevronDown);
  return (
    <div className="App">
      <BudgetCalculator />
    </div>
  );
}
