import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Container = styled.div({
  overflowX: "auto",
  padding: "0 2rem 1rem 2rem",
  margin: "0 -2rem 1rem -2rem"
});

const Table = styled.table({
  borderCollapse: "collapse",
  fontSize: 12,
  tableLayout: "fixed",
  width: "200%",

  "& + &": {
    marginTop: "2rem"
  },

  "th, td": {
    padding: "0 2rem",
    whiteSpace: "nowrap",

    "&:first-of-type": {
      paddingLeft: 0
    },

    "&:last-child": {
      paddingRight: 0
    }
  },

  "@media (min-width: 210mm)": {
    width: "100%"
  }
});

const Thead = styled.thead({
  fontSize: "1rem",
  fontWeight: 600,
  textAlign: "left",

  th: {
    borderBottom: "1px solid hsl(0,0%,30%)",
    verticalAlign: "baseline",

    "&:first-of-type": {
      fontSize: 14
    }
  }
});

const Skills = ({ children }) => (
  <Container>
    {children.map(skillset => (
      <Table key={skillset.title}>
        <Thead>
          <tr>
            <th>{skillset.title}</th>
            <th>Self-assesment</th>
            <th>Last used</th>
            <th>Experience (years)</th>
          </tr>
        </Thead>
        <tbody>
          {skillset.data.map(row => (
            <tr key={row.title}>
              <td>{row.title}</td>
              <td>{row.assesment}</td>
              <td>{row.used}</td>
              <td>{row.years}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    ))}
  </Container>
);

Skills.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.any.isRequired,
      data: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.any.isRequired,
          assesment: PropTypes.any.isRequired,
          used: PropTypes.any.isRequired,
          years: PropTypes.number.isRequired
        })
      ).isRequired
    })
  ).isRequired
};

export default Skills;
