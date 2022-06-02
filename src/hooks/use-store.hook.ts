import React from "react";
import { StoreContext } from "../context/store.context";

export const useStore = () => React.useContext(StoreContext);
