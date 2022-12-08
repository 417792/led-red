let list: number[][] = []
basic.forever(function () {
    list = [
    [
    randint(5, 225),
    randint(5, 225),
    randint(5, 225),
    randint(5, 225),
    randint(5, 225)
    ],
    [
    randint(5, 225),
    randint(5, 225),
    randint(5, 225),
    randint(5, 225),
    randint(5, 225)
    ],
    [
    randint(5, 225),
    randint(5, 225),
    randint(5, 225),
    randint(5, 225),
    randint(5, 225)
    ],
    [
    randint(5, 225),
    randint(5, 225),
    randint(5, 225),
    randint(5, 225),
    randint(5, 225)
    ],
    [
    randint(5, 225),
    randint(5, 225),
    randint(5, 225),
    randint(5, 225),
    randint(5, 225)
    ]
    ]
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plotBrightness(x, y, list[y][x])
        }
    }
})
