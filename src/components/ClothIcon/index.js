import React from 'react';
import Scarf from './scarf.png'
import Boots from './boots.png'
import Glasses from './glasses.png'
import Gloves from './gloves.png'
import Socks from './socks.png'
import Swimmingsuit from './swimmingsuit.png'
import Pijama from './pijama.png'
import Shorts from './shorts.png'
import Tshirt from './tshirt.png'
import Underwear from './bra.png'
import Umbrella from './umbrella.png'
import Spray from './spray.png'
import Jacket from './jacket.png'
import Coat from './coat.png'

const iconMapper = {
  'Scarf': Scarf,
  'Boots': Boots,
  'Gloves': Gloves,
  'Warm Socks': Socks,
  'Swimming Suit': Swimmingsuit,
  'Pijama': Pijama,
  'Socks': Socks,
  'Shorts': Shorts,
  'Tshirt': Tshirt,
  'Underwear': Underwear,
  'Umbrella or Raining Coat': Umbrella,
  'Coat': Coat,
  'Sun Glasses': Glasses,
  'Sun Screen': Spray,
  'Jacket': Jacket,
}

const ClothIcon = (props) => {
  return (
    <img alt={props.name} src={iconMapper[props.name]} widht={props.widht} height={props.height} style={props.style}/>
  );
};

export default ClothIcon;