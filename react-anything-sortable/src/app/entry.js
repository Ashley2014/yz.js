import Index from './containers/Index'

import store from './store'

var Router=ReactRouter.Router;
var Route=ReactRouter.Route;
var Redirect=ReactRouter.Redirect;
var IndexRoute=ReactRouter.IndexRoute;
var browserHistory=ReactRouter.browserHistory;
var Provider=ReactRedux.Provider;




let reactElement = document.getElementById('root');


let bodyClass='';
let htmlClass='';


const onUpdateRoute = () => {
    let path=hb.location.url('path');
    switch (true){
        case path=='/':
        case path=='':
            htmlClass=`index-html`;
            bodyClass=`index-body`;
            break;
        default:
            htmlClass=`user-html`;
            bodyClass=`user-body header-bar-body`;
            break;
    }
    $('html').addClass(htmlClass);
    $('body').addClass(bodyClass);
    
};
const onLeaveRoute = (prevState) => {
    $('html').removeClass(htmlClass);
    $('body').removeClass(bodyClass);
};



ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} onUpdate={onUpdateRoute}>
        <Route path="/" component={Index}   onLeave={onLeaveRoute}  />
    </Router>
  </Provider>,
    reactElement
);


