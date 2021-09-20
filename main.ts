let detecteur_droit = 0
let detecteur_gauche = 0
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
basic.forever(function () {
    detecteur_gauche = pins.digitalReadPin(DigitalPin.P16)
    detecteur_droit = pins.digitalReadPin(DigitalPin.P15)
    if (detecteur_gauche == 1 && detecteur_droit == 1) {
        basic.showNumber(11)
    } else if (detecteur_gauche == 0 && detecteur_droit == 1) {
        basic.showNumber(1)
    } else if (detecteur_gauche == 1 && detecteur_droit == 0) {
        basic.showNumber(2)
    } else if (detecteur_gauche == 0 && detecteur_droit == 0) {
        basic.showNumber(0)
    }
})
