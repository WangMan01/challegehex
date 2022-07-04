input.onButtonPressed(Button.A, function () {
    maqueen.motorStopAll()
})
let PowerLeftWheel = 100
let PowerRightWheel = 225
let Stopping_Distance = 10
basic.showString("321go")
basic.forever(function () {
    while (maqueen.sensor(PingUnit.Centimeters) > Stopping_Distance) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, PowerLeftWheel)
            maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, PowerRightWheel)
        } else {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
                maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, PowerRightWheel)
                maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
                maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
                if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, 0)
                    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, PowerRightWheel)
                }
            } else {
                if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
                    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
                    maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, PowerLeftWheel)
                    maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
                    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, PowerLeftWheel)
                        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, 0)
                    }
                    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                        maqueen.MotorRun(maqueen.aMotors.M1, maqueen.Dir.CW, PowerLeftWheel)
                    } else {
                        maqueen.MotorRun(maqueen.aMotors.M2, maqueen.Dir.CW, PowerRightWheel)
                    }
                }
            }
        }
    }
    maqueen.motorStopAll()
})
