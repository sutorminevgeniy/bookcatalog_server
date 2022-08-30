import state from './redux/state'
import {addReview} from './redux/state'

import {renderEntireTree} from './render'

renderEntireTree(state, addReview);
