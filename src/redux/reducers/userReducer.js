export default (state={user: null},action)=>{
  console.log(state);
  switch (action.type) {
    case "SET_USER":
      return action.user;
    default:
      return state;
  }
}
