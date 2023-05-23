import logo5000 from '../../assets/logo5000.png';
import logo6QuiPrend from '../../assets/logo6QuiPrend.png';
import logoPapayoo from '../../assets/logoPapayoo.png';

export default function getLogo(name) {
  switch (name) {
    case '6 qui prend':
      return logo6QuiPrend;
    case '5000':
      return logo5000;
    case 'Papayoo':
      return logoPapayoo;
    default:
      return null;
  }
}
