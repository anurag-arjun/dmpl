import * as types from '../types/activity-actions-types';

export const add_new_activity = (hash, text) => ({
    type: types.ADD_NEW_ACTIVITY,
    hash,
    text
});

export const activity_succ = (hash) => ({
    type: types.CHANGE_ACT_ST_TO_SUCC,
    hash
});

export const activity_failed = (hash) => ({
    type: types.CHANGE_ACT_ST_TO_FAILED,
    hash
});