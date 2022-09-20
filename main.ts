let maqueenIsMovingForward = false
let random = false
music.startMelody(music.builtInMelody(Melodies.Baddy), MelodyOptions.ForeverInBackground)
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) < 20 && maqueen.Ultrasonic(PingUnit.Centimeters) != 0) {
        random = Math.randomBoolean()
        if (random == true) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
            maqueenIsMovingForward = false
            basic.pause(1000)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
            maqueen.motorStop(maqueen.Motors.M1)
            maqueenIsMovingForward = true
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
            maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
            basic.pause(800)
        }
        if (random == false) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
            maqueenIsMovingForward = false
            basic.pause(1000)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
            maqueen.motorStop(maqueen.Motors.M2)
            maqueenIsMovingForward = true
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
            maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
            basic.pause(800)
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
        maqueenIsMovingForward = true
        basic.showIcon(IconNames.Silly)
        maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
        maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    }
})
