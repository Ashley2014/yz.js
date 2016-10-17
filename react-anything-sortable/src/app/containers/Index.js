


var browserHistory=ReactRouter.browserHistory;
let Link=ReactRouter.Link;

var Index = React.createClass({
    getInitialState: function() {

        return {

        }
    },



    componentDidMount:function(){
        const { dispatch } = this.props;

    },

    render: function() {
        return (
            <div>
                index
            </div>
        )
    }
});

function mapStateToProps(state) {
    const {}=state;
    return {

    }
}

export default ReactRedux.connect(mapStateToProps)(Index)


