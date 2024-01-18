import c from "clsx";
import s from "./style.module.scss";

// タブのナビゲーション

type Props = {
  className?: string;
  listItem: string[]; // タブのitem一覧
  selectedItem: number; // 選択されてるタブ
  onSelectedItem: (idx: number) => void; // タブが選択される時のアクション
  hrefItem?: string; //遷移先のlinkパス
};

const NaviTab: React.FC<Props> = (props) => {
  const { className,
    listItem,
    selectedItem,
    onSelectedItem,
    hrefItem } = props;

  return (
    <ul role={"tablist"} className={c(s.root, className, "sm:flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 mt-3")}>
      {listItem.map((_item, _idx) =>
        (() => {
          return (
            <li key={_idx} className="nav-item">
              <a
                className={c(
                  "nav-link",
                  "item" + _idx,
                  "inline-block p-2  text-gray-800 bg-white ",
                  selectedItem === _idx ? s.selected_background : "hover:text-blue-600 dark:text-blue-500"
                )}
                onClick={() => onSelectedItem(_idx)}
                aria-current="page"
                href={hrefItem}
              >
                {_item}
              </a>
            </li>
          );
        })()
      )}
    </ul>
  );
};

export default NaviTab;
