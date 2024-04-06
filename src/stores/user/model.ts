export type UserInfo = {
  email: string,
  isAdmin: string, 
  token: String
}


export type State = {
  userInfo: UserInfo | null, 
}
