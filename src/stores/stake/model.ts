
export type StakeInfo = {
  id: string,
  amount: string,
  status: number,
  wallet: string,
  reward: string,
  time_expire: string,
  count: number,
  total: string,
  createAt: string,
}

export type RequestStake = {
  amount: string,
  time_expire: string,
  wallet: string,
}


export type State = {
  stake: StakeInfo | null
}
