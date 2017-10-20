
import { Action, ActionCreator } from 'redux';



export const SET_HEADER_TITLE = 'Set header title';
export interface SetHeaderTitle extends Action {
    headerTitle: string
}

export const setHeaderTitle: ActionCreator<SetHeaderTitle> =
    (title) => ({

        type: SET_HEADER_TITLE,
        headerTitle: title
    });


