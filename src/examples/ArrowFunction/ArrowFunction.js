var scopePerservingExample = {
    text: 'Property from lexical scope',
    run: function name() {
        var _this = this;
        setTimeout(function () {
            alert(_this.text);
        }, 1000);
    }
};
scopePerservingExample.run();
