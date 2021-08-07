import React from "react";
import DurationSet from "./DurationSet";


function Duration(props) {
  return (
    <div className="row">
     
      <DurationSet
        session={props.session}
        durationObject={props.focusObj}
        setterFunc={props.setFocusObj}
      />

      
      <DurationSet
        session={props.session}
        durationObject={props.breakObj}
        setterFunc={props.setBreakObj}
      />
    </div>
  );
}

export default Duration;