import { createAction } from '@reduxjs/toolkit';

export const apiCallBegan = createAction('api/callBegan');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');

export const champCallBegan = createAction('champs/callBegan');
export const champCallSuccess = createAction('champs/callSuccess');
export const champCallFailed = createAction('champs/callFailed');

export const logCallBegan = createAction('log/callBegan');
export const logCallSuccess = createAction('log/callSuccess');
export const logCallFailed = createAction('log/callFailed');
