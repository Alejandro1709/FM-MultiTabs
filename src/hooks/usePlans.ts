import { useContext } from "react";
import { PlanContext } from "../context/planContext"

export function usePlans() {
  return useContext(PlanContext);
}