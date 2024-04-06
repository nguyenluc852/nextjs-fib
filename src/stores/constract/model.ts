export type ConstractInfo = {
  email: string,
  totalPerson: string,
  otherPrice: string,
  id: number,
  status: string,
  fullName: string,
  phoneNumber: string,
  room: string,
  rentalPrice: string,
  signDate: string,
  block: string,
  gender: string,
  birthday: string,
  address: string,
  roomId:string,
  cccd: Array<string>,
  isUseInternet: number,
  customerId:string
}

export type RequestConstract = {
  fullName?: string,
  signDateStart?: string,
  signDateEnd?: string,
  block?: string,
  room?: string,
  status?: string
}

export type RequestCreateConstract = {
  fullName: string,
  birthday: string,
  phoneNumber: string,
  email: string,
  address: string,
  totalPerson: number,
  roomId: string,
  cccd: File[],
  otherPrice: string,
  gender: number,
  deposit:string,
  internetPrice: string
}

export type RequestEditConstract = {
  id: string,
  fullName?: string,
  birthday?: string,
  phoneNumber?: string,
  email?: string,
  address?: string,
  totalPerson?: string,
  roomId: string,
  customerId:string,
  cccd?: File,
  otherPrice?: string,
  gender?: number,
  status?: string,
  deposit?:string
}

export type State = {
  listConstract: Array<ConstractInfo> | [],
  constract: ConstractInfo | null
}
