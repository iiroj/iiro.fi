import React from 'react';
import PropTypes from 'prop-types';
import { hot } from 'react-hot-loader';

import Back from '../../components/Back';
import Fraktio from '../../components/Fraktio/Logo';
import Picture from '../../components/Picture';
import baskerville from '../../styles/baskerville';

import { container, heading, page, section } from './styles';
import { DefinitionList, Header, SelfAssesments, Skills } from './components';

const Heading = ({ page }) => (
  <aside className={heading}>
    <Fraktio colored />
    <span>
      <span>Iiro Jäppinen’s CV, </span>
      <time dateTime="2018-10-01">October 1st, 2018</time>
      {page && <span> — {page}</span>}
    </span>
  </aside>
);

Heading.propTypes = {
  page: PropTypes.string
};

const Cv = () => (
  <>
    <Back />

    <main className={container}>
      <div className={page}>
        <Heading page="1/3" />

        <Header name="Iiro Jäppinen" picture={<Picture />}>
          I’m an UX <span className={baskerville}>&</span> UI designer, and a front-end developer with a passion for
          precise pixels and accessible solutions. I aim to create real solutions to actual problems with a design that
          stands on its own but doesn’t need introduction.
        </Header>

        <section className={section}>
          <h2>Basic Info</h2>
          <div>
            <p>
              4 Years of professional design experience with another 4 years of freelancer design experience. Two years
              of front-end development experience. Studied Mathematics and Genetics at the University of Helsinki.
            </p>
          </div>
        </section>

        <section className={section}>
          <h2>Language Skills</h2>
          <div>
            <DefinitionList>
              {[
                {
                  title: 'English',
                  definition: (
                    <>
                      Excellent (spoken <span className={baskerville}>&</span> written)
                    </>
                  )
                },
                {
                  title: 'Finnish',
                  definition: 'Native'
                }
              ]}
            </DefinitionList>
          </div>
        </section>

        <section className={section}>
          <h2>Education</h2>
          <div>
            <ul>
              <li>
                <strong>Bachelor of Science</strong>
                <em> (Did not graduate)</em>
                <p>
                  University of Helsinki, <time dateTime="2009-09">2009/09–</time>
                </p>
                <p>Thesis subject: Studying Evolution in the Snowdrift Game With Adaptive Dynamics</p>
                <p>197 credits in Biomathematics; minor in Genetics</p>
              </li>
              <li>
                <strong>Matriculation</strong>
                <p>
                  Helsinki Upper Secondary School of Visual Arts,{' '}
                  <time dateTime="2006-09/2009-06">2006/08–2009/06</time>
                </p>
              </li>
            </ul>
          </div>
        </section>

        <section className={section}>
          <h2>Career History</h2>
          <div>
            <ul>
              <li>
                <p>
                  <strong>Designer</strong>, Fraktio
                </p>
                <p>
                  Helsinki, <time dateTime="2017">2017–</time>
                </p>
                <p>
                  Design, Front-End Development, Project Management and Customer Relations for various clients both
                  on-site and remote.
                </p>
              </li>

              <li>
                <p>
                  <strong>
                    UX <span className={baskerville}>&</span> Designer
                  </strong>
                  , Verkkokauppa.com
                </p>
                <p>
                  Helsinki, <time dateTime="2014/2017">2014–2017</time>
                </p>
                <p>
                  In-house design and project management for a large corporation. Main responsibilites included
                  application interface, process and workflow design for both internal and public use.
                </p>
              </li>

              <li>
                <p>
                  <strong>
                    UX <span className={baskerville}>&</span> Designer
                  </strong>
                  , Humble Bundle
                </p>
                <p>
                  San Francisco, <time dateTime="2014/2017">2011–2014</time>
                </p>
                <p>Remote freelance website and brand design. Later, on-site lead of design on H1B visa.</p>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className={page}>
        <Heading page="2/3" />

        <section className={section}>
          <h2>Skills</h2>
          <div>
            <Skills>
              {[
                {
                  title: 'Design',
                  data: [
                    {
                      title: 'User Experience',
                      assesment: 'Expert',
                      used: 'Constantly',
                      years: 8
                    },
                    {
                      title: 'User Interface',
                      assesment: 'Expert',
                      used: 'Constantly',
                      years: 8
                    },
                    {
                      title: 'Logo and Identity',
                      assesment: 'Senior',
                      used: 'Constantly',
                      years: 8
                    },
                    {
                      title: 'Prototyping',
                      assesment: 'Senior',
                      used: 'Constantly',
                      years: 5
                    },
                    {
                      title: 'A/B Testing',
                      assesment: 'Professional',
                      used: '2016',
                      years: 3
                    }
                  ]
                },
                {
                  title: 'Languages',
                  data: [
                    {
                      title: 'ECMAScript',
                      assesment: 'Professional',
                      used: 'Constantly',
                      years: 3
                    },
                    {
                      title: 'Typescript',
                      assesment: 'Professional',
                      used: 'Constantly',
                      years: 1
                    }
                  ]
                },
                {
                  title: 'Frameworks',
                  data: [
                    {
                      title: 'React',
                      assesment: 'Senior',
                      used: 'Constantly',
                      years: 3
                    },
                    {
                      title: 'CSS-in-JS (styling)',
                      assesment: 'Senior',
                      used: 'Constantly',
                      years: 2
                    },
                    {
                      title: (
                        <>
                          Redux <span className={baskerville}>&</span> redux-saga
                        </>
                      ),
                      assesment: 'Professional',
                      used: 'Constantly',
                      years: 1
                    }
                  ]
                },
                {
                  title: 'Deployment',
                  data: [
                    {
                      title: 'Docker',
                      assesment: 'Professional',
                      used: 'Constantly',
                      years: 2
                    },
                    {
                      title: 'AWS',
                      assesment: 'Professional',
                      used: 'Constantly',
                      years: 2
                    },
                    {
                      title: 'Heroku',
                      assesment: 'Professional',
                      used: 'Constantly',
                      years: 1
                    },
                    {
                      title: 'Google Cloud',
                      assesment: 'Professional',
                      used: 'Constantly',
                      years: 1
                    }
                  ]
                }
              ]}
            </Skills>
            <SelfAssesments />
          </div>
        </section>

        <section className={section}>
          <h2>Certificates</h2>
          <div>
            <ul>
              <li>
                <p>
                  <strong>Certified Scrum Product OwnerⓇ</strong>
                </p>
                <p>
                  <em>
                    Valid <time dateTime="2016-06/2018-06">June 2016 – June 2018</time>
                  </em>
                </p>
              </li>
              <li>
                <p>
                  <strong>Certified ScrumMasterⓇ</strong>
                </p>
                <p>
                  <em>
                    Valid <time dateTime="2016-03/2018-03">March 2016 – March 2018</time>
                  </em>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  </>
);

export default hot(module)(Cv);
