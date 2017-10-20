
import { Reducer, Action } from 'redux';
import { AppState } from './app.state';

import * as ProtosActions from './protos.actions';



const initialState: AppState = {

    headerTitle: ''
};


export const protosReducer: Reducer<AppState> =

    (state: AppState = initialState, action: Action): AppState => {

        switch (action.type) {

            case ProtosActions.SET_HEADER_TITLE:

                const title: string = (<ProtosActions.SetHeaderTitle>action).headerTitle;
                return Object.assign({}, state, {

                    headerTitle: title
                });


            default:
                return state;
        }
    };
