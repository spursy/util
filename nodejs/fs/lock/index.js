var locker = require('./locker')

locker.lock(function (err) {
  if (err) console.log("err:::" + err);
  console.log('locked')

  locker.unlock(function () {
    console.log('unlocked')
  })
})
