import {Role, Status15} from "../api/api-models";
import {func} from "prop-types";

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
        case Status15.C: return "rgba(254,149,71,0.68)";
        case Status15.W: return "rgba(255,252,29,0.5)";
        case Status15.P: return "#94b578";
        default: return "#fffdf8";
    }
};

export const getObjectDiff = (obj1:any, obj2:any) => {
    return Object.keys(obj2).reduce((diff, key) => {
        if (obj1[key] === obj2[key]) return diff;
        return {
            ...diff,
            [key]: obj2[key]
        }
    }, {})
};

function twoFuncParam(obj1,obj2) {}

export class Filter {
    orig: string;
    search: string;
    compareFunc: twoFuncParam;

    static defaultStringComparator = (orig, search) => {
        if (orig === null || orig === undefined){
            return search === null || search === undefined
        }
        if (typeof orig === "string" && typeof search === "string"){
            return orig.includes(search);
        }

        return true;
    }
}

export const getFilteredAndSortedArray = (array:Array<any>, filters: Array<Filter>, sortedBy: string, desc:boolean = true) => {

    return array
        .filter(arr => filters.reduce(
            (prev, cur) => cur.compareFunc(arr[cur.orig], cur.search) && prev,
            true
            )
        )
};



