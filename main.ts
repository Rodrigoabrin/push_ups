input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . # # .
            . # . # .
            # . . # .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # #
            # . . # .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(100)
    }
})
basic.forever(function () {
	
})
