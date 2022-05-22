export const saveUserDetails=(user)=>{
    return {
        type:'SAVE',
        user
    };
};


export const saveCurMessage=(curMessage)=>{
 return{
     type:'CHAT',
     curMessage
 };
};

export const saveToken=(token)=>{
    return{
        type:'TOKEN',
        token
    };
};