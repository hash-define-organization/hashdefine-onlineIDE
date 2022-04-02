const defaultCode={
    code:''
}
export default function (state=defaultCode,action){
    switch(action.type){
        case "code_change":{
            return {
                ...state,
                code:action.payload
            }
        }
        default:
            return state;
    }
}