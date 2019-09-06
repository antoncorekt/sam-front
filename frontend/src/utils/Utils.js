const options = { year: 'numeric', month: '2-digit', day: 'numeric' };
export function renderDate(a) {
    return a === undefined ? ' ' : new Date(a).toLocaleString("pl-PL", options);
}

const optionsRenderDateTime = { year: 'numeric', month: '2-digit', day: 'numeric', hour: '2-digit', minute: '2-digit' };
export function renderDateTime(a) {
    return a === undefined ? ' ' : new Date(a).toLocaleString("pl-PL", optionsRenderDateTime);
}