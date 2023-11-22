input.onButtonPressed(Button.A, function () {
    hodnota += 1
})
input.onButtonPressed(Button.B, function () {
    hodnota += -1
})
let hodnota = 0
basic.forever(function () {
    led.plotBarGraph(
    hodnota,
    19,
    true
    )
})
