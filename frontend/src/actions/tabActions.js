export const INIT_DEFAULT_TABS = "INIT_DEFAULT_TABS";

export const TAB_IDS = Object.freeze(
    {
        SAP_ACCOUNTS: 1,
        SEGMENTS: 2,
        BSCS_TO_SAP_MAPPINGS: 3,
        SAP_TO_SEGMENT_AND_ORDER_MAPPINGS: 4,
        LOGS: 5
    }
);

export const initTabPanes = (tabPanes) => ({
    type: INIT_DEFAULT_TABS,
    tabPanes: tabPanes
});