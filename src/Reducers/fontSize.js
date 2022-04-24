 function CHANGE_FONT_SIZE (state = 14, action) {
    
    if (action.type === 'CHANGE_FONT_SIZE') {
        return action.payload;
    }

    return state;

}

export default CHANGE_FONT_SIZE;