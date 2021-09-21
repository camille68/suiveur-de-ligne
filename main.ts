let detecteur_droit = 0
let detecteur_gauche = 0
pins.setPull(DigitalPin.P16, PinPullMode.PullUp)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
basic.forever(function () {
    detecteur_gauche = pins.digitalReadPin(DigitalPin.P16)
    detecteur_droit = pins.digitalReadPin(DigitalPin.P15)
    if (detecteur_gauche == 1 && detecteur_droit == 1) {
        kitronik_servo_lite.forward()
    } else if (detecteur_gauche == 0 && detecteur_droit == 1) {
        kitronik_servo_lite.left()
    } else if (detecteur_gauche == 1 && detecteur_droit == 0) {
        kitronik_servo_lite.right()
    } else if (detecteur_gauche == 0 && detecteur_droit == 0) {
        kitronik_servo_lite.stop()
    }
})
