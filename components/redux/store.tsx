import {configureStore} from '@reduxjs/toolkit';

// import rootReducer bcoz usme hmare saare reducer combine ho k aa rhe hai
import rootReducer from './rootReducer';

const store = configureStore({
    // agr hum yha reducer ki jgah xyz likhenge toh header file mei ja k xyz ka data nikalenge
    reducer: rootReducer
});

export default store;