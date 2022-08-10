import { createSlice } from "@reduxjs/toolkit"

export const user = createSlice({
  name: "user",
  initialState: { userID: null, chats: [""] },
  reducers: {
    Join: (state, action) => {
      const { userID } = action.payload
      state["userID"] = userID
    },
    LogOut: (state, action) => {
      state["userID"] = null
    },
  },
})

export const { Join, LogOut } = user.actions
export const userReducer = user.reducer
