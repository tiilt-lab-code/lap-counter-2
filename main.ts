radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0 && radio.receivedPacket(RadioPacketProperty.SignalStrength) > db_level) {
        radio.sendValue("check", radio.receivedPacket(RadioPacketProperty.SerialNumber))
    }
})
input.onButtonPressed(Button.A, function () {
    db_level += 5
    basic.showNumber(db_level)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(db_level)
})
input.onButtonPressed(Button.B, function () {
    db_level += -5
    basic.showNumber(db_level)
})
let db_level = 0
radio.setGroup(7)
basic.showIcon(IconNames.SmallSquare)
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.Rollerskate)
db_level = -65
