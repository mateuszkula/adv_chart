import "jest-styled-components";

import { filterBy, filterData } from "./utils";

describe("ChartsPage - utils - filterBy", () => {
  it("should return true if checked value is in range of picked values", () => {
    const pickedValues = ["a", "b", "c"];
    const customFilter = filterBy(pickedValues, 0);

    expect(customFilter(["a"])).toBe(true);
  });

  it("should return false if checked value is out of range of picked values", () => {
    const pickedValues = ["a", "b", "c"];
    const customFilter = filterBy(pickedValues, 0);

    expect(customFilter(["d"])).toBe(false);
  });
});

describe("ChartsPage - utils - filterData", () => {
  // [ date, datasource, campaign, clicks, impressions]
  const fakeData = [
    ["1.1.2020", "AAA", "ccc", 1, 1],
    ["1.1.2020", "AAA", "ddd", 2, 3],
    ["1.1.2020", "AAA", "fff", 1, 1],
    ["1.1.2020", "BBB", "ccc", 2, 3],
    ["1.1.2020", "BBB", "ddd", 1, 1],
    ["1.1.2020", "BBB", "fff", 2, 3],
    ["2.1.2020", "AAA", "ccc", 1, 1],
    ["2.1.2020", "AAA", "ddd", 2, 3],
    ["2.1.2020", "AAA", "fff", 1, 1],
    ["2.1.2020", "BBB", "ccc", 2, 3],
    ["2.1.2020", "BBB", "ddd", 1, 1],
    ["2.1.2020", "BBB", "fff", 2, 3]
  ];

  it("should return object with correctly filtered data", () => {
    const filteredData = filterData(fakeData, ["ccc", "ddd"], ["AAA"]);

    expect(filteredData.dates).toEqual(["1.1.2020", "2.1.2020"]);
    expect(filteredData.clicks).toEqual([3, 3]);
    expect(filteredData.impressions).toEqual([4, 4]);
  });
});
