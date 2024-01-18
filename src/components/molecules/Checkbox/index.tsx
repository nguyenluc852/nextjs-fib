import c from "clsx";
import s from "./style.module.scss";

// import ButtonHelp from "../../atom/ButtonHelp";
import MessageInvalid from "../../atom/MessageInvalid";
import MessageValid from "../../atom/MessageValid";
import Label from "../../atom/Label";

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
};

const Checkbox: React.FC<Props> = (props) => {
  const {
    className,
    formClassName,
    label,
    explain,
    option,
    help,
    list,
    valid,
    validMessage,
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
        className={"col-sm-2 col-form-label mt-1"}
        text={label}
        badge={badge}
        badgeStyle={badgeStyle}
      />
      <div className={formClassName}>
        {list?.map((value, index) =>
          (() => {
            return (
              <div className="form-check form-check-inline mt-2">
                <input
                  className="form-check-input "
                  type="checkbox"
                  id={"inline_checkbox" + index}
                  value="1"
                />
                <label
                  className="form-check-label "
                  htmlFor={"inline_checkbox" + index}
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

export default Checkbox;
