const defaultLanguage = {
    selectedLanguage: 'cpp',
    selectedId: 69,
}

 function CHANGE_LANGUAGE (state = defaultLanguage, action) {

    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return {
                ...state,
                selectedLanguage: action.payload.language,
                selectedId: action.payload.id
            }
        default:
            return state;
    }
}
export default CHANGE_LANGUAGE;