

class LogUtil {
    static info = (key: String, message: any) => {
        console.log("env", process.env.NEXT_PUBLIC_MT)
        return process.env.NEXT_PUBLIC_MT == "dev" ? console.log(key, message): null
    }
}

export default LogUtil