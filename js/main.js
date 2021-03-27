import {getAds} from './data.js';
import {initForm} from './form.js';
import {renderCards} from './render-cards.js';

renderCards(getAds());
initForm();
