import { Paper } from '@material-ui/core';
import React from 'react';
import { Container, Col, Image, Row } from 'react-bootstrap';
import LukePicture from './img/luke-pic.jpg';

export default function About() {
  return (
    <div>
      <Container fluid className='page-container '>
        <Row>
          <Col
            xl={6}
            lg={12}
            md={12}
            sm={12}
            className='d-flex align-self-start justify-content-center'
          >
            <Image src={LukePicture} />
          </Col>
          <Col
            xl={6}
            lg={12}
            md={12}
            sm={12}
            className='d-flex align-self-center justify-content-center p-4'
          >
            <Paper
              elevation={3}
              className='p-3 bg-light'
              style={{ width: '80%' }}
            >
              <h1>About</h1>
              <p>
                Alabama native Luke Weathington has been active on the Atlanta
                music scene for a decade. Mr. Weathington graduated from
                Kennesaw State University with a degree in Saxophone Performance
                in 2012; and graduated from Georgia State University with a
                degree in Jazz Studies in 2015. During his course work at KSU,
                Luke was a member and composer of the original music group
                “Sub-list” which was selected to perform at the JEN conference
                in 2013. His works are featured on the School of Music CD
                released in 2013. He was also selected to be a member of the
                Alumni Combo that played for the 10th anniversary of the Bailey
                Performing Arts Center in 2017. While at GSU, Luke held a
                teaching assistantship position and was in charge of combos as
                well as teaching co-teaching improv classes. Mr. Weathington’s
                teachers were Dr. Mitchel Henson, Sam Skelton, and Mace Hibbard.
                <br />
                <br />
                As a woodwind doubler, Weathington is well versed in many genres
                of music. His ability to play saxophone, clarinet, and flute has
                kept him very busy in musical theaters around Atlanta, most
                notably the Fox Theater, Alliance Theatre, Lyric Theater, and
                City Springs Theatre.
                <br />
                <br />
                As a sideman; Luke has had the pleasure of performing with The
                Temptations, The Glen Miller Orchestra, John Driskell Hopkins,
                Omid, Johnnie Mathis, Carmen Bradford, Francine Reed, Freddie
                Cole, Jackie Burnes, Alan Vache, Matt Cattigub, The Macon Pops
                Orchestra, The Cobb Symphony Orchestra Jazz, Joe Gransden’s Big
                Band, Atlanta All-Star Big Band, Atlanta Latin Jazz Orchestra,
                The Douglas Cameron Orchestra, and The Due West Celebration
                Orchestra. <br />
                <br />
                Weathington is proud to be a member of the Georgia Symphony
                Orchestra JAZZ! since 2013; as well as a founding member of the
                original big band music group Rebel Big Band. <br />
                <br />
                Luke is currently Artist-in-Residence at Kennesaw State
                University and is a member of the Parliament Faculty Jazz
                Ensemble as well as the Faculty/Student combo that has performed
                at notable jazz clubs in Atlanta. He also served as Professor of
                Woodwinds at Miles College 2016 to 2017. Luke is also a proud
                member of the Atlanta Federation of Musicians.
              </p>
            </Paper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
