import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from "axios"
import https from "https"
class ApiClient {
  private static axios: AxiosInstance
  
  constructor(token?: string) {
    ApiClient.init(token)
  }

  private static init = (token?: string) => {
    const baseURL = process.env.NEXT_PUBLIC_BASEURL

    
    if (!baseURL) throw new Error("エンドポイントを取得できません")

    ApiClient.axios = ApiClient.createAxiosInstance(baseURL)
    if (token) ApiClient.setToken(token)
  }

  private static initIfNot = () => {
    if (!ApiClient.axios) {
      ApiClient.init()
    }
  }

  private static createAxiosInstance = (baseURL: string) => {
    if (!baseURL) throw new Error("base url is required.")
    const instance = axios
      .create({
        baseURL,
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 30_000,
        httpsAgent: new https.Agent({ keepAlive: true })
      })
    instance.interceptors.response.use(
      config => this.requestSuccess(config),
      config => this.requestFailure(config),
    )
    return instance
  }

  public static setToken = (token: string) => {
    if (!ApiClient?.axios?.defaults?.headers) return
    // eslint-disable-next-line
    // @ts-ignore
    ApiClient.axios.defaults.headers["X-Api-Key"] = token;
  }

  static requestSuccess(response: AxiosResponse) {
    // console.log("// REQUEST SUCCESS", response)
    return response
  }

  static requestFailure(error: AxiosError) {
    
    console.log("// REQUEST FAILURE", {error})
    if (error.response?.status === 403) {
      alert("セッションの有効期限が切れました。再度ログインしてください。")
      location.href = `${process.env.NEXT_PUBLIC_APP_LOGIN_DOMAIN}/login`
    }
    return Promise.reject(error.response)
  }

  async get<Response>({url,
    config}: {url: string, config?: AxiosRequestConfig }) {
    ApiClient.initIfNot()
    try {
      const res = await ApiClient.axios.get<null,AxiosResponse>(url, config)
      return res
    } catch (error: any) {
      console.log("get method error:", error)
      throw error
    }
  }

  async post<Request, Response>({url,
    data,
    config}: { url: string, data?: Request, config?: AxiosRequestConfig }) {
    ApiClient.initIfNot()
    try {
      const res = await ApiClient.axios.post<Request, AxiosResponse>(url, data, config)
      console.log(res)
      return res
    } catch (error: any) {
      console.log("post method error:", error)
      throw error
    }
  }

  async delete<Response>({url,
    config}: { url: string, config?: AxiosRequestConfig }) {
    ApiClient.initIfNot()
    try {
      const res = await ApiClient.axios.delete<null, Response>(url, config)
      return res
    } catch (error: unknown) {
      console.log("error:", error)
      throw new Error("delete method error:")
    }
  }

  async patch<Request, Response>({url,
    data,
    config}: { url: string, data: Request, config?: AxiosRequestConfig }) {
    ApiClient.initIfNot()
    try {
      const res = await ApiClient.axios.patch<null, AxiosResponse>(url, data, config)
      return res.data
    } catch (error: unknown) {
      console.log("error:", error)
      throw new Error("patch method error:")
    }
  }

  async put<Request, Response>({url,
    data,
    config}: { url: string, data: Request, config?: AxiosRequestConfig }) {
    ApiClient.initIfNot()
    try {
      const res = await ApiClient.axios.put<Request, AxiosResponse>(url, data, config)
      console.log(res)
      return res.data
    } catch (error: any) {
      console.log("put method error:", error)
      throw error
    }
  }
}

export default new ApiClient()