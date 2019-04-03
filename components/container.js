import React from "react";

const Container = props => (
  <>
    <div {...props} />
    <style jsx>
      {`
        div {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          animation: fadein 2s;
          color: inherit;
          background: inherit;
          padding: 0 1rem;
        }
      `}
    </style>
  </>
);

export default Container;
