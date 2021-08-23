import { createAction } from '@reduxjs/toolkit';

export const apiCallBegan = createAction('api/callBegan');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');

export const champCallBegan = createAction('champ/callBegan');
export const champCallSuccess = createAction('champ/callSuccess');
export const champCallFailed = createAction('champ/callFailed');
export const bookFilter = createAction('book/bookFiltered');
