import React, { useState } from "react";
import { DisplayButton } from "./display-button";
import { Props } from "./display.props";

export const Display = ({ ...props }: Props): JSX.Element => {
  const [active, setActive] = useState<"lines" | "th-large" | "th">("th-large");

  return (
    <div className="flex items-center" {...props}>
      <DisplayButton
        icon="lines"
        onClick={() => setActive("lines")}
        active={active === "lines"}
      />
      <DisplayButton
        icon="th-large"
        onClick={() => setActive("th-large")}
        active={active === "th-large"}
      />
      <DisplayButton
        icon="th"
        onClick={() => setActive("th")}
        active={active === "th"}
      />
    </div>
  );
};
