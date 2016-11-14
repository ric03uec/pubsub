var amqp = require('amqp');
var util = require('util');

//var connection = amqp.createConnection({ url: "amqp://SHIPPABLETESTUSER:SHIPPABLETESTPASS@172.17.42.1:5672/shippableRoot" });
var connection = amqp.createConnection({ url: "amqp://jiyavovuwedabube:vqcC5TN_89YYmNIq@172.17.42.1:5672/shippable" });
//var connection = amqp.createConnection({ url: "amqp://xetedoyufuqeroji:AEeSSOpcO4gA88FZ@172.17.42.1:5672/shippable" });
var listenQueue="5824f76b710e2d1100754626.process";
//var listenQueue="5824f76d710e2d1100754630.process";

// Wait for connection to become established.
connection.on('ready', function () {
  // Use the default 'amq.topic' exchange
  console.log('ready')

  var queueParams = {
    passive: true
  };
  connection.queue(listenQueue, queueParams, function(queue) {
    console.log('queue declared')
    queue.bind('shippableEx', listenQueue);
    var queueOpts = {
      ack: true,
      prefetchCount:1
    };
    queue.subscribe(queueOpts, function(message) {
      console.log(message.data.toString())
    });
  });
});
