// import profileReducer from "./profile-reducer";
// import dialogs from "../components/Dialogs/Dialogs";
// import dialogsReducer from "./dialogs-reducer";
// import sidebarReducer from "./sidebar-reducer";
//
// let store = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: 'hi,how are you?', likesCount: 12},
//                 {id: 2, message: 'Suiiii', likesCount: 22},
//                 {id: 3, message: 'Ez for me', likesCount: 43},
//             ],
//             newPostText: '',
//
//         },
//         dialogsPage: {
//             dialogs: [
//                 {id: 1, name: 's1mple'},
//                 {id: 2, name: 'electronic'},
//                 {id: 3, name: 'perfecto'},
//                 {id: 4, name: 'b1t'},
//                 {id: 5, name: 'sdy'},
//             ],
//             messages: [
//                 {id: 1, message: 'Hii'},
//                 {id: 2, message: 'Yoo'},
//                 {id: 3, message: 'How are you?'},
//                 {id: 4, message: 'YooO'},
//                 {id: 4, message: 'Siui'}
//             ],
//             newMessageBody: ''
//         },
//         sidebar: {}
//     },
//     rerenderTree() {
//         console.log('state changed');
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer) {
//         this.rerenderTree = observer;
//     },
//
//     addPost() {
//         let newPost = {
//             id: 5,
//             message: this._state.profilePage.newPostText,
//             likesCount: 0
//         }
//         this._state.profilePage.posts.push(newPost)
//         this._state.profilePage.newPostText = '';
//         this.rerenderTree(this._state);
//     },
//     updateNewPostText(newText) {
//         this._state.profilePage.newPostText = newText;
//         this.rerenderTree(this._state);
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//         this.rerenderTree(this._state)
//     }
// }
//
//
// export default store;