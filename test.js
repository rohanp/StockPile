var Stream = require('iamdhruv4');
var stream = new Stream({
    consumer_key: 'ANBdEwQodg5eYrphcENODg',
    consumer_secret: '1goRaDYOi0AHjuoJbTXz7oWxAYkLC62rGucEqqOc8w',
    access_token_key: '2272578080-FTO7ygUXVZQrukL1TWl7iaRaiXL1fwIydC8MxVy',
    access_token_secret: 'xvbSqCU7yGHuKzOkFONDkovvHOvz3ppjXIsDmIfgZXkeM'
});

//create stream
stream.stream();

var params = {
    with: 'iamdhruv4'
}
//create stream
stream.stream(params);

//listen stream data
stream.on('data', function(json) {
  console.log(json);
});