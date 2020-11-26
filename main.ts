sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    Foodnotglitch.setPosition(randint(0, 150), randint(0, 110))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Sansbugr.setPosition(148, 104)
    Bugr.setPosition(13, 102)
    Gilhtr.setPosition(17, 16)
    Gmipr.setPosition(136, 12)
})
let Foodnotglitch: Sprite = null
let Gmipr: Sprite = null
let Sansbugr: Sprite = null
let Bugr: Sprite = null
let Gilhtr: Sprite = null
let Microsoft = sprites.create(img`
    2 2 2 2 2 2 2 2 d 7 7 7 7 7 7 7 
    2 2 2 2 2 2 2 2 d 7 7 7 7 7 7 7 
    2 2 2 2 2 2 2 2 d 7 7 7 7 7 7 7 
    2 2 2 2 2 2 2 2 d 7 7 7 7 7 7 7 
    2 2 2 2 2 2 2 2 d 7 7 7 7 7 7 7 
    2 2 2 2 2 2 2 2 d 7 7 7 7 7 7 7 
    2 2 2 2 2 2 2 2 d 7 7 7 7 7 7 7 
    2 2 2 2 2 2 2 2 d 7 7 7 7 7 7 7 
    2 2 2 2 2 2 2 2 d 7 7 7 7 7 7 7 
    d d d d d d d d d d d d d d d d 
    9 9 9 9 9 9 9 9 d 5 5 5 5 5 5 5 
    9 9 9 9 9 9 9 9 d 5 5 5 5 5 5 5 
    9 9 9 9 9 9 9 9 d 5 5 5 5 5 5 5 
    9 9 9 9 9 9 9 9 d 5 5 5 5 5 5 5 
    9 9 9 9 9 9 9 9 d 5 5 5 5 5 5 5 
    9 9 9 9 9 9 9 9 d 5 5 5 5 5 5 5 
    `, SpriteKind.Player)
Gilhtr = sprites.create(img`
    ddddbbbeeeeeeceeeeccccdccbecee
    ebbeeeebbbeeeecceeebedebbeeece
    eedccceeeebcdceecedddbcceeeece
    eddeedcbeccccbeeccebddddddddde
    edeeeeecceeeebeebbcdeecbecceee
    edecccccccddddeeeecdecbeeeecee
    eeeeeccddeceeeeeeecbddcbbbcbbb
    eeeeccceeebcbbeeeecbeeecccceec
    eebcbeceebbecceeeebeeeebeeeeec
    bcceedecebeeebceeeeeeebdceeecb
    ceeedeecceedbbecccecccbeddeccb
    edcdeeeccbbbbbbeecccebccccccde
    edcebbbbcceeebbebbbcccccccccde
    eecbeeeecceeeebbeebdcbeccebbde
    eeceeeeeecebbbbeeddddceeecbddc
    edcdeeeeecceeeebddbbbbccebdeec
    eecceeeeeccebbbebebbebbbcdeeec
    eeeeeccceecebccbbbbebebeececed
    ecccceecceceeccccebbebeeeeeddc
    eeeeeebbceeeeeececcccebeeddccc
    eeeceeeeecccccccccceeddddeeece
    eeddccbbeeebeeebbbecdeddcceece
    bbeedeccbbbbbbebeeceddcbebceee
    beeeeddecdddddbeecbddeecbbcbbe
    ebbbdddddeccebeedddeedbeeeecee
    bcccccccdcccccddeceeedebbbecee
    eebbeeeeedebcdccccecedeeeecbee
    eeeebbbbbcdddebecccbbedeecdebb
    eeeeecccccbdbbeececeeedeeddeee
    ccccceeeeeecdcccccccccddddeeee
    `, SpriteKind.Enemy)
Bugr = sprites.create(img`
    . . . . . . . . . . . c . . . b 
    . . . . . . f f f f c . . . b . 
    . . d d d d d 2 2 c c d . b e . 
    . . . f f d e e e c c b b b . . 
    . . f f e e d c c b b b b e . . 
    . . f e e d c c b b d b e f . . 
    . f e e b b b b e d b e e f f . 
    b b e b b e e e e b e e f f f . 
    . . e d b e e e e e c f e e e . 
    . f e e e c b b d d c e e e . . 
    f d e f e b b e e b e e f e . . 
    f b f e f e c b b d c d 4 e . . 
    f b e 4 e b b d d d c d e . . . 
    f c f b b e d d 5 d e d . . . . 
    . b b . c f f f d f f . . . . . 
    b b . . c f f . . . . . . . . . 
    `, SpriteKind.Enemy)
Sansbugr = sprites.create(img`
    . . . . . . . . . . b 6 b . 8 . 
    . . . . . . . . . b 6 9 6 8 8 . 
    . . . . . . b b b b 6 9 9 6 9 . 
    . . . . . b b 6 6 9 8 8 9 . . . 
    . . . . b b 6 8 9 8 8 6 9 9 . . 
    . . . . b 6 6 9 9 8 6 9 4 8 . . 
    . . . . b 8 8 6 6 6 9 9 4 4 . . 
    . b b b 9 9 9 9 9 9 4 4 4 4 4 b 
    b 9 9 9 b b 9 6 6 4 4 4 4 4 b . 
    b b 9 b b b b 6 6 6 9 9 9 b . . 
    c 9 c b 8 8 8 9 9 9 9 9 9 9 b . 
    c b 9 c 6 6 9 9 9 9 8 8 9 9 b . 
    . c 9 9 c c b 9 8 8 8 9 9 9 b . 
    . . c b 9 9 9 9 9 8 9 9 b b . . 
    . . . c c c c c c c c b b . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
Gmipr = sprites.create(img`
    . . f f f . . . . . . . . . . . 
    f d 4 4 c . . . . 3 3 3 3 d f f 
    f d d c 4 . c c 3 . . f d 3 d c 
    f d 4 d 4 c 3 3 c f f d d 4 3 . 
    f d c 4 d c 3 b c f d 4 4 c 3 3 
    f d 3 3 3 d 3 3 3 d 3 3 3 3 3 3 
    c c d 4 4 d 4 3 d 4 4 4 b b c . 
    4 4 d 4 b b d d b b 4 c c b c . 
    c 4 d 3 3 d d 3 4 4 3 c c c . . 
    c f 4 d d d d 4 b 3 3 f c . . . 
    f f f d 4 4 d d 3 b b f c . . . 
    f f d 4 4 3 3 3 d d b f c c . . 
    . d 4 3 3 4 3 4 d d c f . . . . 
    d 3 3 4 4 2 d d b c f . . . . . 
    d d . d d d f f f f . . . . . . 
    . . d . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
Foodnotglitch = sprites.create(img`
    6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 
    5 5 5 5 5 5 5 7 2 2 2 2 2 2 2 2 
    5 5 5 5 5 5 5 5 9 2 2 2 2 2 2 2 
    6 6 6 6 6 6 6 9 9 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 9 9 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 9 9 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 9 9 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 9 9 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 9 9 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 9 9 6 6 6 6 6 6 6 
    `, SpriteKind.Food)
game.splash("Play or Glitch")
music.baDing.play()
controller.player1.moveSprite(Microsoft)
Gilhtr.setPosition(17, 16)
Gmipr.setPosition(136, 12)
Bugr.setPosition(13, 102)
Sansbugr.setPosition(148, 104)
Gmipr.setVelocity(0, 100)
Gilhtr.setVelocity(50, 0)
Bugr.setVelocity(0, 55)
Sansbugr.setVelocity(40, 0)
Gmipr.setFlag(SpriteFlag.BounceOnWall, true)
Gilhtr.setFlag(SpriteFlag.BounceOnWall, true)
Sansbugr.setFlag(SpriteFlag.BounceOnWall, true)
Bugr.setFlag(SpriteFlag.BounceOnWall, true)
