export function validate(data: any){
  if (data.username.lenth < 4 || data.password.lenth < 5) {
    return false
  }
  else {
    return true
  }
}