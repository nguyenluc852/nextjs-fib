import c from "clsx";
// import InfoTooltip from "../../atom/InfoTooltip";
import Label from "../../atom/Label";
import MessageInvalid from "../../atom/MessageInvalid";
import MessageValid from "../../atom/MessageValid";
import s from "./style.module.scss";

type Props = {
  className?: string;
  formClassName?: string; // フォームに割り当てるスタイルクラス
  label: string;
  explain?: string;
  option?: "must" | "option"; // バッジ。任意、必須、指定なし(propsなし)、のいづれか
  help?: string;
  list: Array<string>;
  valid?: boolean;
  validMessage?: string;
  value?: string| undefined, //TODO optionalでよい？
  onChange?: any, //TODO optionalでよい？
  isDisable?: boolean
  labelClass?: string
};

const PullDown: React.FC<Props> = (props) => {
  const {
    className,
    formClassName,
    label,
    option,
    explain,
    help,
    list,
    valid,
    validMessage,
    value,
    onChange,
    isDisable,
    labelClass,
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
      <div className={`${labelClass}`}>
        <Label
          className={"col-form-label fw-bold ml-2  mr-5"}
          text={label}
          badge={badge}
          badgeStyle={badgeStyle}
        />
        {/* {tooltipTitle && <InfoTooltip title={tooltipTitle} position="top" className="ms-1"/>} */}
      </div>
      <div className="col-9 col-sm-7 col-md-4 col-lg-4 col-xl-2">
        <select
          className={c("form-select", formClassName)}
          id="validationServer04"
          disabled={isDisable}
          aria-describedby="validationServer04Feedback"
          value={value}
          onChange={(e) => onChange ? onChange(e.target.value) : void(0)}
          required
        >
          {list.map((item, idx) => (
            <option value={item} key={idx}>{item}</option>
          ))}
        </select>
        {
          /*入力内容の補足説明*/
          explain && <div className="form-text">{explain}</div>
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

export default PullDown;
