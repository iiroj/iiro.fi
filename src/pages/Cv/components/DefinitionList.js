import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Dl = styled.dl({
  dt: {
    float: "left"
  },

  dd: {
    paddingLeft: "30mm"
  }
});

const DefinitionList = ({ children }) => (
  <Dl>
    {children.map((definition, key) => (
      <React.Fragment key={key}>
        <dt>
          <strong>{definition.title}</strong>
        </dt>
        <dd>{definition.definition}</dd>
      </React.Fragment>
    ))}
  </Dl>
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
