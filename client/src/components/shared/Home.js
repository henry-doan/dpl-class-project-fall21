import { HomeImg } from '../../styles/homeStyles';
import { Zoom, Fade, Flip  } from 'react-reveal';
import Spin from 'react-reveal/Spin';

const Home = () => (
  <>
    <Zoom bottom>
      <h1>Home Page</h1>
    </Zoom>
    <HomeImg src="https://images.unsplash.com/photo-1635107679809-2dcdea4b90e3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=927&q=80" />
    <Spin>
      <img src="https://images.unsplash.com/photo-1635099062891-3104824f31ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2340&q=80" width="100px" />
    </Spin>
    <Fade left>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus volutpat pharetra. Sed accumsan, mi quis aliquet auctor, nisi libero maximus dui, a commodo quam dolor eu sapien. Mauris massa augue, efficitur malesuada enim ut, fermentum scelerisque felis. Morbi eu vehicula magna. Donec eget eleifend tortor. In non lacus sit amet risus placerat efficitur. Mauris dignissim eros vel scelerisque commodo. In vitae risus non lorem tincidunt sagittis. Morbi eget consectetur libero. Morbi ac consectetur nunc. Nunc lacinia enim diam, vitae ultricies nibh accumsan eu. Proin pharetra ac velit porttitor auctor. Mauris quis sapien lobortis, lobortis lacus vitae, bibendum turpis. Pellentesque semper vitae odio sit amet dignissim.
      </p>
    </Fade>
    <Fade right>
      <p>
        Bacon ipsum dolor amet hamburger shoulder pork, kevin salami ribeye flank beef ground round pig. Turducken bacon meatloaf ball tip, fatback brisket tri-tip jowl ribeye doner. Pork biltong turducken spare ribs bacon brisket. Boudin sirloin tongue, short loin pork ham beef ribs alcatra spare ribs kielbasa chuck pork belly pancetta. Cow alcatra shank boudin kevin venison shankle pork salami.
      </p>
    </Fade>
    <Flip top>
      <p>
        Alcatra andouille meatloaf flank strip steak short loin. Capicola tail meatloaf jowl beef. Brisket turducken shoulder, prosciutto tri-tip jowl meatball flank. Sirloin t-bone sausage ham hock spare ribs pork. Tail leberkas rump buffalo. Jowl cow shoulder tenderloin. Filet mignon pork shoulder, jerky jowl strip steak rump landjaeger chicken spare ribs flank burgdoggen fatback ribeye.
      </p>
    </Flip>
  </>
)

export default Home;