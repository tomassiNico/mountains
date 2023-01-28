import { FC } from "react";
import MountainCard from "./MountainCard";
import useMountains from "../../hooks/useMountains";
import "../../assets/styles/mountains.css";
import Loader from "../utils/Loader";
import useSortedMountains from "../../hooks/useSortedMountains";
import SortSelect from "./SortSelect";

const MountainList: FC = () => {
  const { mountains, fetchMore, morePages, loading } = useMountains();
  const { sortAvailable, sortedBy, changeSortedBy, sortedMountains } =
    useSortedMountains(mountains);

  return (
    <div>
      {loading && <Loader />}

      <SortSelect
        onChangeSortedBy={changeSortedBy}
        sortAvailable={sortAvailable}
        sortedBy={sortedBy}
      />

      <div className="mountains-list">
        {sortedMountains.map((mountain) => {
          return <MountainCard key={mountain.id} mountain={mountain} />;
        })}
      </div>
      {morePages && (
        <button onClick={fetchMore} disabled={loading}>
          Load more
        </button>
      )}
    </div>
  );
};

export default MountainList;
