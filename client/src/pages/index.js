import React, { Fragment } from "react";
import { Router } from "@reach/router";
import { Layout } from "../components";
/** importing our pages */
import Tracks from "./tracks";
import Track from "./track";
import Module from "./module";

export default function Pages() {
  return (
    <Layout grid>
      <Router primary={false} component={Fragment}>
        <Tracks path="/" />
        <Track path="/track/:trackId" />
        <Module path="/track/:trackId/module/:moduleId" />
      </Router>
    </Layout>
  );
}
