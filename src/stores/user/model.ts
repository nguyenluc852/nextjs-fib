export type UserInfo = {
  email: string,
  isAdmin: string, 
  token: String,
  wallet: String
}


export type State = {
  userInfo: UserInfo | null, 
}
