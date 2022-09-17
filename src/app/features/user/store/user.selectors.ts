import {createFeatureSelector, createSelector} from "@ngrx/store";
import {UserState} from "./user.reducer";

const getProductFeatureState = createFeatureSelector<UserState>('user');

export const getCurrentUser = createSelector(
  getProductFeatureState,
  state => state.currentUser
);
