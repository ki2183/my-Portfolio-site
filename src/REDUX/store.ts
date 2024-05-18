import { configureStore } from '@reduxjs/toolkit'
import themeSlice from './Slices/themeSlice'
import modalSlice from './Slices/modalSlice'
import viewNumSlice from './Slices/viewNumSlice'

export const store = configureStore({
  reducer: {
    modal:modalSlice,
    theme:themeSlice,
    viewNum:viewNumSlice,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch