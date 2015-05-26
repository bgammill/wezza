var WeatherImage = React.createClass({
    render: function() {
        return (
            <img src="sunny.png" />
        );
    }
});

var WeatherTemperature = React.createClass({
    render: function() {
        var that = this;
        return (
            <h3>{this.props.temperature}</h3>
        );
    }
});

var WeatherCity = React.createClass({
    render: function() {
        return (
            <h3>{this.props.zip}</h3>
        );
    }
});

var WeatherApp = React.createClass({
    getInitialState: function() {
        return {
            zip: '32703',
            temperature: '100'
        }
    },
    componentWillMount: function() {
        var that = this;
        
        $.get('http://api.openweathermap.org/data/2.5/weather?zip=' + this.state.zip).success(function(data) {
            that.setState({
                temperature: data['main']['temp']
            });
        });
    },
    render: function() {
        return (
            <div className="container">
                {/* city */}
                <div className="row">
                    <div className="col-xs-3 col-xs-offset-4">
                        <WeatherCity zip={this.props.zip} />
                    </div>
                </div>
                {/* temperature */}
                <div className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                        <WeatherTemperature />
                    </div>
                </div>
                {/* image */}
                <div className="row">
                    <div className="col-xs-6 col-xs-offset-3">
                        <WeatherImage />
                    </div>
                </div>
            </div>
        );
    }
});
        
React.render(
    <WeatherApp zip="32703" />,
    document.getElementById('content')
);