namespace SpriteKind {
    export const Army = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Army, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    mySprite.setPosition(randint(0, 160), randint(0, 120))
    info.startCountdown(10)
})
let mySprite: Sprite = null
scene.setBackgroundColor(2)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . f f f f f f f f f f f . . . 
    . . f f f f f f f f f f f . . . 
    . . f f f f f f f f f f f . . . 
    . . d f f f f f f f f f d . . . 
    . d d d d d d d d d d d d d . . 
    . d d d f f d d d f f d d d . . 
    . . d d d d d d d d d d d . . . 
    . . d d f d d d d d f d d . . . 
    . . d d d f d d d f d d d . . . 
    . . d d d d f f f d d d d . . . 
    `, SpriteKind.Army)
controller.moveSprite(mySprite)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . d f f f f f f f d . . . . 
    . . d d d d d d d d d d d . . . 
    . . d d d d d d d d d d d . . . 
    . . . d f f d d d f f d . . . . 
    . . . d d d d d d d d d . . . . 
    . . . d d d d d d d d d . . . . 
    . . . d d f f f f f d d . . . . 
    . . . d d d d d d d d d . . . . 
    . . . d d d d d d d d d . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
