import Data from '../Data/Data';

const iState = {
    list: Data,
};

const reducer = (state = iState, action) => {

    switch (action.type) {

        case "Adddata":
            localStorage.setItem('count', state.list.length + 1);

            return {
                "list": [...state.list, {
                    id: (state.list.length === 0) ? 1 : state.list[state.list.length - 1].id + 1,
                    data: action.payload.data
                }]
            }

        case "delete":

            localStorage.setItem('count', state.list.length - 1);
            let newData = state.list.filter(val => val.id !== action.payload.id);
            return {
                "list": newData
            }

        default:
            return state
    }
}

export default reducer;