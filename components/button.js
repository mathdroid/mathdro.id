import React from "react";
import { css } from "@emotion/core";

export const buttonResetCSS = css`
  margin: 0;
  padding: 0;
  border: none;
  font: inherit;
  font-size: 1.5rem;
  background: none;

  /* Firefox fix - https://bugzilla.mozilla.org/show_bug.cgi?id=140562 */
  &::-moz-focus-inner {
    padding: 0;
    border: none;
  }
  /* We're using :-moz-focusring rather than :focus so that we
   don't change the default focus in other browsers. If you
   set your own focus styles for buttons, you might drop the
   :-moz-focusring part. */
  &:-moz-focusring {
    outline: 1px dotted;
  }
`;

const Button = props => (
  <button
    type="button"
    css={css`
      ${buttonResetCSS}
    `}
    onClick={() => null}
    {...props}
  />
);

export default Button;
