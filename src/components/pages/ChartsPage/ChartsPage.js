import React from "react";
import axios from "axios";

import { Charts, Filters } from "components/molecules";
import { Loader } from "components/atoms";

import { DATA_URL } from "../../../constants";
import { filterData, transformRawData } from "./utils";
import { ChartsTemplate } from "components/templates";

export const ChartsPage = () => {
  const [campaignsForSelect, setCampaignsForSelect] = React.useState();
  const [datasourcesForSelect, setDatasourcesForSelect] = React.useState();
  const [rawSplittedRows, setRawSplittedRows] = React.useState();
  const [filteredData, setFilteredData] = React.useState();

  const [selectedCampaigns, setSelectedCampaings] = React.useState([]);
  const [selectedDatasources, setSelectedDatasources] = React.useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      const result = await axios.get(DATA_URL);

      const rawData = result.data;
      const rawDataInRows = rawData.split("\n").slice(1);

      const {
        splittedRowData,
        datasourcesForSelect,
        campaignsForSelect
      } = transformRawData(rawDataInRows);

      setCampaignsForSelect(campaignsForSelect);
      setDatasourcesForSelect(datasourcesForSelect);
      setRawSplittedRows(splittedRowData);
    };
    fetch();
  }, []);

  React.useEffect(() => {
    if (rawSplittedRows) {
      setFilteredData({
        ...filterData(rawSplittedRows, selectedCampaigns, selectedDatasources)
      });
    }
  }, [rawSplittedRows, selectedDatasources, selectedCampaigns]);

  return filteredData ? (
    <ChartsTemplate
      filters={
        <Filters
          datasources={datasourcesForSelect}
          campaigns={campaignsForSelect}
          onCampaignsChange={values => {
            setSelectedCampaings(
              values ? values.map(value => value.value) : []
            );
          }}
          onDatasourcesChange={values => {
            setSelectedDatasources(
              values ? values.map(value => value.value) : []
            );
          }}
        />
      }
      charts={<Charts {...filteredData} />}
    />
  ) : (
    <Loader />
  );
};
