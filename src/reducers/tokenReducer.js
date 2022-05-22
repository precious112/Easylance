const tokenReducer=(state={token:""},action)=>{
    switch(action.type){
        case 'TOKEN':
            return action.token;
        default:
            return state;
    }
}

export default tokenReducer;