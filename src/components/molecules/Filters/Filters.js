import React from "react";
import PropTypes from "prop-types";
import Select from "react-select";

import * as S from "./Filters.styles";

export const Filters = ({
  datasources,
  onDatasourcesChange,
  campaigns,
  onCampaignsChange
}) => (
  <S.Filters>
    <h2>Filter dimension values</h2>
    <S.FiltersSection>
      <S.FilterTitle>Filter by data source</S.FilterTitle>
      <Select
        classNamePrefix="select_datasources"
        isMulti={true}
        options={datasources}
        onChange={onDatasourcesChange}
      />
      <S.FilterTitle>Filter by campaigns</S.FilterTitle>
      <Select
        classNamePrefix="select_campaigns"
        isMulti={true}
        options={campaigns}
        onChange={onCampaignsChange}
      />
    </S.FiltersSection>
  </S.Filters>
);

Filters.propTypes = {
  children: PropTypes.node
};
