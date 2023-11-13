const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogs: [
        {id: 1, name: 's1mple'},
        {id: 2, name: 'electronic'},
        {id: 3, name: 'perfecto'},
        {id: 4, name: 'b1t'},
        {id: 5, name: 'sdy'},
    ],
    messages: [
        {id: 1, message: 'Hii'},
        {id: 2, message: 'Yoo'},
        {id: 3, message: 'How are you?'},
        {id: 4, message: 'YooO'},
        {id: 4, message: 'Siui'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {...state}
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.body;
            return stateCopy
        case SEND_MESSAGE:
            let body = state.newMessageBody
            stateCopy.newMessageBody = ''
            stateCopy.messages.push({id: 5, message: body});
            return stateCopy
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY, body: body
    }
}

export default dialogsReducer;