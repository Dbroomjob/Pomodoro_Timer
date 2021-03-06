import React from "react";
import classNames from "../utils/class-names";

function PlayPause({
  setSession,
  isTimerRunning,
  setIsTimerRunning,
  timeRemaining,
}) {
  function playPause() {
    setIsTimerRunning((prevState) => {
      const nextState = !prevState;
      if (nextState) {
        setSession((prevStateSession) => {
         
          if (prevStateSession === null) {
            return {
              label: "Focusing",
              timeRemaining,
            };
          }
          return prevStateSession;
        });
      }
      return nextState;
    });
}
  return (
    <button
      type="button"
      className="btn btn-primary"
      data-testid="play-pause"
      title="Start or pause timer"
      onClick={playPause}
    >
      <span
        className={classNames({
          oi: true,
          "oi-media-play": !isTimerRunning,
          "oi-media-pause": isTimerRunning,
        })}
      />
    </button>
  );
}

export default PlayPause;