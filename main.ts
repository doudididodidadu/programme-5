input.onButtonPressed(Button.A, function () {
    basic.showString("Tu as fait")
    basic.showString("" + (nbr_Pas))
    basic.showString("pas")
    if (nbr_Pas > 10) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    nbr_Pas += 1
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
})
let nbr_Pas = 0
nbr_Pas = 0
