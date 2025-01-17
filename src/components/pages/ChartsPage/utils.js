const INDEXES = {
  DATE: 0,
  DATASOURCE: 1,
  CAMPAIGN: 2,
  CLICKS: 3,
  IMPRESSIONS: 4
};

export const filterBy = (pickedValues, index) => element => {
  if (element) {
    return pickedValues.length ? pickedValues.includes(element[index]) : true;
  } else {
    return false;
  }
};

export const filterData = (
  rawDataRows,
  selectedCampaigns,
  selectedDatasources
) => {
  const dates = [];
  const clicks = [];
  const impressions = [];

  rawDataRows
    .filter(filterBy(selectedDatasources, INDEXES.DATASOURCE))
    .filter(filterBy(selectedCampaigns, INDEXES.CAMPAIGN))
    .forEach(element => {
      if (dates.includes(element[INDEXES.DATE])) {
        clicks[clicks.length - 1] += Number(element[INDEXES.CLICKS]);
        impressions[impressions.length - 1] += Number(
          element[INDEXES.IMPRESSIONS]
        );
      } else {
        dates.push(element[INDEXES.DATE]);
        clicks.push(Number(element[INDEXES.CLICKS]));
        impressions.push(Number(element[INDEXES.IMPRESSIONS]));
      }
    });
  return {
    dates,
    clicks,
    impressions
  };
};

export const transformRawData = rawRows => {
  const datasources = new Set();
  const campaigns = new Set();
  const splittedRowData = [];

  rawRows.forEach(row => {
    if (row) {
      const rowAsArray = row.split(",");
      datasources.add(rowAsArray[1]);
      campaigns.add(rowAsArray[2]);
      splittedRowData.push(rowAsArray);
    }
  });

  const campaignsForSelect = Array.from(campaigns).map(campaign => {
    return {
      value: campaign,
      label: campaign
    };
  });

  const datasourcesForSelect = Array.from(datasources).map(datasource => {
    return {
      value: datasource,
      label: datasource
    };
  });
  return {
    splittedRowData,
    campaignsForSelect,
    datasourcesForSelect
  };
};
