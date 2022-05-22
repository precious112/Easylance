const userReducer=(state={id:"",username:"",email:""},action) =>{
         switch(action.type){
             case 'SAVE':
                 return action.user;
             default:
                 return state;
         }
};

export default userReducer;