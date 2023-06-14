import { createAction } from '@reduxjs/toolkit';

export const apiCallBegan = createAction('api/callBegan');
export const apiCallSuccess = createAction('api/callSuccess');
export const apiCallFailed = createAction('api/callFailed');

export const champCallBegan = createAction('champs/callBegan');
export const champCallSuccess = createAction('champs/callSuccess');
export const champCallFailed = createAction('champs/callFailed');

export const regCallBegan = createAction('reg/callBegan');
export const regCallSuccess = createAction('reg/callSuccess');
export const regCallFailed = createAction('reg/callFailed');

export const sessionCallBegan = createAction('session/callBegan');
export const sessionCallSuccess = createAction('session/callSuccess');
export const sessionCallFailed = createAction('session/callFailed');

export const coachCallBegan = createAction('coach/callBegan');
export const coachCallSuccess = createAction('coach/callSuccess');
export const coachCallFailed = createAction('coach/callFailed');

export const appointmentCallBegan = createAction('appointment/callBegan');
export const appointmentCallSuccess = createAction('appointment/callSuccess');
export const appointmentCallFailed = createAction('appointment/callFailed');

export const setappointmentCallBegan = createAction('setappointment/callBegan');
export const setappointmentCallSuccess = createAction('setappointment/callSuccess');
export const setappointmentCallFailed = createAction('setappointment/callFailed');
