export const selectUser= (user)=>{
  console.log("You clicked on me and user object: ",user.first);
  return{
    type:"USER_SELECTED",
    payload:user
  }
}