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
    .filter(filterBy(selectedDatasources, 1))
    .filter(filterBy(selectedCampaigns, 2))
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
  return {
    dates,
    clicks,
    impressions
  };
};
