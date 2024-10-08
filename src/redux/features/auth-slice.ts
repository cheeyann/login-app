import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: AuthState;
};
type AuthState = {
  isAuth: boolean;
  userName: string;
};
const initialState = {
  value: {
    isAuth: false,
    userName: "",
  } as AuthState,
} as InitialState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (state, action: PayloadAction<any>) => {
      return {
        value: {
          isAuth: true,
          userName: action.payload,
        },
      };
    },
  },
});
export const { logIn, logOut } = auth.actions;
export default auth.reducer;
