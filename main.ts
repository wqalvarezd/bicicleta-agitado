function CruceDerecha () {
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . #
        . . . # .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        . # # # #
        . . . # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
}
function Avanza () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
}
function CruceIzquierda () {
    basic.showLeds(`
        . . . . .
        . # . . .
        # . . . .
        . # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # . .
        . # . . .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
}
// Aplicación de funciones
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        Avanza()
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        CruceIzquierda()
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        CruceDerecha()
    }
})
basic.forever(function () {
    if (input.isGesture(Gesture.LogoUp)) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        if (input.isGesture(Gesture.TiltLeft)) {
            basic.showLeds(`
                . . . . .
                . # . . .
                # . . . .
                . # . . .
                . . . . .
                `)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # . .
                . # . . .
                . . # . .
                `)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else {
            if (input.isGesture(Gesture.TiltRight)) {
                basic.showLeds(`
                    . . . . .
                    . . . # .
                    . . . . #
                    . . . # .
                    . . . . .
                    `)
                basic.showLeds(`
                    . . # . .
                    . . . # .
                    . # # # #
                    . . . # .
                    . . # . .
                    `)
                basic.showLeds(`
                    . . # . .
                    . . . # .
                    # # # # #
                    . . . # .
                    . . # . .
                    `)
            }
        }
    }
})
