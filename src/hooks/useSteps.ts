import { useContext } from "react";
import { StepContext } from "../context/stepContext";

export default function useSteps() {
  return useContext(StepContext);
}