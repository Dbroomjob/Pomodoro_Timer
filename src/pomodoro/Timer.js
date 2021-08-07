import React from "react";
import PlayPause from "./PlayPause";
import Stop from "./Stop";

function Timer({
  session,
  setSession,
  isTimerRunning,
  setIsTimerRunning,
  timeRemaining,
}) {
  
  return (
    <div className="row">
      <div className="col">
        <div
          className="btn-group btn-group-lg mb-2"
          role="group"
          aria-label="Timer controls"
        >
          
          <PlayPause
            setSession={setSession}
            isTimerRunning={isTimerRunning}
            setIsTimerRunning={setIsTimerRunning}
            timeRemaining={timeRemaining}
          />
         
          <Stop
            session={session}
            setSession={setSession}
            setIsTimerRunning={setIsTimerRunning}
          />
        </div>
      </div>
    </div>
  );
}

export default Timer;