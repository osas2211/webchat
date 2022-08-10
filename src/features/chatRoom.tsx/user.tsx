import { createSlice } from "@reduxjs/toolkit"

export const user = createSlice({
  name: "user",
  initialState: { user: null, chats: [""] },
  reducers: {
    Join: (state, action) => {
      const { userID } = action.payload
      state["user"] = userID
    },
    LogOut: (state, action) => {
      state["user"] = null
    },
  },
})

export const { Join, LogOut } = user.actions
export const userReducer = user.reducer
