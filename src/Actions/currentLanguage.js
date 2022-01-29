function changeLanguage({language, id}) {
    return {
        type: 'CHANGE_LANGUAGE',
        payload: { language, id }
    }
}

export default changeLanguage;