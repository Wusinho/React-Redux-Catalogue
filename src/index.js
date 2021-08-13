import configureAppStore from './store/configureStore';
import { addBook } from './store/books';

const store = configureAppStore();
console.log(store);
store.dispatch(addBook({ title: 'title' }));
console.log(store.getState());

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
