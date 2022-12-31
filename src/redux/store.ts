import { configureStore } from '@reduxjs/toolkit'
import userActionsReducer from './userActionsReducer'
import foodAvailabilitySlice from './shoppingActions'
export const store = configureStore({
  reducer: {
    userActions:userActionsReducer,
    availableFoods:foodAvailabilitySlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch