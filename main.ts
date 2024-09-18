input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
        game.addLife(1)
    } else {
        game.removeLife(1)
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
game.setLife(3)
basic.forever(function () {
    sprite.move(1)
    basic.pause(100)
    sprite.ifOnEdgeBounce()
})
