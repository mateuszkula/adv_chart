import React from "react";
import axios from "axios";

import { Charts, Filters } from "components/molecules";
import { Loader } from "components/atoms";

import { DATA_URL } from "../../../constants";
import { ChartsTemplate } from "components/templates";

export const ChartsPage = () => {
  const [campaignsForSelect, setCampaignsForSelect] = React.useState();
  const [datasourcesForSelect, setDatasourcesForSelect] = React.useState();
  const [rawData, setRawData] = React.useState();
  const [actualData, setActualData] = React.useState();

  const [selectedCampaigns, setSelectedCampaings] = React.useState([]);
  const [selectedDatasources, setSelectedDatasources] = React.useState([]);

  React.useEffect(() => {
    const fetch = async () => {
      const result = await axios.get(DATA_URL);

      const rawData = result.data;
      const rawRows = rawData.split("\n").slice(1);

      const datasources = new Set();
      const campaigns = new Set();
      const splittedRowData = rawRows.map(row => {
        if (row) {
          const rowAsArray = row.split(",");
          datasources.add(rowAsArray[1]);
          campaigns.add(rowAsArray[2]);
          return rowAsArray;
        }
      });
      setCampaignsForSelect(
        Array.from(campaigns).map(campaign => {
          return {
            value: campaign,
            label: campaign
          };
        })
      );

      setDatasourcesForSelect(
        Array.from(datasources).map(datasource => {
          return {
            value: datasource,
            label: datasource
          };
        })
      );
      setRawData(splittedRowData);
    };
    fetch();
  }, []);

  React.useEffect(() => {
    if (rawData) {
      const customFilter = (pickedValues, index) => element => {
        if (element) {
          return pickedValues.length
            ? pickedValues.includes(element[index])
            : true;
        } else {
          return false;
        }
      };

      const dates = [];
      const clicks = [];
      const impressions = [];

      rawData
        .filter(customFilter(selectedDatasources, 1))
        .filter(customFilter(selectedCampaigns, 2))
        .forEach(element => {
          if (dates.includes(element[0])) {
            clicks[clicks.length - 1] += Number(element[3]);
            impressions[impressions.length - 1] += Number(element[4]);
          } else {
            dates.push(element[0]);
            clicks.push(Number(element[3]));
            impressions.push(Number(element[4]));
          }
        });
      setActualData({
        dates,
        clicks,
        impressions
      });
    }
  }, [rawData, selectedDatasources, selectedCampaigns]);
  return actualData ? (
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
      charts={
        <Charts
          dates={actualData.dates}
          clicks={actualData.clicks}
          impressions={actualData.impressions}
        />
      }
    />
  ) : (
    <Loader />
  );
};
