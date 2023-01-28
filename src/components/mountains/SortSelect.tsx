import { FC, useState } from "react";
import "../../assets/styles/mountains.css";
import t from "../../utils/translations";
import Icon from "../utils/Icon";

interface SortSelectProps {
  sortAvailable: string[];
  onChangeSortedBy: (value: string) => void;
  sortedBy: string;
}

const SortSelect: FC<SortSelectProps> = (props) => {
  const [openSortList, setOpenSortList] = useState<boolean>(false);
  const { sortAvailable, sortedBy, onChangeSortedBy } = props;

  const toggleSortListOpen = () => setOpenSortList(prevState => !prevState);

  // TODO: sort list should be hidden when click outside of component

  const onSelectSort = (sort:string) => {
    onChangeSortedBy(sort)
    setOpenSortList(false)
  }

  return (
    <div className="sort-container">
      <div>
        <label className="sort-label"> Ordenado por </label>
        <button className="sort-by" onClick={toggleSortListOpen} >
          <div className="center-container">
            {t(sortedBy)}
            <Icon icon={openSortList ? 'expand_less' : 'expand_more'} />
          </div>
        </button>
      </div>
      <div className="sort-list-container">
        {openSortList && (
          <ul className="sort-list">
          {sortAvailable.map((sort: string) => (
            <li className="sort-item">
              <button className="sort-button" onClick={() => onSelectSort(sort)} >
                {t(sort)}
              </button>
            </li>
          ))}
        </ul>
        )}
      </div>
    </div>
  );
};

export default SortSelect;
