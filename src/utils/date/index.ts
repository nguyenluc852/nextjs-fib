import moment from "moment-timezone";
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(timezone);
dayjs.extend(utc);
dayjs.tz.setDefault("Asia/Tokyo")

// dayjsを使う場合はutilクラスから
export {dayjs}
export const formatDateTime = "YYYY-MM-DD HH:mm:ss"

class DateUtils {
  public static unixMilliSecondsToDateTime = (time: number): string => {

    const t = new Date(time)
    const year = t.getFullYear()
    const month = t.getMonth() + 1
    const date = t.getDate()
    const hour = t.getHours()
    const min = t.getMinutes()
    const sec = t.getSeconds()
    // YYYY-MM-DD hh:mm:ss
    return year + "-" + month + "-" + date + "-" + +hour + ":" + min + ":" + sec
  }
  
  static isAfter = (dateA: string, dateB: string) : boolean => {
    return moment(dateA).isAfter(dateB)
  }

  static isBefore = (dateA: string, dateB: string) : boolean => {
    return moment(dateA).isBefore(dateB)
  }

  static isSameOrBefore = (dateA: string, dateB: string) : boolean => {
    return moment(dateA).isSameOrBefore(dateB)
  }
  
  static isSameOrAfter = (dateA: string, dateB: string) : boolean => {
    return moment(dateA).isSameOrAfter(dateB)
  }

  static format(date: string, formatStr: string) {
    return moment(date).format(formatStr)
  }

  static formatDateString(date: string) {
    return moment(date).format("yyyy-MM-DD hh:ss")
  }

  static subtractDate (date : Date, day: number) {
    return moment(date).subtract(day, "days")
  }
  static addDate (date : Date, day: number) {
    return moment(date).add(day, "days")
  }

  static toDate (date: string, formatStr: string) {
    return moment(date, formatStr).toDate()
  }
}

export default DateUtils