import React from "react";
import { Head } from "react-static";
import { PropTypes as RPT } from "prop-types";

import Card from "./card";

class CommentsContainer extends React.PureComponent {
  scriptRef = React.createRef();
  state = {
    notAsked: true,
    loading: false,
    error: false,
    loaded: false
  };
  componentDidMount() {
    this.initUtterances();
  }

  injectScript = () => {
    const { repo, theme = "github-light" } = this.props;
    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.async = true;
    script.setAttribute("repo", repo);
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("theme", theme);
    script.onload = () =>
      this.setState({ loading: false, loaded: true, error: false });
    script.onerror = () => this.setState({ loading: false, error: true });

    this.scriptRef.current.appendChild(script);
  };

  injectPrefetch = () => {
    // if (document) {
    //   document.head.insertAdjacentHTML(
    //     "beforeend",
    //     '<link rel="prefetch" href="https://utteranc.es/client.js" />'
    //   );
    // }
  };

  injectPreload = () => {
    // if (document) {
    //   document.head.insertAdjacentHTML(
    //     "beforeend",
    //     '<link rel="preload" href="https://utteranc.es/client.js" as="script" />'
    //   );
    // }
  };

  initUtterances = () => {
    this.setState({ notAsked: false, loading: true });
    this.injectPrefetch();
    this.injectPreload();
    this.injectScript();
  };
  render() {
    const { children } = this.props;
    return children(this.scriptRef, this.state);
  }
}

export default () => (
  <React.Fragment>
    <Head>
      <link rel="prefetch" href="https://utteranc.es/client.js" />
      <link rel="preload" href="https://utteranc.es/client.js" as="script" />
    </Head>
    <CommentsContainer repo="mathdroid/mathdro.id">
      {(ref, state) => (
        <div ref={ref}>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
      )}
    </CommentsContainer>
  </React.Fragment>
);
