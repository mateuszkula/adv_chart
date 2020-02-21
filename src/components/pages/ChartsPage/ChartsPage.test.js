import "jest-styled-components";

import { filterBy, filterData, transformRawData } from "./utils";

// [ date, datasource, campaign, clicks, impressions]
const fakeRawData = [
  "1.1.2020,AAA,ccc,1,1",
  "1.1.2020,AAA,ddd,2,3",
  "1.1.2020,AAA,eee,1,1",
  "1.1.2020,BBB,ccc,2,3",
  "1.1.2020,BBB,ddd,1,1",
  "1.1.2020,BBB,eee,2,3",
  "2.1.2020,AAA,ccc,1,1",
  "2.1.2020,AAA,ddd,2,3",
  "2.1.2020,AAA,eee,1,1",
  "2.1.2020,BBB,ccc,2,3",
  "2.1.2020,BBB,ddd,1,1",
  "2.1.2020,BBB,eee,2,3"
];

const fakeData = fakeRawData.map(element => element.split(","));

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
  it("should return object with correctly filtered data", () => {
    const filteredData = filterData(fakeData, ["ccc", "ddd"], ["AAA"]);

    expect(filteredData.dates).toEqual(["1.1.2020", "2.1.2020"]);
    expect(filteredData.clicks).toEqual([3, 3]);
    expect(filteredData.impressions).toEqual([4, 4]);
  });
});

describe("ChartsPage - utils - transformRawData", () => {
  it("should return object with correctly filtered data", () => {
    const {
      splittedRowData,
      datasourcesForSelect,
      campaignsForSelect
    } = transformRawData(fakeRawData);

    expect(splittedRowData).toEqual(fakeData);
    expect(datasourcesForSelect).toEqual([
      { label: "AAA", value: "AAA" },
      { label: "BBB", value: "BBB" }
    ]);
    expect(campaignsForSelect).toEqual([
      { label: "ccc", value: "ccc" },
      { label: "ddd", value: "ddd" },
      { label: "eee", value: "eee" }
    ]);
  });
});
