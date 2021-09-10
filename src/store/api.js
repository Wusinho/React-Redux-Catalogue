import { createAction } from '@reduxjs/toolkit';

export const apiCallBegan = createAction('api/callBegan');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');

export const champCallBegan = createAction('champs/callBegan');
export const champCallSuccess = createAction('champs/callSuccess');
export const champCallFailed = createAction('champs/callFailed');

export const sessionCallBegan = createAction('session/callBegan');
export const sessionCallSuccess = createAction('session/callSuccess');
export const sessionCallFailed = createAction('session/callFailed');

export const coachCallBegan = createAction('coach/callBegan');
export const coachCallSuccess = createAction('coach/callSuccess');
export const coachCallFailed = createAction('coach/callFailed');
