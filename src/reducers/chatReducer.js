const chatReducer=(state={senderImage:"",receiverId:"",receiverImage:"",receiverUsername:"",receiverFirstName:"",receiverLastName:""},action)=>{

    switch(action.type){
        case 'CHAT':
            return action.curMessage;
        default:
            return state;
    }
}

export default chatReducer;