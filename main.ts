basic.showString("E1")
radio.setGroup(1)
basic.forever(function () {
    radio.sendNumber(input.rotation(Rotation.Pitch))
})
