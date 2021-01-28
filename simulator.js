function simulate(process, times) {
    var expected = 0;

    for (var i = 0; i < times; i++) {
        expected += process()/times;
    }

    return expected;
}