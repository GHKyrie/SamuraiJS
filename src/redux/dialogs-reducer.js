const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Zigota1'},
        {id: 2, name: 'Zigota2'},
        {id: 3, name: 'Zigota3'},
        {id: 4, name: 'Zigota4'},
        {id: 5, name: 'Zigota5'},
        {id: 6, name: 'Zigota6'}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'What music do you like?'},
        {id: 4, message: 'Yo!'},
        {id: 5, message: 'Where have you been?'},
        {id: 6, message: 'Come here!'}
    ]
};

const dialogsReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;