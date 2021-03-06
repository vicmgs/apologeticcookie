import 'aframe';
import 'aframe-animation-component';
import 'aframe-text-component';
import { Entity, Scene } from 'aframe-react';
import React from 'react';
import Ceiling from './Ceiling';
import ArtMapper from './ArtMapper';

const TestScene = ({arts}) => (
  <Scene>
    <Entity id="camera" active camera position="-8 3.5 0" rotation="0 -90 0" wasd-controls="acceleration: 200" look-controls />

    <Entity
      material={{ src: 'url(assets/skybox.jpg)'}}
      geometry={{ primitive: 'sphere', radius: 400 }}
      scale="1 1 -1"
      rotation='0 90 0'/>

    <Entity
      id="floor"
      geometry={`primitive: plane; height: 25; width: ${arts.length * 8 + 20}`}
      position={`${(arts.length * 8) / 2} 0 0`}
      rotation="-90 0 0"
      material="src: url(../assets/concrete5.jpg); repeat: 25 2"
    />

    <Entity
      id="grass"
      geometry='primitive: plane; height: 300; width: 300'
      position='0 -.1 0'
      rotation="-90 0 0"
      material="src: url(../assets/grass.jpg); repeat: 25 25"
    />

    <Ceiling position={`${(arts.length * 8) / 2} 18 0`} arts={arts}/>

    <Entity
      id="leftWall"
      geometry={`primitive: plane; height: 25; width: ${arts.length * 8 + 20}`}
      position={`${(arts.length * 8) / 2} 12.5 -9`}
      rotation="0 0 0"
      material={`side: double; src: url(../assets/concrete5.jpg); repeat: 25 ${(arts.length * 8 + 20) / 20}; metalness: 0.5`}
    />

    <Entity
      id="rightWall"
      geometry={`primitive: plane; height: 25; width: ${arts.length * 8 + 20}`}
      position={`${(arts.length * 8) / 2} 12.5 9`}
      rotation="0 0 0"
      material={`side: double; src: url(../assets/concrete5.jpg); repeat: 25 ${(arts.length * 8 + 20) / 20}; metalness: 0.5`}
    />

    <Entity
      light="type: spot; angle: 100; color: blue; penumbra: 1; intensity: 100"
      look-at=""
      rotation="90 270 0"
      position="62 30 0"/>

    <Entity
      light="type: spot; angle: 100; color: blue; penumbra: 1; intensity: 100"
      look-at=""
      rotation="90 270 0"
      position="100 30 0"/>  

    <Entity
      light="type: spot; angle: 100; color: blue; penumbra: 1; intensity: 100"
      look-at=""
      rotation="90 270 0"
      position="100 30 0"/>  


    <Entity light="type: hemisphere; color: #999; groundColor: #666; intensity: 2"/>

    <ArtMapper arts={ arts } />
  </Scene>
);

TestScene.propTypes = {
  arts: React.PropTypes.array.isRequired
};

export default TestScene;

