import { writable } from "svelte/store";

export const introAnimationStates = {
  init: "first launch",
  inProgress: "ip",
  complete: "c"
}

export let introAnimation = writable(introAnimationStates.init)