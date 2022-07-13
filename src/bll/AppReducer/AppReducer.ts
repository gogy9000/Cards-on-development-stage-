const initState={
    azaza:'azaza'
}
type InitStateType= typeof initState
export const AppReducer = (state:InitStateType=initState,action:any):InitStateType => {
  switch (action.type) {
      default: return state
  }
}