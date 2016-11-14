var amqp = require('amqp');

//var connection = amqp.createConnection({ url: "amqp://SHIPPABLETESTUSER:SHIPPABLETESTPASS@172.17.42.1:5672/shippableRoot" });
var connection = amqp.createConnection({ url: "amqp://jiyavovuwedabube:vqcC5TN_89YYmNIq@172.17.42.1:5672/shippable" });
//var publishQueue="systemNodes.process";
var publishQueue="5824f76b710e2d1100754626.process";
//var publishQueue="5824f76d710e2d1100754630.process";

// Wait for connection to become established.
connection.on('ready', function () {
  // Use the default 'amq.topic' exchange
  console.log(arguments)
  console.log('ready')
  var exchangeParams = {
    type: 'topic',
    durable: true,
    passive: true,
    autoDelete: false,
    confirm: true
  };

  //confirm: true
  connection.exchange('shippableEx', exchangeParams, function(exchange){
    console.log('connected.............')
    ///console.log(arguments)
    var message = {data: "some random message"};

    //exchange.publish('barge.acs', JSON.stringify(message), function(){
    exchange.publish(publishQueue, JSON.stringify(message), function(){
      console.log('published.............')
      console.log(arguments)

    });
  });
});
