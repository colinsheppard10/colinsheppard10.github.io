export const ACTIVE_ITEM = 'active_item';

export function activeItemAction(selectedItem) {
    return {
        type: ACTIVE_ITEM,
        payload: selectedItem
    };
}