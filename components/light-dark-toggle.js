import React from "react";

const phases = ["🌑", "🌒", "🌓", "🌔", "🌕", "🌖", "🌗", "🌘"];
const darkIndex = 0;
const lightIndex = 4;

const Toggle = ({ initiallyDark = false, onChange = () => null }) => {
  const [isDark, setDark] = React.useState(initiallyDark);
  const [phaseIndex, setPhaseIndex] = React.useState(
    initiallyDark ? darkIndex : lightIndex
  );

  const movePhase = phase => {
    console.log("incrementing phase index");
    const nextPhase = phase === 7 ? 0 : phase + 1;
    setPhaseIndex(nextPhase);
    if (nextPhase === 0 || nextPhase === 4) {
      setDark(!isDark);
      onChange(!isDark);
    } else {
      setTimeout(movePhase, 50, nextPhase);
    }
  };

  const toggle = () => {
    movePhase(phaseIndex);
  };

  return (
    <>
      <button type="button" onClick={toggle}>
        {isDark ? "Dark" : "Light"} {phases[phaseIndex]}
      </button>
      <style jsx>{`
        button {
          color: ${isDark ? "white" : "black"};
        }
      `}</style>
      <style jsx>{`
        button {
          margin: 0;
          padding: 0;
          border: none;
          font: inherit;
          font-size: 2rem;
          background: none;
          position: absolute;
          top: 2rem;
          right: 2rem;
          font-weight: 200;
        }

        /* Firefox fix - https://bugzilla.mozilla.org/show_bug.cgi?id=140562 */
        button::-moz-focus-inner {
          padding: 0;
          border: none;
        }
        /* We're using :-moz-focusring rather than :focus so that we
   don't change the default focus in other browsers. If you
   set your own focus styles for buttons, you might drop the
   :-moz-focusring part. */
        button:-moz-focusring {
          outline: 1px dotted;
        }
      `}</style>
    </>
  );
};

export default Toggle;
