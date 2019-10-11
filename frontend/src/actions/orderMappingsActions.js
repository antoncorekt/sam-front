export const EDIT_ORDER_MAPPING_PROPERTIES_IN_REDUX = "editOrderMappingPropertiesInRedux";
export const CANCEL_EDITION_OF_ORDER_MAPPING_PROPERTIES_IN_REDUX = "cancelEditionOfOrderMappingPropertiesInRedux";
export const UNSHIFT_ORDER_MAPPING_IN_REDUX = "unshiftOrderMappingInRedux";

export const editOrderMappingPropertiesInRedux = (rowId, orderMappingData: Order) => ({
    type: EDIT_ORDER_MAPPING_PROPERTIES_IN_REDUX,
    rowId: rowId,
    orderMappingData: orderMappingData
});

export const cancelEditionOfOrderMappingPropertiesInRedux = (rowId) => ({
    type: CANCEL_EDITION_OF_ORDER_MAPPING_PROPERTIES_IN_REDUX,
    rowId: rowId
});

export const unshiftOrderMappingInRedux = (orderMappingData: Order) => ({
    type: UNSHIFT_ORDER_MAPPING_IN_REDUX,
    orderMappingData: orderMappingData
});