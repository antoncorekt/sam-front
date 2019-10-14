import {Role, Status15} from "../api/api-models";

const options = { year: 'numeric', month: '2-digit', day: 'numeric' };
export function renderDate(a) {
    return a === undefined ? ' ' : new Date(a).toLocaleString("pl-PL", options);
}

const optionsRenderDateTime = { year: 'numeric', month: '2-digit', day: 'numeric', hour: '2-digit', minute: '2-digit' };
export function renderDateTime(a) {
    return a === undefined ? ' ' : new Date(a).toLocaleString("pl-PL", optionsRenderDateTime);
}

export const getPaginationArray = (arr: Array<any> = [], curPage: number, pageSize: number) =>{
    --curPage;
    return arr.slice(curPage * pageSize, (curPage + 1) * pageSize);
};


export const getPageSizeOption = (arr: Array<any>, defaultPageSizes: Array<number> = [5, 10, 50, 100]) => {
    return [
        ...defaultPageSizes,
        arr.length
    ]
        .filter(item => item !== 0)
        .filter((item, pos, arr) => arr.indexOf(item) === pos)
        .sort((a, b) => a - b)
        .map(x => "" + x);
};

export const reduceHandlerToProp = reduxStoreProp => handler => (state, action) => ({
    ...state,
    [reduxStoreProp]: handler(state[reduxStoreProp], action)
});

export function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

export const getColorByRole = (role: Role) => {
    if (Role.CONTROL) return getColor(Status15.C);
    if (Role.BOOKER) return getColor(Status15.W);
    return getColor(Status15.F);
};

export const getColor = (status: Status15) => {
    switch (status) {
        case Status15.C: return "#637BAD";
        case Status15.W: return "#ADB9D3";
        case Status15.P: return "#008000";
        default: return "#fffdf8";
    }
};