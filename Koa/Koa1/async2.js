
app.use(function *() {
    var cart = yield cart.findByUserId(userID);

    this.body = yield commodity.findById(cart[0].id);
})

