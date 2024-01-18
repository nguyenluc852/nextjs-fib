import c from "clsx";
import s from "./style.module.scss";
// import ButtonHelp from "../../atom/ButtonHelp";

type Props = {
  className?: string;
  label: string;
  option?: "must" | "option"; // バッジ。任意、必須、指定なし、のいづれか
  explain?: string;
  help?: string;
};

const FormDate: React.FC<Props> = (props) => {
  const { className,
    label,
    option,
    explain,
    help } = props;

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
      <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
        {label}
        <span className={`badge ${badgeStyle}`}>{badge}</span>
      </label>
      <div className="col-sm-8">
        <div className="input-group">
          <input
            type="text"
            data-input
            className="form-control"
            id="datetimepicker1_smssend"
            data-target="#datetimepicker1_smssend"
          />
          <span className="input-group-text" data-toggle>
            <i className="bi bi-calendar-date"></i>
          </span>
        </div>
        <div className="form-text">{explain}</div>
        {/* {help && <ButtonHelp text={help} />} */}
      </div>
    </div>
  );
};

export default FormDate;
