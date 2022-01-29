export default function(state = 14, action) {
    
    if (action.type === 'CHANGE_FONT_SIZE') {
        return action.payload;
    }

    return state;

}