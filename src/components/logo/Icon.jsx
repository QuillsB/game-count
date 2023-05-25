import cat from '../../assets/userIcons/cat-icon.png';
import darth from '../../assets/userIcons/darth-vader-icon.png';
import dino from '../../assets/userIcons/dino-icon.png';
import dog from '../../assets/userIcons/dog-icon.png';
import gandalf from '../../assets/userIcons/gandalf-icon.png';
import link from '../../assets/userIcons/link-icon.png';
import sonic from '../../assets/userIcons/sonic-icon.png';
import predator from '../../assets/userIcons/predator-icon.png';

export default function getIcon(name) {
  switch (name) {
    case 'cat':
      return cat;
    case 'darth':
      return darth;
    case 'dino':
      return dino;
    case 'dog':
      return dog;
    case 'gandalf':
      return gandalf;
    case 'link':
      return link;
    case 'sonic':
      return sonic;
    case 'predator':
      return predator;
    default:
      return null;
  }
}
