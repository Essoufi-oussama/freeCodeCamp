import i18next from 'i18next';
import { SuperBlocks } from '../../../shared/config/superblocks';


export function getSuperBlockIntroForMap(superBlock: SuperBlocks): string {
  return i18next.t(`intro:${superBlock}.intro`)[0].substring(0, 120) + '...' ;
}
