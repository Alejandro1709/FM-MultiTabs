import { useContext } from "react";
import { ToggleContext } from "../context/ToggleContext";

export function useToggle() {
  return useContext(ToggleContext);
}