import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { injectGlobal } from "react-emotion";

// Your top level component
import App from "./App";
// import "reset-css";
const resetCss =
  'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}[hidden]{display:none}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}';

injectGlobal`
  ${resetCss}
  * {
    box-sizing: inherit;
  }
  ::selection, ::-moz-selection {
    background: #aa55aa;
  }

  html {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    background: #fff;
    
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    
    ${
      "" /* font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
    font-weight: lighter;
    font-size: 16px; */
    }
    
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
