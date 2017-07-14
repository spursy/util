const delegate = require('delegates');

    var obj = {
      settings: {
        env: 'development'
      }
    };

    delegate(obj, 'settings').fluent('env');

    obj.env().should.equal('development');
    obj.env('production').should.equal(obj);
    obj.settings.env.should.equal('production');