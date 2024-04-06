import c from "clsx"
import s from "./style.module.scss"
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRef, useState } from "react"
import vi from 'date-fns/locale/vi';
registerLocale('vi', vi)
// 日時入力用のコンポネント
 
type Props = {
  className?: string
  formDateClassName?: string
  formLabelClassName?: string
  label?: string
  dateName?: string // 日項目の名前
  title?: string // 時間項目の名前
  onDateChange: (date:Date) => void; // 日変更時のアクション
  showMonthYearPicker? : boolean
  dateValue?: Date
  dateFormat?: string
  validDate?: boolean
  focusMonth?: boolean
  minDate?: string // yyyy-mm-dd
  maxDate?: string // yyyy-mm-dd
  isDisable?: boolean
}
 
const DateTime: React.FC<Props> = props => {
  const { className,
    formDateClassName,
    formLabelClassName,
    label,
    dateName,
    title,
    dateValue,
    dateFormat,
    onDateChange,
    showMonthYearPicker,
    validDate,
    focusMonth,
    minDate,
    maxDate,
    isDisable
   } = props

  return (
    <div className={c("input-group", className)}>
      {label && <span className={c("input-group-text ml-2  mr-5", formLabelClassName)}>{label}</span>}
      <div className={c("input-group flex flex-row border-black", formDateClassName)}>
        <DatePicker className="border-grey border-solid outline  outline-gray-200"  
          onChange={onDateChange} 
          dateFormat = {dateFormat}
          locale= {vi}
          disabled = {isDisable}
          showMonthYearPicker = {showMonthYearPicker}
          selected= {dateValue? dateValue: new Date()} 
          focusSelectedMonth= {focusMonth} />
      </div>
    </div>
 
  )
}
 
export default DateTime
