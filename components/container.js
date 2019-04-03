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
          justify-content: center;
          position: absolute;
          overflow: hidden;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          animation: fadein 2s;
          color: inherit;
          background: inherit;
        }
      `}
    </style>
  </>
);

export default Container;
