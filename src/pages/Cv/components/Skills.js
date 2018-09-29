import { css } from 'emotion';
import React from 'react';
import PropTypes from 'prop-types';

const container = css({
  overflowX: 'auto',
  padding: '0 2rem 1rem 2rem',
  margin: '0 -2rem 1rem -2rem'
});

const table = css({
  borderCollapse: 'collapse',
  fontSize: 12,
  tableLayout: 'fixed',
  width: '200%',

  '& + &': {
    marginTop: '2rem'
  },

  'th, td': {
    padding: '0 2rem',
    whiteSpace: 'nowrap',

    '&:first-child': {
      paddingLeft: 0
    },

    '&:last-child': {
      paddingRight: 0
    }
  },

  '@media (min-width: 210mm)': {
    width: '100%'
  }
});

const thead = css({
  fontSize: '1rem',
  fontWeight: 600,
  textAlign: 'left',

  th: {
    borderBottom: '1px solid hsl(0,0%,30%)',
    verticalAlign: 'baseline',

    '&:first-child': {
      fontSize: 14
    }
  }
});

const Skills = ({ children }) => (
  <div className={container}>
    {children.map(skillset => (
      <table key={skillset.title} className={table}>
        <thead className={thead}>
          <tr>
            <th>{skillset.title}</th>
            <th>Self-assesment</th>
            <th>Last used</th>
            <th>Experience (years)</th>
          </tr>
        </thead>
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
      </table>
    ))}
  </div>
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
