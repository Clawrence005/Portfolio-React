import React from 'react';
import { Grid } from '@material-ui/core';
import LandingSegment from '../../components/LandingSegment';
import Banner from '../../components/Banner';
import Portrait from '../../components/Portrait';
import Blurb from '../../components/Blurb';
import './styles.css';

function Home() {
  return (<div className="clearfix">
    <LandingSegment>
      <Banner>
        Title
        </Banner>

      <Blurb>
        Who I am. Existing in Austin i am a
        Maker
      </Blurb>
      <Portrait />
      <Blurb>
        fighting against entropy i organize chaos.
     </Blurb>
      <Blurb>
        destruction /is/
        creation
      </Blurb>

    </LandingSegment>
    <LandingSegment>
      <Banner>
        other Thing
      </Banner>
    </LandingSegment>
    <LandingSegment>
      <Banner>
        Another Thing
      </Banner>
    </LandingSegment>
  </div>

  );
}

export default Home;