radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
    receivedNumber,
    2048
    )
})
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(input.acceleration(Dimension.X) + input.acceleration(Dimension.Y))
})
