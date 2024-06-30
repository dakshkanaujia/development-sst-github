function categroriesReducer(state = {
    categories : []
}, action) {
    switch (action.type) {
        case "LOAD_CATEGORIES_DONE": {
            return {
                ...state,
                categories: action.payload
            }
        }
        default:
            return state;
    }
}



export function loadCategories() {
    return (dispatch) => {
        fetch("https://run.mocky.io/v3/9bb30d9f-8182-48c6-b03c-8ac3ff8be813").then(
            (res) => {
                return res.json();
            }
        ).then((res) => {
            console.log(res);
            dispatch({
                type: "LOAD_CATEGORIES_DONE",
                payload: res
            })
        })
    }
}

export default categroriesReducer;