import { OPEN_MODAL, CLOSE_MODAL } from "actions";

const initState = false;

export const modal = (state = initState, action) => {
  switch(action.type) {
    case OPEN_MODAL:
      return;
    case CLOSE_MODAL:
      return;
    default:
      return state;
  }
}