export type OrderInfo = {
  id: string,
  amount: string,
  status: string,
  wallet: string,
  price: string,
  quantity: string,
  createAt: string,
}

export type RequestOrder = {
  amount: string,
  status?: string,
  wallet: string,
  price: string,
  quantity: string,
}

export type RequestEditOrder = {
  id: string,
  amount?: string,
  status?: string,
  wallet?: string,
  price?: string,
  quantity?: string,
}

export type State = {
  listOrder: Array<OrderInfo> | [],
  order: OrderInfo | null, 
  token: string | ""
}
