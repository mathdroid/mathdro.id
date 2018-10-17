import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { injectGlobal } from "react-emotion";

// Your top level component

import App from "./App";

injectGlobal`
  * {
    box-sizing: inherit;
  }
  ::-moz-selection { /* Code for Firefox */
    background: #ff88ff;
}

::selection {
    background: #ff88ff;
}
  html {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background: #fff; /* fallback for old browsers */
    ${
      "" /* background: -webkit-linear-gradient(
      to top left,
      #aaa,
      #fff 50%
    );  */
    }
    /* Chrome 10-25, Safari 5.1-6 */
    ${
      "" /* background: linear-gradient(
      to top left,
      #aaa,
      #fff 50%
    );  */
    }
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    ${"" /* background-repeat: no-repeat; */}
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
    font-weight: lighter;
    font-size: 16px;
    color: hsla(0, 0%, 15%, 0.8);
    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  body {
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
  }

  #root {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  
  p {
    margin-bottom: 1rem;
  }
  .react-markdown {
    margin-top: 1rem;
  }
`;

// Export your top level component as JSX (for static rendering)
export default App;

// Render your app
if (typeof document !== "undefined") {
  const renderMethod = module.hot
    ? ReactDOM.render
    : ReactDOM.hydrate || ReactDOM.render;
  const render = Comp => {
    renderMethod(
      <AppContainer>
        <Comp />
      </AppContainer>,
      document.getElementById("root")
    );
  };

  // Render!
  render(App);

  // Hot Module Replacement
  if (module.hot) {
    module.hot.accept("./App", () => render(require("./App").default));
  }
}
