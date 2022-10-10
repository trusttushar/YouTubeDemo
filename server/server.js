require("dotenv").config();
import "babel-polyfill";
import express from "express";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { Helmet } from "react-helmet";
import App from "../src/App";
import bodyParser from "body-parser";
import {
  ApolloProvider,
  ApolloClient,
  createHttpLink,
  InMemoryCache
} from '@apollo/client';
import fetch from 'cross-fetch';
const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: process.env.REACT_APP_API_BASE_URL + '/graphql',
    fetch
  }),
  cache: new InMemoryCache(),
});
const app = express();
const PORT = process.env.PORT;
app.use(bodyParser.json());
app.use(express.static("build/public"));

app.get("*", (req, res) => {
  const context = {};

  const content = ReactDOMServer.renderToString(
    <ApolloProvider client={client}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </ApolloProvider>
  );
  const helmet = Helmet.renderStatic();
  const html = `
  <html>
    <head>
    ${helmet.meta.toString()}
    ${helmet.title.toString()}
    ${helmet.link.toString()}
    ${helmet.script.toString()}
    </head>
    <body>
    <div id="root">${content}</div>
    <script src="/client_bundle.js"></script>
    <script src="/assets/js/vendor-all.min.js"></script>
    <script src="/assets/plugins/bootstrap/js/bootstrap.min.js"></script>
    <script src="/assets/js/pcoded.min.js"></script>
    </body>
    </html>
    `;

  res.send(html);
});
app.listen(PORT, () => {
  console.log("App is now running at post : ", PORT);
});
