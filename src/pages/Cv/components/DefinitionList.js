import { css } from "@emotion/core";
import React from "react";
import PropTypes from "prop-types";

const definitionList = css({
  dt: {
    float: "left"
  },

  dd: {
    paddingLeft: "30mm"
  }
});

const DefinitionList = ({ children }) => (
  <dl css={definitionList}>
    {children.map((definition, key) => (
      <React.Fragment key={key}>
        <dt>
          <strong>{definition.title}</strong>
        </dt>
        <dd>{definition.definition}</dd>
      </React.Fragment>
    ))}
  </dl>
);

DefinitionList.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.any.isRequired,
      definition: PropTypes.any.isRequired
    })
  ).isRequired
};

export default DefinitionList;
