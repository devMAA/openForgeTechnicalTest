import { Action, createReducer, on } from '@ngrx/store';
import { getUserListAction , searchedgetUserListAction } from 'src/app/shared/state/actions/users.actions';
import {User} from 'src/app/shared/interfaces/User'

/** Initial State */
nction chatReducer(state: IChatState | undefined, action: Action): IChatState {
  return reducer(state, action);
}

const reducer = createReducer<IChatState>(
  initialState,

  /** Loaded Messafes */
  on(chatActions.loadMessagesSuccess, (state, { messages }) => ({
    ...state,
    messages
  })),

  /** Add message to the messages array */
  on(chatActions.addMessageToList, (state, { message }) => ({
    ...state,
    messages: [...state.messages, message]
  })),
);