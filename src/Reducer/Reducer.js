// import Data from '../Data/Data';

const setLocalStorageData = (data) => {
    localStorage.setItem("data_list", JSON.stringify(data));
    const data1 = JSON.parse(localStorage.getItem("data_list"))
    localStorage.setItem('count', data1.length)
}

const getLocalStorageData = () => {
    const data = JSON.parse(localStorage.getItem("data_list"));
    localStorage.setItem('count', data.length)
    if (Array.isArray(data)) {
        return data;
    } else {
        return []
    }
}

const iState = {
    list: getLocalStorageData(),
};

const reducer = (state = iState, action) => {

    switch (action.type) {

        case "Adddata":
            const newData = [...state.list, {
                id: (state.list.length === 0) ? 1 : state.list[state.list.length - 1].id + 1,
                data: action.payload.data
            }]
            setLocalStorageData(newData);
            return {
                "list": newData,
            }
        case "delete":
            const newD = state.list.filter(val => val.id !== action.payload.id);
            setLocalStorageData(newD);
            return {
                "list": newD,
            }

        default:
            return state
    }
}

export default reducer;