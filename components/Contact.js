var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired,
    },

    render: function() {
        return (
            <div className={'contactItem'}>
                <img className={'contactImage'} src={'https://placehold.it/100x100'}/>
                <p className={'contactLabel'}>
                    Imię: {this.props.item.firstName}
                </p>
                <p className={'contactLabel'}>
                    Nazwisko: {this.props.item.lastName}>
                </p>
                <a href={'mailto' + this.props.item.email}>
                    {this.props.item.email}
                </a>
            </div>
        )
    }
});