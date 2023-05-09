export function validate(username:string,password:string){
  if (username.length < 4 || password.length < 5) {
    return false
  }
  else {
    return true
  }
}