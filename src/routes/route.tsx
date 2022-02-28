import React from "react";
import { BrowserRouter, Route, Routes as Switch } from "react-router-dom";

import Home from "../pages/home";

const Routes = () => (
    <Switch>
        <Route path="/" element={<Home />} />
        <Route path="*" element={() => <h3 style={{ margin: 40 }}> Página não encontrada </h3>} />
    </Switch>
);

export default Routes;