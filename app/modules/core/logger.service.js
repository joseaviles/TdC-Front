var logger = angular.module('transporteApp');

logger
    .config([
        '$provide',
        'configurationProvider',
        function ($provide, configurationProvider) {

            var logConfig = configurationProvider.$get().logueo;

            $provide.decorator('$log', [
                '$delegate',
                function logDecorator($delegate) {

                    var myLog = {
                        warn: function (params) {
                            log('warn', params);
                        },
                        error: function (params) {
                            log('error', params);
                        },
                        info: function (params) {
                            log('info', params);
                        },
                        debug: function (params) {
                            log('debug', params);
                        },
                        log: function (params) {
                            log('log', params);
                        },
                        stack: []
                    };

                    function log(type, params) {
                        if (logConfig[type])
                            if (typeof params === 'object') {
                                if (params.length) {
                                    for (var i = 0; i < params.length; i++) {
                                        let eventLogDateTime = moment(new Date()).format('LLL');
                                        if (console && console[type]) console[type](eventLogDateTime + ': ' + params[i].toString());
                                        myLog.stack.push({
                                            type: type,
                                            time: eventLogDateTime,
                                            message: params[i].toString()
                                        });
                                    }
                                }
                                else {
                                    let eventLogDateTime = moment(new Date()).format('LLL');
                                    params.eventLogDateTime = eventLogDateTime;
                                    if (console && console[type]) console[type](params);
                                }
                            }
                            else if (typeof params === 'string') {
                                let eventLogDateTime = moment(new Date()).format('LLL');
                                if (console && console[type]) console[type](eventLogDateTime + ': ' + params.toString());
                            }
                    }

                    return myLog;
                }
            ]);
        }
    ]);
