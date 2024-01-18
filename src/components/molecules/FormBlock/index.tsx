import c from "clsx";
import s from "./style.module.scss";
import MessageValid from "../../atom/MessageValid";
import MessageInvalid from "../../atom/MessageInvalid";
// import ButtonHelp from "../../atom/ButtonHelp";
import { FocusEvent, ChangeEvent } from "react";

type Props = {
  className?: string; // ルートに割り当てるスタイルクラス
  formClassName?: string; // フォームに割り当てるスタイルクラス
  labelClassName?:string,
  formType?: "text" | "email" | "tel" | "number" | "password"; // ラジオボタン、チェックボックスは別コンポーネントにする
  label: string; // バッジの左に表示するテキスト
  placeholder: string;
  value? : string,
  explain: string; // フォームの下に表示するテキスト
  option?: "must" | "option"; // バッジ。任意、必須、指定なし、のいづれか
  valid?: boolean; // TODO 入力チェックで使う。具体的な実装はまだ。多分、react-form-hookとか使うことになると思う。
  validMessage?: string; // 入力チェック時のテキスト
  name?: string; //フォームの名前
  onChange?: (e: ChangeEvent) => void;
  onBlur?: (e: FocusEvent) => void;
  isDisable?: boolean
};

const FormBlock: React.FC<Props> = (props) => {
  const {
    className,
    formClassName,
    labelClassName,
    formType = "text",
    name,
    value,
    label,
    placeholder,
    explain = "",
    option,
    valid,
    validMessage,
    onChange,
    onBlur,
    isDisable
  } = props;

  // バッジのテキストとスタイル
  let [badge, badgeStyle] = ["", ""];

  switch (option) {
    case "must": {
      badge = "必須";
      badgeStyle = "bg-danger";
      break;
    }
    case "option": {
      badge = "任意";
      badgeStyle = "bg-success";
      break;
    }
    default: {
      badge = "";
      badgeStyle = "";
      break;
    }
  }

  return (
    <div className={c(s.root, className)}>
      <label htmlFor="staticEmail" className={labelClassName? labelClassName:"flex justify-center  mt-3  ml-2 mr-5 col-form-label"}>
        {label}
        <span className={`badge ${badgeStyle}`}>{badge}</span>
      </label>
      <div className={formClassName}>
        <input
          type={formType}
          className={c(
            "form-control disabled:opacity-75","focus:shadow-soft-primary-outline text-sm leading-5.6 ease-soft block w-full appearance-none rounded-lg border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-2 font-normal text-gray-700 outline-none transition-all placeholder:text-gray-500 focus:border-blue-600 focus:outline-none",
            valid !== undefined && valid && "is-valid",
            valid !== undefined && !valid && "is-invalid "
          )}
          disabled = {isDisable}
          value= {value}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          id="input"
          placeholder={placeholder}
        />
        {
          /*入力内容の補足説明とヘルプ*/
          explain && (
            <div className="form-text">
              {/* {explain} {help && <ButtonHelp text={help} />} */}
            </div>
          )
        }
        {
          /* 入力チェックでOKの時のメッセージ */
          valid !== undefined && valid && validMessage && (
            <MessageValid message={validMessage} />
          )
        }
        {
          /* 入力チェックでNGの時のメッセージ */
          valid !== undefined && !valid && validMessage && (
            <MessageInvalid message={validMessage} />
          )
        }
      </div>
    </div>
  );
};

export default FormBlock;
