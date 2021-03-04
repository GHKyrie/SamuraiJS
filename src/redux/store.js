import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: '0'},
                {id: 2, message: 'Hello, where have you been?', likesCount: '29'},
                {id: 3, message: 'Hello, hello', likesCount: '45'}
            ],
            newPostText: 'ITK'
        },
        dialogsPage: {
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
            ],
            newMessageBody: ''
        },
        sidebar: {}
    },
    callSubscriber() {
        console.log('aaa');
    },

    getState() {
      return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;