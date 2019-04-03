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
