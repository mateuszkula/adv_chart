import React from "react";
import PropTypes from "prop-types";

import * as S from "./ChartsTemplate.styles";

export const ChartsTemplate = ({ charts, filters }) => (
  <S.Wrapper>
    <div>{filters}</div>
    <div>{charts}</div>
  </S.Wrapper>
);

ChartsTemplate.propTypes = {
  filters: PropTypes.node,
  charts: PropTypes.node
};
