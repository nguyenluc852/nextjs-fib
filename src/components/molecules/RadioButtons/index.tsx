import c from "clsx";
import s from "./style.module.scss";
// import ButtonHelp from "../../atom/ButtonHelp";
import MessageInvalid from "../../atom/MessageInvalid";
import MessageValid from "../../atom/MessageValid";
import Label from "../../atom/Label";

type Props = {
  className?: string;
  formLabelClassName?: string
  formClassName?: string; // フォームに割り当てるスタイルクラス
  label: string;
  explain?: string;
  option?: "must" | "option"; // バッジ。任意、必須、指定なし(propsなし)、のいづれか
  help?: string;
  list: Array<string>;
  valid?: boolean;
  validMessage?: string;
  selectedItem: number;
  isDiable?: boolean
  onRadioSelectedItem: (idx: number) => void;
};

const RadioButtons: React.FC<Props> = (props) => {
  const {
    className,
    formClassName,
    formLabelClassName,
    label,
    explain,
    option,
    help,
    list,
    valid,
    isDiable,
    validMessage,
    selectedItem,
    onRadioSelectedItem,
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
    <div className={c(className)}>
      <Label
        className={formLabelClassName}
        text={label}
        badge={badge}
        badgeStyle={badgeStyle}
      />
      <div className={formClassName}>
        {list?.map((value, index) =>
          (() => {
            return (
              <div
                className="form-check form-check-inline mr-2"
                key={value.toString()}
              >
                <input
                  disabled = {isDiable}
                  className={c("form-check-inputappearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer")}
                  type="radio"
                  id={"inline_radio" + index}
                  checked={selectedItem === index}
                  onChange={() => onRadioSelectedItem(index)}
                />
                <label
                  className="form-check-label"
                  htmlFor={"inline_radio" + index}
                >
                  {value}
                </label>
              </div>
            );
          })()
        )}
      </div>
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
  );
};

export default RadioButtons;
