radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
    receivedNumber,
    1024
    )
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(input.acceleration(Dimension.X))
})
