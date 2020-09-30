// Created By: Rodas N.
// Created On: Sept 30 2020
// 
// This program runs a code that makes the servo motor rotate.
// 
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    robotbit.Servo(robotbit.Servos.S1, 0)
    basic.pause(1000)
    robotbit.Servo(robotbit.Servos.S1, 180)
    basic.pause(1000)
})
