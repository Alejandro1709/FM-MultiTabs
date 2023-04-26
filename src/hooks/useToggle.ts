import { useContext } from "react";
import { ToggleContext } from "../context/toggleContext"

export function useToggle() {
  return useContext(ToggleContext);
}