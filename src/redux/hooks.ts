import { TypedUseSelectorHook, useDispatch as useDispatchFn, useSelector as useSelectorFn } from 'react-redux';
import type { State } from './store';
import { ThunkDispatch } from './store';

export const useDispatch = () => useDispatchFn<ThunkDispatch>();
export const useSelector: TypedUseSelectorHook<State> = useSelectorFn;
