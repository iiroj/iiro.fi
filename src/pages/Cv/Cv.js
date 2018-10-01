import React from 'react';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';

import Back from '../../components/Back';
import Link from '../../components/Link';
import Picture from '../../components/Picture';
import baskerville from '../../styles/baskerville';

import { container, page, projects, section } from './styles';
import { DefinitionList, Heading, Header, SelfAssesments, Skills } from './components';

const Cv = () => (
  <>
    <Helmet>
      <title>CV of Iiro Jäppinen</title>
    </Helmet>

    <Back />

    <main className={container}>
      <div className={page}>
        <Heading page="1/3" />

        <Header name="Iiro Jäppinen" picture={<Picture />}>
          <p>
            I’m a UX <span className={baskerville}>&</span> UI designer, and a front-end developer with a passion for
            precise pixels and accessible interfaces. I aim to create real solutions to actual problems with a design
            that stands on its own but doesn’t need introduction.
          </p>
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
                  University of Helsinki, <time dateTime="2009-09">Sep 2009–</time>
                </p>
                <p>Thesis subject: Studying Evolution in the Snowdrift Game With Adaptive Dynamics</p>
                <p>197 credits in Biomathematics; minor in Genetics</p>
              </li>
              <li>
                <strong>Matriculation</strong>
                <p>
                  Helsinki Upper Secondary School of Visual Arts,{' '}
                  <time dateTime="2006-09/2009-06">Aug 2006 – Jun 2009</time>
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
                    UX <span className={baskerville}>&</span> UI Designer
                  </strong>
                  , Verkkokauppa.com
                </p>
                <p>
                  Helsinki, <time dateTime="2014/2017">2014–2017</time>
                </p>
                <p>
                  In-house design and project management for a large corporation. Main responsibilities included
                  application interface, process and workflow design for both internal and public use.
                </p>
              </li>

              <li>
                <p>
                  <strong>
                    UX <span className={baskerville}>&</span> UI Designer
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
                      title: 'TypeScript',
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
                    Valid <time dateTime="2016-06/2018-06">Jun 2016 – Jun 2018</time>
                  </em>
                </p>
              </li>
              <li>
                <p>
                  <strong>Certified ScrumMasterⓇ</strong>
                </p>
                <p>
                  <em>
                    Valid <time dateTime="2016-03/2018-03">Mar 2016 – Mar 2018</time>
                  </em>
                </p>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <div className={page}>
        <Heading page="3/3" />

        <section className={projects}>
          <h2>Selected Projects</h2>
          <div>
            <ul>
              <li>
                <h3>Pihlajalinna Digital Services</h3>
                <p>
                  Pihlajalinna is a large private and occupational health care provider. I configured Analytics,
                  designed web pages and internal tools, and developed them in an agile team consisting of Pihlajalinna
                  employees and other consultants.
                </p>
                <DefinitionList>
                  {[
                    {
                      title: 'Keywords',
                      definition: 'Sketch, Abstract, React, Typescript, Redux, Heroku, Docker'
                    },
                    {
                      title: 'Date',
                      definition: <time dateTime="2017-10/2018-08">Oct 2017 — Aug 2018</time>
                    },
                    {
                      title: 'Team size',
                      definition: '6–8'
                    }
                  ]}
                </DefinitionList>
              </li>
              <li>
                <h3>Brainstorming Tool and Software for Fountain Park</h3>
                <p>
                  Fountain Park creates tools for organizations to better define and reach their goals. I designed and
                  developed a new version of the brainstorming tool and its accompanying admin panel and editor.
                </p>
                <DefinitionList>
                  {[
                    {
                      title: 'Keywords',
                      definition: 'Sketch, React, Redux, Heroku'
                    },
                    {
                      title: 'Date',
                      definition: <time dateTime="2017-10/2018-08">Jul 2017 — Sep 2017</time>
                    },
                    {
                      title: 'Team size',
                      definition: '2'
                    }
                  ]}
                </DefinitionList>
              </li>
              <li>
                <h3>Verkkokauppa.com Investors Portal</h3>
                <p>
                  Verkkokauppa.com is the largest online retailer in Finland. I designed the{' '}
                  <Link
                    to="https://www.kauppalehti.fi/lehdistotiedotteet/verkkokauppacomin-sijoittajasivut-palkittiin-vuoden-2018-parhaina/LPuge6z7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    award-winning
                  </Link>{' '}
                  Investors Portal with the goal of offering easily accessible information and news about the
                  corporation.
                </p>
                <DefinitionList>
                  {[
                    {
                      title: 'Keywords',
                      definition: 'Sketch, React'
                    },
                    {
                      title: 'Date',
                      definition: <time dateTime="2017">2017</time>
                    },
                    {
                      title: 'Team size',
                      definition: '3'
                    }
                  ]}
                </DefinitionList>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  </>
);

export default hot(module)(Cv);
