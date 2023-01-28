import { useState, useMemo } from "react";
import { Mountain } from "../services/notionApi";

const sortMountain = (sortedBy: string) => (a: Mountain, b: Mountain) => {
  //@ts-ignore
  const [valueA, valueB] = [a[sortedBy], b[sortedBy]];

  if (valueA instanceof Date || valueB instanceof Date) {
    if (!valueA) return 1;
    if (!valueB) return -1;
    return new Date(valueA) < new Date(valueB) ? -1 : 1;
  }

  const valueType = typeof valueA;
  switch (valueType) {
    case "number":
      return valueA - valueB;
    case "string":
      return valueA < valueB ? -1 : 1;
    default:
      return -1;
  }
};

const useSortedMountains = (mountains: Mountain[]) => {
  const sortAvailable: string[] = ["altitude", "name", "created_at", "done_at"];
  const [sortedBy, setSortedBy] = useState<string>(sortAvailable[0]);

  const sortedMountains = useMemo<Mountain[]>(() => {
    return mountains.sort(sortMountain(sortedBy));
  }, [sortedBy, mountains]);

  const changeSortedBy: (value: string) => void = (value: string) => {
    setSortedBy(value);
  };

  return { sortedMountains, sortedBy, changeSortedBy, sortAvailable };
};

export default useSortedMountains;
