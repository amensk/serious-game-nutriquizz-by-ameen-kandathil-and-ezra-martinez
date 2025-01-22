namespace SpriteKind {
    export const apple = SpriteKind.create()
    export const eggplant = SpriteKind.create()
    export const cherry = SpriteKind.create()
    export const strawberry5 = SpriteKind.create()
    export const eggplant2 = SpriteKind.create()
    export const eggplant3 = SpriteKind.create()
    export const eggplant4 = SpriteKind.create()
    export const eggplant5 = SpriteKind.create()
    export const eggplant6 = SpriteKind.create()
    export const eggplant7 = SpriteKind.create()
    export const eggplant8 = SpriteKind.create()
    export const eggplant9 = SpriteKind.create()
    export const eggplant10 = SpriteKind.create()
    export const eggplant11 = SpriteKind.create()
    export const eggplant12 = SpriteKind.create()
    export const eggplant13 = SpriteKind.create()
    export const eggplant14 = SpriteKind.create()
    export const eggplant15 = SpriteKind.create()
    export const eggplant16 = SpriteKind.create()
    export const cherry2 = SpriteKind.create()
    export const cherry3 = SpriteKind.create()
    export const cherry4 = SpriteKind.create()
    export const cherry6 = SpriteKind.create()
    export const cherry5 = SpriteKind.create()
    export const cherry7 = SpriteKind.create()
    export const cherry8 = SpriteKind.create()
    export const cherry10 = SpriteKind.create()
    export const cherry11 = SpriteKind.create()
    export const cherry12 = SpriteKind.create()
    export const apple2 = SpriteKind.create()
    export const apple3 = SpriteKind.create()
    export const apple4 = SpriteKind.create()
    export const apple5 = SpriteKind.create()
    export const apple6 = SpriteKind.create()
    export const apple7 = SpriteKind.create()
    export const apple8 = SpriteKind.create()
    export const apple9 = SpriteKind.create()
    export const apple10 = SpriteKind.create()
    export const apple11 = SpriteKind.create()
    export const apple12 = SpriteKind.create()
    export const apple13 = SpriteKind.create()
    export const apple14 = SpriteKind.create()
    export const apple15 = SpriteKind.create()
    export const apple16 = SpriteKind.create()
    export const apple17 = SpriteKind.create()
    export const apple18 = SpriteKind.create()
    export const apple19 = SpriteKind.create()
    export const apple20 = SpriteKind.create()
    export const apple21 = SpriteKind.create()
    export const apple22 = SpriteKind.create()
    export const apple23 = SpriteKind.create()
    export const apple24 = SpriteKind.create()
    export const strawberry2 = SpriteKind.create()
    export const strawberry3 = SpriteKind.create()
    export const strawberry4 = SpriteKind.create()
    export const strawberry6 = SpriteKind.create()
    export const strawberry7 = SpriteKind.create()
    export const strawberry8 = SpriteKind.create()
    export const strawberry9 = SpriteKind.create()
    export const strawberry10 = SpriteKind.create()
    export const strawberry12 = SpriteKind.create()
    export const strawberry11 = SpriteKind.create()
    export const strawberry15 = SpriteKind.create()
    export const strawberry13 = SpriteKind.create()
    export const strawberry14 = SpriteKind.create()
    export const strawberry = SpriteKind.create()
    export const Enemy2 = SpriteKind.create()
    export const Enemy1 = SpriteKind.create()
    export const Enemy3 = SpriteKind.create()
    export const Enemy4 = SpriteKind.create()
    export const Enemy5 = SpriteKind.create()
    export const NPC1 = SpriteKind.create()
    export const scenery = SpriteKind.create()
    export const complete = SpriteKind.create()
    export const restate = SpriteKind.create()
    export const NPC2 = SpriteKind.create()
    export const NPC3 = SpriteKind.create()
    export const NPC4 = SpriteKind.create()
    export const NPC5 = SpriteKind.create()
    export const NPC6 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.eggplant10, function (sprite, otherSprite) {
    info.changeScoreBy(-17)
    sprites.destroy(eggplant102)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple16, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple162, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
})
// Change sprite when moving up
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    player2.setImage(player2back.image)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.strawberry2, function (sprite, otherSprite) {
    info.changeScoreBy(-6)
    sprites.destroy(strawberry22)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple22, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple222, effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.eggplant16, function (sprite, otherSprite) {
    info.changeScoreBy(-17)
    sprites.destroy(eggplant162)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.eggplant14, function (sprite, otherSprite) {
    info.changeScoreBy(-17)
    sprites.destroy(eggplant142)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.strawberry12, function (sprite, otherSprite) {
    info.changeScoreBy(-6)
    sprites.destroy(strawberry122)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple9, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple92, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple7, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple72, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple11, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple112, effects.spray, 500)
    curVel = player2.vx
    player2.setVelocity(curVel, curVel)
    curVel += 500
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.eggplant13, function (sprite, otherSprite) {
    info.changeScoreBy(-17)
    sprites.destroy(eggplant132)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cherry4, function (sprite, otherSprite) {
    info.changeScoreBy(-10)
    sprites.destroy(cherry42)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
function spawn_cherries () {
    cherry9 = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.cherry)
    cherry22 = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.cherry2)
    cherry32 = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.cherry3)
    cherry42 = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.cherry4)
    cherry52 = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.cherry5)
    cherry62 = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.cherry6)
    cherry72 = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.cherry7)
    cherry82 = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.cherry8)
    cherry102 = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.cherry10)
    cherry112 = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.cherry11)
    cherry122 = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.cherry12)
    tiles.placeOnTile(cherry9, tiles.getTileLocation(13, 1))
    tiles.placeOnTile(cherry22, tiles.getTileLocation(17, 8))
    tiles.placeOnTile(cherry32, tiles.getTileLocation(30, 15))
    tiles.placeOnTile(cherry42, tiles.getTileLocation(30, 16))
    tiles.placeOnTile(cherry52, tiles.getTileLocation(10, 15))
    tiles.placeOnTile(cherry62, tiles.getTileLocation(36, 40))
    tiles.placeOnTile(cherry72, tiles.getTileLocation(54, 28))
    tiles.placeOnTile(cherry82, tiles.getTileLocation(19, 28))
    tiles.placeOnTile(cherry102, tiles.getTileLocation(19, 34))
    tiles.placeOnTile(cherry112, tiles.getTileLocation(23, 8))
    tiles.placeOnTile(cherry122, tiles.getTileLocation(24, 1))
    for (let value4 of tiles.getTilesByType(assets.tile`myTile1`)) {
        tiles.setTileAt(value4, assets.tile`tile2`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple19, function (sprite, otherSprite) {
    info.changeScoreBy(-17)
    sprites.destroy(apple192, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.strawberry5, function (sprite, otherSprite) {
    info.changeScoreBy(-6)
    sprites.destroy(strawberry52)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.eggplant2, function (sprite, otherSprite) {
    info.changeScoreBy(-17)
    sprites.destroy(eggplant22)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple8, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple82, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy1, function (sprite, otherSprite) {
    sprites.destroy(null)
    info.player1.changeScoreBy(-2)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple6, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple62, effects.spray, 500)
    curVel += 500
    curVel = player2.vx
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy3, function (sprite, otherSprite) {
    sprites.destroy(Junk3)
    info.player1.changeScoreBy(-2)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple4, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple42, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC5, function (sprite, otherSprite) {
    game.showLongText("Surprise Spurprise!", DialogLayout.Bottom)
    game.showLongText("another healthy party goer ", DialogLayout.Bottom)
    game.showLongText("or are you ", DialogLayout.Bottom)
    game.showLongText("Vlada:What are some strategies for portion control during meals?", DialogLayout.Bottom)
    story.showPlayerChoices("a) use larger plates to encourage smaller portions", "b)Limit high calorie toppings and condiments", "c)eat quickly to prevent overeating", "d) skip meals for to reduce calorie intake")
    if (story.checkLastAnswer("b)Limit high calorie toppings and condiments")) {
        game.showLongText("You got it! Enjoy!", DialogLayout.Bottom)
        NPC16.setKind(SpriteKind.complete)
    } else if (!(story.checkLastAnswer("b)Limit high calorie toppings and condiments"))) {
        game.showLongText("use your head not your behind", DialogLayout.Bottom)
        NPC16.setKind(SpriteKind.restate)
        game.showLongText("Vlada:What are some strategies for portion control during meals?", DialogLayout.Bottom)
        story.showPlayerChoices("a) use larger plates to encourage smaller portions", "b)Limit high calorie toppings and condiments", "c)eat quickly to prevent overeating", "d) skip meals for to reduce calorie intake")
        if (story.checkLastAnswer("b)Limit high calorie toppings and condiments")) {
            game.showLongText("You got it! Enjoy!", DialogLayout.Bottom)
            NPC16.setKind(SpriteKind.complete)
        } else if (!(story.checkLastAnswer("b)Limit high calorie toppings and condiments"))) {
            game.showLongText("use your head not your behind", DialogLayout.Bottom)
            NPC16.setKind(SpriteKind.restate)
            game.showLongText("Vlada:What are some strategies for portion control during meals?", DialogLayout.Bottom)
            story.showPlayerChoices("a) use larger plates to encourage smaller portions", "b)Limit high calorie toppings and condiments", "c)eat quickly to prevent overeating", "d) skip meals for to reduce calorie intake")
            if (story.checkLastAnswer("b)Limit high calorie toppings and condiments")) {
                game.showLongText("You got it! Enjoy!", DialogLayout.Bottom)
                NPC16.setKind(SpriteKind.complete)
            } else if (!(story.checkLastAnswer("b)Limit high calorie toppings and condiments"))) {
                game.showLongText("use your head not your behind", DialogLayout.Bottom)
                NPC16.setKind(SpriteKind.restate)
                game.showLongText("Vlada:What are some strategies for portion control during meals?", DialogLayout.Bottom)
                story.showPlayerChoices("a) use larger plates to encourage smaller portions", "b)Limit high calorie toppings and condiments", "c)eat quickly to prevent overeating", "d) skip meals for to reduce calorie intake")
                if (story.checkLastAnswer("b)Limit high calorie toppings and condiments")) {
                    game.showLongText("You got it! Enjoy!", DialogLayout.Bottom)
                    NPC16.setKind(SpriteKind.complete)
                } else if (!(story.checkLastAnswer("b)Limit high calorie toppings and condiments"))) {
                    game.showLongText("use your head not your behind", DialogLayout.Bottom)
                    NPC16.setKind(SpriteKind.restate)
                    game.showLongText("Vlada:What are some strategies for portion control during meals?", DialogLayout.Bottom)
                    story.showPlayerChoices("a) use larger plates to encourage smaller portions", "b)Limit high calorie toppings and condiments", "c)eat quickly to prevent overeating", "d) skip meals for to reduce calorie intake")
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple20, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple202, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cherry12, function (sprite, otherSprite) {
    info.changeScoreBy(-10)
    sprites.destroy(cherry122)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.eggplant6, function (sprite, otherSprite) {
    info.changeScoreBy(-17)
    sprites.destroy(eggplant62)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple14, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple142, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.strawberry8, function (sprite, otherSprite) {
    info.changeScoreBy(-6)
    sprites.destroy(strawberry82)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple21, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple212, effects.spray, 500)
})
// Change sprite when moving left
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    player2.setImage(player2left.image)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC2, function (sprite, otherSprite) {
    game.showLongText("Timmy: Must... resist...", DialogLayout.Bottom)
    game.showLongText("Timmy: ...pizza...", DialogLayout.Bottom)
    game.showLongText("Timmy: ...oh hey! Didn´t see you there!", DialogLayout.Bottom)
    game.showLongText("Timmy: What are the different components of a balanced meal?", DialogLayout.Bottom)
    story.showPlayerChoices("a) Carbohydrates and fats", "b) Proteins and vitamins", "c) Fruits and vegetables", "d) Proteins, carbohydrates, and fats")
    if (story.checkLastAnswer("d) Proteins, carbohydrates, and fats")) {
        game.showLongText("Way to go! After you~", DialogLayout.Bottom)
        NPC13.setKind(SpriteKind.complete)
    } else if (!(story.checkLastAnswer("d) Proteins, carbohydrates, and fats"))) {
        game.showLongText("Sorry kid, try again.", DialogLayout.Bottom)
        NPC13.setKind(SpriteKind.restate)
        game.showLongText("Timmy: What are the different components of a balanced meal?", DialogLayout.Bottom)
        story.showPlayerChoices("a) Carbohydrates and fats", "b) Proteins and vitamins", "c) Fruits and vegetables", "d) Proteins, carbohydrates, and fats")
        if (story.checkLastAnswer("d) Proteins, carbohydrates, and fats")) {
            game.showLongText("Way to go! After you~", DialogLayout.Bottom)
            NPC13.setKind(SpriteKind.complete)
        } else if (!(story.checkLastAnswer("d) Proteins, carbohydrates, and fats"))) {
            game.showLongText("Sorry kid, try again.", DialogLayout.Bottom)
            NPC13.setKind(SpriteKind.restate)
            game.showLongText("Timmy: What are the different components of a balanced meal?", DialogLayout.Bottom)
            story.showPlayerChoices("a) Carbohydrates and fats", "b) Proteins and vitamins", "c) Fruits and vegetables", "d) Proteins, carbohydrates, and fats")
            if (story.checkLastAnswer("d) Proteins, carbohydrates, and fats")) {
                game.showLongText("Way to go! After you~", DialogLayout.Bottom)
                NPC13.setKind(SpriteKind.complete)
            } else if (!(story.checkLastAnswer("d) Proteins, carbohydrates, and fats"))) {
                game.showLongText("Sorry kid, try again.", DialogLayout.Bottom)
                NPC13.setKind(SpriteKind.restate)
                game.showLongText("Timmy: What are the different components of a balanced meal?", DialogLayout.Bottom)
                story.showPlayerChoices("a) Carbohydrates and fats", "b) Proteins and vitamins", "c) Fruits and vegetables", "d) Proteins, carbohydrates, and fats")
                if (story.checkLastAnswer("d) Proteins, carbohydrates, and fats")) {
                    game.showLongText("Way to go! After you~", DialogLayout.Bottom)
                    NPC13.setKind(SpriteKind.complete)
                } else if (!(story.checkLastAnswer("d) Proteins, carbohydrates, and fats"))) {
                    game.showLongText("Sorry kid, try again.", DialogLayout.Bottom)
                    NPC13.setKind(SpriteKind.restate)
                    game.showLongText("Timmy: What are the different components of a balanced meal?", DialogLayout.Bottom)
                    story.showPlayerChoices("a) Carbohydrates and fats", "b) Proteins and vitamins", "c) Fruits and vegetables", "d) Proteins, carbohydrates, and fats")
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cherry6, function (sprite, otherSprite) {
    info.changeScoreBy(-10)
    sprites.destroy(cherry62)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.eggplant3, function (sprite, otherSprite) {
    info.changeScoreBy(-17)
    sprites.destroy(eggplant32)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple13, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple132, effects.spray, 500)
    curVel += 500
    curVel = player2.vx
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC3, function (sprite, otherSprite) {
    game.showLongText("huh?!", DialogLayout.Bottom)
    game.showLongText("Hey there stranger", DialogLayout.Bottom)
    game.showLongText("I have a question for yuh", DialogLayout.Bottom)
    game.showLongText("Martin: whats an example of a complex and simple carbohydrate?", DialogLayout.Bottom)
    story.showPlayerChoices("a)simple:brown rice complex: candy", "b) simple:white bread complex: quinoa", "c) simple: appples complex:pasta", "d) simple: cake complex:oatmeal")
    if (story.checkLastAnswer("c) simple: appples complex:pasta")) {
        game.showLongText("Way to go! After you~", DialogLayout.Bottom)
        NPC14.setKind(SpriteKind.complete)
    } else if (!(story.checkLastAnswer("c) simple: appples complex:pasta"))) {
        game.showLongText("Sorry kid, try again.", DialogLayout.Bottom)
        NPC14.setKind(SpriteKind.restate)
        game.showLongText("Martin: whats an example of a complex and simple carbohydrate?", DialogLayout.Bottom)
        story.showPlayerChoices("a)simple:brown rice complex: candy", "b) simple:white bread complex: quinoa", "c) simple: appples complex:pasta", "d) simple: cake complex:oatmeal")
        if (story.checkLastAnswer("c) simple: appples complex:pasta")) {
            game.showLongText("Way to go! After you~", DialogLayout.Bottom)
            NPC13.setKind(SpriteKind.complete)
        } else if (!(story.checkLastAnswer("c) simple: appples complex:pasta"))) {
            game.showLongText("Sorry kid, try again.", DialogLayout.Bottom)
            NPC13.setKind(SpriteKind.restate)
            game.showLongText("Martin: whats an example of a complex and simple carbohydrate?", DialogLayout.Bottom)
            story.showPlayerChoices("a)simple:brown rice complex: candy", "b) simple:white bread complex: quinoa", "c) simple: appples complex:pasta", "d) simple: cake complex:oatmeal")
            if (story.checkLastAnswer("c) simple: appples complex:pasta")) {
                game.showLongText("Way to go! After you~", DialogLayout.Bottom)
                NPC13.setKind(SpriteKind.complete)
            } else if (!(story.checkLastAnswer("c) simple: appples complex:pasta"))) {
                game.showLongText("Sorry kid, try again.", DialogLayout.Bottom)
                NPC14.setKind(SpriteKind.restate)
                game.showLongText("Martin: whats an example of a complex and simple carbohydrate?", DialogLayout.Bottom)
                story.showPlayerChoices("a)simple:brown rice complex: candy", "b) simple:white bread complex: quinoa", "c) simple: appples complex:pasta", "d) simple: cake complex:oatmeal")
                if (story.checkLastAnswer("c) simple: appples complex:pasta")) {
                    game.showLongText("Way to go! After you~", DialogLayout.Bottom)
                    NPC14.setKind(SpriteKind.complete)
                } else if (!(story.checkLastAnswer("c) simple: appples complex:pasta"))) {
                    game.showLongText("Sorry kid, try again.", DialogLayout.Bottom)
                    NPC14.setKind(SpriteKind.restate)
                    game.showLongText("Martin: whats an example of a complex and simple carbohydrate?", DialogLayout.Bottom)
                    story.showPlayerChoices("a)simple:brown rice complex: candy", "b) simple:white bread complex: quinoa", "c) simple: appples complex:pasta", "d) simple: cake complex:oatmeal")
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.strawberry6, function (sprite, otherSprite) {
    info.changeScoreBy(-6)
    sprites.destroy(strawberry62)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.strawberry7, function (sprite, otherSprite) {
    info.changeScoreBy(-6)
    sprites.destroy(strawberry72)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy4, function (sprite, otherSprite) {
    sprites.destroy(Junk4)
    info.player1.changeScoreBy(-350)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple3, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple32, effects.spray, 500)
    curVel += 500
    curVel = player2.vx
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC4, function (sprite, otherSprite) {
    game.showLongText("Bonjour!", DialogLayout.Bottom)
    game.showLongText("hows it going at the party", DialogLayout.Bottom)
    game.showLongText("Well to make sure you know your stuff", DialogLayout.Bottom)
    game.showLongText("Rosa:How can meal planning help with maintaining a healthy diet?", DialogLayout.Bottom)
    story.showPlayerChoices("a)Increases the likelihood of choosing nutritious options", "b) Leads to excessive food waste", "c) causes stress and anxiety around meals", "d) promotes ireegular eating habits")
    if (story.checkLastAnswer("a)Increases the likelihood of choosing nutritious options")) {
        game.showLongText("Good. please come in", DialogLayout.Bottom)
        NPC15.setKind(SpriteKind.complete)
    } else if (!(story.checkLastAnswer("a)Increases the likelihood of choosing nutritious options"))) {
        game.showLongText("Make sure to think about it", DialogLayout.Bottom)
        NPC15.setKind(SpriteKind.restate)
        game.showLongText("Rosa:How can meal planning help with maintaining a healthy diet?", DialogLayout.Bottom)
        story.showPlayerChoices("a)Increases the likelihood of choosing nutritious options", "b) Leads to excessive food waste", "c) causes stress and anxiety around meals", "d) promotes ireegular eating habits")
        if (story.checkLastAnswer("a)Increases the likelihood of choosing nutritious options")) {
            game.showLongText("Good. please come in", DialogLayout.Bottom)
            NPC15.setKind(SpriteKind.complete)
        } else if (!(story.checkLastAnswer("a)Increases the likelihood of choosing nutritious options"))) {
            game.showLongText("Make sure to think about it", DialogLayout.Bottom)
            NPC15.setKind(SpriteKind.restate)
            game.showLongText("Rosa:How can meal planning help with maintaining a healthy diet?", DialogLayout.Bottom)
            story.showPlayerChoices("a)simple:brown rice complex: candy", "b) Leads to excessive food waste", "c) causes stress and anxiety around meals", "d) promotes ireegular eating habits")
            if (story.checkLastAnswer("a)Increases the likelihood of choosing nutritious options")) {
                game.showLongText("Good. please come in", DialogLayout.Bottom)
                NPC15.setKind(SpriteKind.complete)
            } else if (!(story.checkLastAnswer("a)Increases the likelihood of choosing nutritious options"))) {
                game.showLongText("Make sure to think about it", DialogLayout.Bottom)
                NPC15.setKind(SpriteKind.restate)
                game.showLongText("Rosa:How can meal planning help with maintaining a healthy diet?", DialogLayout.Bottom)
                story.showPlayerChoices("a)Increases the likelihood of choosing nutritious options", "b) Leads to excessive food waste", "c) causes stress and anxiety around meals", "d) promotes ireegular eating habits")
                if (story.checkLastAnswer("a)Increases the likelihood of choosing nutritious options")) {
                    game.showLongText("Good. please come in", DialogLayout.Bottom)
                    NPC15.setKind(SpriteKind.complete)
                } else if (!(story.checkLastAnswer("a)Increases the likelihood of choosing nutritious options"))) {
                    game.showLongText("Make sure to think about it", DialogLayout.Bottom)
                    NPC15.setKind(SpriteKind.restate)
                    game.showLongText("Rosa:How can meal planning help with maintaining a healthy diet?", DialogLayout.Bottom)
                    story.showPlayerChoices("a)Increases the likelihood of choosing nutritious options", "b) Leads to excessive food waste", "c) causes stress and anxiety around meals", "d) promotes ireegular eating habits")
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.eggplant11, function (sprite, otherSprite) {
    info.changeScoreBy(-17)
    sprites.destroy(eggplant112)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cherry7, function (sprite, otherSprite) {
    info.changeScoreBy(-10)
    sprites.destroy(cherry72)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC1, function (sprite, otherSprite) {
    game.showLongText("Hi! I´m Sandra, surprisingly the owner of this castle!", DialogLayout.Top)
    game.showLongText("You must be the new neighbor correct?", DialogLayout.Top)
    game.showLongText("Oh good! Well I must warn you.", DialogLayout.Top)
    game.showLongText("Some of the foods here are quite... unhealthy.", DialogLayout.Top)
    game.showLongText("Yeah, someone had the bright idea to bringing food containing high calories", DialogLayout.Top)
    game.showLongText("...which I specifically said not to!", DialogLayout.Top)
    game.showLongText("Anyways I hope that doesn´t bother you too much.", DialogLayout.Top)
    game.showLongText("Just don´t follow your intrusive thoughts, like... consuming various junk food, fast food.", DialogLayout.Top)
    game.showLongText("You´ll know it when you see it. Despite being called ¨fast food,¨ they prefer inching closer to you slowly until you give in to temptation.", DialogLayout.Top)
    game.showLongText("That´s your mind playing tricks on you, since food don´t really move on their own.", DialogLayout.Top)
    game.showLongText("Don´t worry, the food beside me are all healthy and safe to consume,", DialogLayout.Top)
    game.showLongText("can´t say the same for the other rooms.", DialogLayout.Top)
    game.showLongText("Just to keep you educated and safe before deciding to eat certain foods,", DialogLayout.Top)
    game.showLongText("each of the guests will quiz you, and you might learn something from them newcomer!", DialogLayout.Top)
    game.showLongText("For my question, how many servings of fruits and vegetables are typically recommended per day?", DialogLayout.Top)
    story.showPlayerChoices(" a) 1-2 servings", "b) 3-4 servings", " c) 5-6 servings", " d) 7-8 servings")
    if (story.checkLastAnswer(" c) 5-6 servings")) {
        game.showLongText("Correct! You can explore now, good luck and stay safe!", DialogLayout.Top)
        tiles.setCurrentTilemap(tilemap`level4`)
        NPC12.setKind(SpriteKind.complete)
    } else if (!(story.checkLastAnswer(" c) 5-6 servings"))) {
        game.showLongText("Oh, I´m sorry that´s not correct. It´s okay, you can try again :)", DialogLayout.Top)
        NPC12.setKind(SpriteKind.restate)
        game.showLongText("For my question, how many servings of fruits and vegetables are typically recommended per day?", DialogLayout.Top)
        story.showPlayerChoices(" a) 1-2 servings", "b) 3-4 servings", " c) 5-6 servings", " d) 7-8 servings")
        if (story.checkLastAnswer(" c) 5-6 servings")) {
            game.showLongText("Correct! You can explore now, good luck and stay safe!", DialogLayout.Top)
            tiles.setCurrentTilemap(tilemap`level4`)
            NPC12.setKind(SpriteKind.complete)
        } else if (!(story.checkLastAnswer(" c) 5-6 servings"))) {
            game.showLongText("Oh, I´m sorry that´s not correct. It´s okay, you can try again :)", DialogLayout.Top)
            NPC12.setKind(SpriteKind.restate)
            game.showLongText("For my question, how many servings of fruits and vegetables are typically recommended per day?", DialogLayout.Top)
            story.showPlayerChoices(" a) 1-2 servings", "b) 3-4 servings", " c) 5-6 servings", " d) 7-8 servings")
            if (story.checkLastAnswer(" c) 5-6 servings")) {
                game.showLongText("Correct! You can explore now, good luck and stay safe!", DialogLayout.Top)
                tiles.setCurrentTilemap(tilemap`level4`)
                NPC12.setKind(SpriteKind.complete)
            } else if (!(story.checkLastAnswer(" c) 5-6 servings"))) {
                game.showLongText("Oh, I´m sorry that´s not correct. It´s okay, you can try again :)", DialogLayout.Top)
                NPC12.setKind(SpriteKind.restate)
                game.showLongText("For my question, how many servings of fruits and vegetables are typically recommended per day?", DialogLayout.Top)
                story.showPlayerChoices(" a) 1-2 servings", "b) 3-4 servings", " c) 5-6 servings", " d) 7-8 servings")
                if (story.checkLastAnswer(" c) 5-6 servings")) {
                    game.showLongText("Correct! You can explore now, good luck and stay safe!", DialogLayout.Top)
                    tiles.setCurrentTilemap(tilemap`level4`)
                    NPC12.setKind(SpriteKind.complete)
                } else if (!(story.checkLastAnswer(" c) 5-6 servings"))) {
                    game.showLongText("Oh, I´m sorry that´s not correct. It´s okay, you can try again :)", DialogLayout.Top)
                    NPC12.setKind(SpriteKind.restate)
                    game.showLongText("For my question, how many servings of fruits and vegetables are typically recommended per day?", DialogLayout.Top)
                    story.showPlayerChoices(" a) 1-2 servings", "b) 3-4 servings", " c) 5-6 servings", " d) 7-8 servings")
                    if (story.checkLastAnswer(" c) 5-6 servings")) {
                        game.showLongText("Correct! You can explore now, good luck and stay safe!", DialogLayout.Top)
                        tiles.setCurrentTilemap(tilemap`level4`)
                        NPC12.setKind(SpriteKind.complete)
                    } else if (!(story.checkLastAnswer(" c) 5-6 servings"))) {
                        game.showLongText("Oh, I´m sorry that´s not correct. It´s okay, you can try again :)", DialogLayout.Top)
                        NPC12.setKind(SpriteKind.restate)
                        game.showLongText("For my question, how many servings of fruits and vegetables are typically recommended per day?", DialogLayout.Top)
                        story.showPlayerChoices(" a) 1-2 servings", "b) 3-4 servings", " c) 5-6 servings", " d) 7-8 servings")
                        if (story.checkLastAnswer(" c) 5-6 servings")) {
                            game.showLongText("Correct! You can explore now, good luck and stay safe!", DialogLayout.Top)
                            tiles.setCurrentTilemap(tilemap`level4`)
                            NPC12.setKind(SpriteKind.complete)
                        } else if (!(story.checkLastAnswer(" c) 5-6 servings"))) {
                            game.showLongText("Oh, I´m sorry that´s not correct. It´s okay, you can try again :)", DialogLayout.Top)
                            NPC12.setKind(SpriteKind.restate)
                            game.showLongText("For my question, how many servings of fruits and vegetables are typically recommended per day?", DialogLayout.Top)
                            story.showPlayerChoices(" a) 1-2 servings", "b) 3-4 servings", " c) 5-6 servings", " d) 7-8 servings")
                            if (story.checkLastAnswer(" c) 5-6 servings")) {
                                game.showLongText("Correct! You can explore now, good luck and stay safe!", DialogLayout.Top)
                                tiles.setCurrentTilemap(tilemap`level4`)
                                NPC12.setKind(SpriteKind.complete)
                            } else if (!(story.checkLastAnswer(" c) 5-6 servings"))) {
                                game.showLongText("Oh, I´m sorry that´s not correct. It´s okay, you can try again :)", DialogLayout.Top)
                                NPC12.setKind(SpriteKind.restate)
                                game.showLongText("For my question, how many servings of fruits and vegetables are typically recommended per day?", DialogLayout.Top)
                                story.showPlayerChoices(" a) 1-2 servings", "b) 3-4 servings", " c) 5-6 servings", " d) 7-8 servings")
                            }
                        }
                    }
                }
            }
        }
    }
})
function start_game () {
    info.setScore(2000)
    tiles.setCurrentTilemap(tilemap`level4`)
    game.showLongText("You´re the new neighbor invited to a party Hosted by healthy individuals encouraging healthy eating habits! Unfortunately... someone brought unhealthy food to the party.Resist the temptations and gain some healthy tips through socializing!", DialogLayout.Top)
    // Create the player sprite
    player2 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 4 4 4 e e f . . . 
        . f b b b b f 2 2 2 2 f 4 e . . 
        . f b b b b f 2 2 2 2 f d 4 . . 
        . . f c c f 4 5 5 4 4 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    // Create the player sprite
    player2back = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    // Create the player sprite
    player2left = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `, SpriteKind.Player)
    // Create the player sprite
    player2right = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `, SpriteKind.Player)
    // Create the player sprite
    player2front = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 4 4 4 e e f . . . 
        . f b b b b f 2 2 2 2 f 4 e . . 
        . f b b b b f 2 2 2 2 f d 4 . . 
        . . f c c f 4 5 5 4 4 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    characterAnimations.loopFrames(
    player2,
    [img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingRight)
    )
    characterAnimations.loopFrames(
    player2,
    [img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingLeft)
    )
    characterAnimations.loopFrames(
    player2,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . . f e 4 d d d d 4 e f e . . 
        . . f e f 2 2 2 2 e d d 4 e . . 
        . . e 4 f 2 2 2 2 e d d e . . . 
        . . . . f 4 4 5 5 f e e . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f e 4 d d d d 4 e f . . . 
        . . e 4 d d e 2 2 2 2 f e f . . 
        . . . e d d e 2 2 2 2 f 4 e . . 
        . . . . e e f 5 5 4 4 f . . . . 
        . . . . . f f f f f f f . . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingDown)
    )
    characterAnimations.loopFrames(
    player2,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f f 2 f e f . . 
        . . f f f 2 f e e 2 2 f f f . . 
        . . f e 2 f f e e 2 f e e f . . 
        . f f e f f e e e f e e e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . . e f f f f f f f f 4 e . . 
        . . . 4 f 2 2 2 2 2 e d d 4 . . 
        . . . e f f f f f f e e 4 . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . . f f f f 2 2 f f f f . . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e f 2 f f f 2 f 2 e f . . 
        . . f f f 2 2 e e f 2 f f f . . 
        . . f e e f 2 e e f f 2 e f . . 
        . f f e e e f e e e f f e f f . 
        . f f e e e e e e e e e e f f . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f e . . . 
        . . 4 d d e 2 2 2 2 2 f 4 . . . 
        . . . 4 e e f f f f f f e . . . 
        . . . . . . . . . f f f . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.MovingUp)
    )
    // Create the player sprite
    Junk1 = sprites.create(img`
        . . . . . . b b b b . . . . . . 
        . . . . . . b f f 4 b . . . . . 
        . . . . . . b b f 4 4 b . . . . 
        . . . f . b 4 b b f 4 4 b . . . 
        . . . f f f f f 5 f b 4 4 b . . 
        . . . . f 3 2 3 f 5 4 e 4 4 b . 
        . . . b f 2 2 2 f 7 5 f f 4 4 e 
        . . . b f 3 2 3 5 f f 5 e f f e 
        . . b d 7 f f f 3 2 3 f 5 e e f 
        . . b 5 5 5 5 f 2 2 2 f 5 d e e 
        . b 3 2 3 5 7 f 3 2 3 f d d e 4 
        . b 2 2 2 5 5 5 f f f f d e 4 . 
        b d 3 2 d 5 5 5 d d d f f . . . 
        b 5 5 5 5 d d 4 4 4 4 . f . . . 
        4 d d d 4 4 4 . . . . . . . . . 
        4 4 4 4 . . . . . . . . . . . . 
        `, SpriteKind.Enemy1)
    Junk1.follow(player2, 10)
    tiles.placeOnTile(Junk1, tiles.getTileLocation(25, 12))
    // Create the player sprite
    Junk2 = sprites.create(img`
        . . . . c c c b b b b b . . . . 
        . . c c b 4 4 4 4 4 4 b b b . . 
        . c c 4 4 4 4 4 5 4 4 4 4 b c . 
        . e 4 4 4 4 4 4 4 4 4 5 4 4 e . 
        e b 4 5 4 4 5 4 4 4 4 4 4 4 b c 
        e b 4 4 4 4 4 4 4 4 4 4 5 4 4 e 
        e b b 4 4 4 4 4 4 4 4 4 4 4 b e 
        . e b 4 4 4 4 4 5 4 4 4 4 b e . 
        8 7 e e b 4 4 4 4 4 4 b e e 6 8 
        8 7 2 e e e e e e e e e e 2 7 8 
        e 6 6 2 2 2 2 2 2 2 2 2 2 6 c e 
        e c 6 7 6 6 7 7 7 6 6 7 6 c c e 
        e b e 8 8 c c 8 8 c c c 8 e b e 
        e e b e c c e e e e e c e b e e 
        . e e b b 4 4 4 4 4 4 4 4 e e . 
        . . . c c c c c e e e e e . . . 
        `, SpriteKind.Enemy2)
    Junk2.follow(player2, 10)
    tiles.placeOnTile(Junk2, tiles.getTileLocation(36, 9))
    // Create the player sprite
    Junk3 = sprites.create(img`
        . . . . . 3 3 b 3 3 d d 3 3 . . 
        . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
        . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
        . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
        . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
        . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
        . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
        . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
        . 4 4 d 1 1 1 1 1 1 d d d b b . 
        . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
        4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
        4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
        4 5 5 d 5 5 d b b b d d 3 . . . 
        4 5 5 5 d d d d 4 4 b 3 . . . . 
        . 4 5 5 5 4 4 4 . . . . . . . . 
        . . 4 4 4 . . . . . . . . . . . 
        `, SpriteKind.Enemy3)
    Junk3.follow(player2, 10)
    tiles.placeOnTile(Junk3, tiles.getTileLocation(41, 10))
    // Create the player sprite
    Junk4 = sprites.create(img`
        ......................bbb.......
        ....................bb333b......
        .................bbb333d33b.....
        ................bb333333d3a.....
        ..............bb33332eeeedba....
        ............bbb333323eee2e3a....
        ..........bbd333333e22222ed3a...
        .......bbbdd3333333e22222edda...
        ......bb3d333333333be222eb3d3a..
        ...bbb3dd33333333333beeeb33d3a..
        ..b3ddd33333333333333333333dda..
        bbddd3333333333333333333333dd3a.
        b33dddddd3333333333333333333d3a.
        bb3333333ddddd33333333333333dda.
        bbbbbbb333dd33dddddddddd3333ddba
        b55553bbbbbb3333dd33333ddd33dd3a
        b555555555553bbbbbbbb33333dddd3a
        bd555555555555555dddbaaaaab3d3ba
        bb55555555555555555dddddddbb33ba
        b3bb35555555555d5555d55dddddbbba
        b33333bbb355dd55555d555ddddddbba
        b5555d333333bbb35dddddd55ddddbba
        b5d555dd5553333bbbbb3ddddddddb3a
        b5d555555555555dd3333bbbbbb3db3a
        bd5d555555d55555dd555ddbbbbbbb3a
        bbb55dd555555555555555ddddddbb3a
        ...bbbbdd555ddd5555ddddddddddb3a
        .......bbbb555555d5ddd5ddddddb3a
        ...........bbbb55555555555dd533a
        ...............bbbbddd5d55d5b3ba
        ...................bbbbddddb3ba.
        .......................bbbaaaa..
        `, SpriteKind.Enemy4)
    Junk4.follow(player2, 10)
    Junk4.setPosition(700, 600)
    // Create the player sprite
    Junk5 = sprites.create(img`
        ..............bbbbbbb...........
        ...........bb66663333baa........
        .........bb3367776333663aa......
        ........b33333888333389633aa....
        .......b3333333333333389633aa...
        ......b34443333333333338633bae..
        .....b3455433333333334443333ae..
        ....b33322333dddd3333455233daee.
        ...b3d333333dd3bbbb33322333dabe.
        ..b3d333333d3bb33bb33333333da4e.
        ..bd33333333b33aab3333333223a4ee
        .b3d3663333b33aab33366332442b4ee
        .bd3b983333a3aa3333387633ee3b4ee
        .bd6983333baaa333333387633bb4bee
        b3d6833333bba333333333863ba44ebe
        bdd3333333bb3333333333333a44bebe
        add666633333322333366333ba44bbbe
        ad67776333332442336983d3a444b4e.
        add888b333333ee3369833d3a44b44e.
        add333333333333336833d3a444b4e..
        a3dd3333344433333dddd3a444b44e..
        ab33ddd325543333dd33aa444b44e...
        .eabb3dd32233333baaa4444b44e....
        .ebabb3d333d33baa444443b44e.....
        ..ebaab3ddd3aaa4444433b44e......
        ..eebbaab33a44444333b444e.......
        ...eeebbaab444b333b4444e........
        ....ebeeebbbbbbbb4444ee.........
        .....eebbbb44444444ee...........
        .......eeebbb444eee.............
        ..........eeeeee................
        ................................
        `, SpriteKind.Enemy5)
    Junk5.follow(player2, 10)
    Junk5.setPosition(100, 600)
    // Create the player sprite
    NPC12 = sprites.create(img`
        . f f f . f f f f . f f f . 
        f f f f f c c c c f f f f f 
        f f f f b c c c c b f f f f 
        f f f c 3 c c c c 3 c f f f 
        . f 3 3 c c c c c c 3 3 f . 
        . f c c c c 4 4 c c c c f . 
        . f f c c 4 4 4 4 c c f f . 
        . f f f b f 4 4 f b f f f . 
        . f f 4 1 f d d f 1 4 f f . 
        . . f f d d d d d d f f . . 
        . . e f e 4 4 4 4 e f e . . 
        . e 4 f b 3 3 3 3 b f 4 e . 
        . 4 d f 3 3 3 3 3 3 c d 4 . 
        . 4 4 f 6 6 6 6 6 6 f 4 4 . 
        . . . . f f f f f f . . . . 
        . . . . f f . . f f . . . . 
        `, SpriteKind.NPC1)
    tiles.placeOnTile(NPC12, tiles.getTileLocation(11, 5))
    // Create the player sprite
    NPC13 = sprites.create(img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `, SpriteKind.NPC2)
    tiles.placeOnTile(NPC13, tiles.getTileLocation(7, 15))
    // Create the player sprite
    NPC14 = sprites.create(img`
        . . . . f f f f . . . . 
        . . f f e e e e f f . . 
        . f e e e e e e e f f . 
        f f e f e e e e e e f f 
        f f f e e e e e e e e f 
        f f f e e e e e e f e f 
        f f f f e e e e f f f f 
        f f f f f f f f f f f f 
        f f f f f f f f f f f f 
        . f f f f f f f f f f . 
        . e f f f f f f f f e . 
        e 4 f b b b b b b f 4 e 
        4 d f d d d d d d c d 4 
        4 4 f 6 6 6 6 6 6 f 4 4 
        . . . f f f f f f . . . 
        . . . f f . . f f . . . 
        `, SpriteKind.NPC3)
    tiles.placeOnTile(NPC14, tiles.getTileLocation(34, 32))
    // Create the player sprite
    NPC15 = sprites.create(img`
        . . . . . f f f f . . . . . 
        . . . f f 5 5 5 5 f f . . . 
        . . f d 5 5 5 5 5 5 d f . . 
        . f d 5 5 5 5 5 5 5 5 d f . 
        . f 5 5 5 5 5 5 5 5 5 5 f . 
        f b 5 5 5 5 5 5 5 5 5 5 b f 
        f b 5 5 5 5 5 5 5 5 5 5 b f 
        f b b 5 5 5 5 5 5 5 5 b b f 
        f b b b d 5 5 5 5 d b b b f 
        f b b b b b b b b b b b b f 
        f f b b b b b b b b b b f . 
        . c c b b b b b b b b c c . 
        . 4 d c f f f f f f c d 4 . 
        . 4 f b 3 b 3 b 3 b b f 4 . 
        . . f f 3 b 3 b 3 b f f . . 
        . . . . f f b b f f . . . . 
        `, SpriteKind.NPC4)
    tiles.placeOnTile(NPC15, tiles.getTileLocation(34, 42))
    // Create the player sprite
    NPC16 = sprites.create(img`
        . . . . . . c c c . . . . . . . 
        . . . . . . c 5 b c . . . . . . 
        . . . . c c c 5 5 c c c . . . . 
        . . c c c c 5 5 5 5 c b c c . . 
        . c b b 5 b 5 5 5 5 b 5 b b c . 
        . c b 5 5 b b 5 5 b b 5 5 b c . 
        . . c 5 5 5 b b b b 5 5 5 f . . 
        . . f f 5 5 5 5 5 5 5 5 f f . . 
        . . f f f b f e e f b f f f . . 
        . . f f f 1 f b b f 1 f f f . . 
        . . . f f b b b b b b f f . . . 
        . . . e e f e e e e f e e . . . 
        . . e b f b 5 b b 5 b c b e . . 
        . . e e f 5 5 5 5 5 5 f e e . . 
        . . . . c b 5 5 5 5 b c . . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.NPC5)
    tiles.placeOnTile(NPC16, tiles.getTileLocation(34, 4))
    // Set the camera to follow the player
    scene.cameraFollowSprite(player2)
    // Define the behavior of the player
    controller.moveSprite(player2)
    player2.setPosition(86, 107)
    spawn_lemons()
    spawn_strawberries()
    spawn_cherries()
    spawn_apples()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.cherry, function (sprite, otherSprite) {
    info.changeScoreBy(-10)
    sprites.destroy(cherry9)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.eggplant12, function (sprite, otherSprite) {
    info.changeScoreBy(-17)
    sprites.destroy(eggplant122)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple18, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple182, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.strawberry4, function (sprite, otherSprite) {
    info.changeScoreBy(-6)
    sprites.destroy(strawberry42)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.eggplant8, function (sprite, otherSprite) {
    info.changeScoreBy(-17)
    sprites.destroy(eggplant82)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.strawberry3, function (sprite, otherSprite) {
    info.changeScoreBy(-6)
    sprites.destroy(strawberry32)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
// Change sprite when moving right
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    player2.setImage(player2right.image)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.eggplant, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(eggplant17)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.strawberry13, function (sprite, otherSprite) {
    info.changeScoreBy(-6)
    sprites.destroy(strawberry132)
    curVel = player2.vx
    player2.setVelocity(curVel, curVel)
    curVel += 500
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple23, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple232, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple26, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.NPC6, function (sprite, otherSprite) {
    let NPC17: Sprite = null
    game.showLongText("huh?!", DialogLayout.Bottom)
    game.showLongText("Hey there stranger", DialogLayout.Bottom)
    game.showLongText("I have a question for yuh", DialogLayout.Bottom)
    game.showLongText("Martin: whats an example of a complex and simple carbohydrate?", DialogLayout.Bottom)
    story.showPlayerChoices("a)simple:brown rice complex: candy", "b) simple:white bread complex: quinoa", "c) simple: appples complex:pasta", "d) simple: cake complex:oatmeal")
    if (story.checkLastAnswer("c) simple: appples complex:pasta")) {
        game.showLongText("Way to go! After you~", DialogLayout.Bottom)
        NPC17.setKind(SpriteKind.complete)
    } else if (!(story.checkLastAnswer("c) simple: appples complex:pasta"))) {
        game.showLongText("Sorry kid, try again.", DialogLayout.Bottom)
        NPC17.setKind(SpriteKind.restate)
        game.showLongText("Martin: whats an example of a complex and simple carbohydrate?", DialogLayout.Bottom)
        story.showPlayerChoices("a)simple:brown rice complex: candy", "b) simple:white bread complex: quinoa", "c) simple: appples complex:pasta", "d) simple: cake complex:oatmeal")
        if (story.checkLastAnswer("c) simple: appples complex:pasta")) {
            game.showLongText("Way to go! After you~", DialogLayout.Bottom)
            NPC17.setKind(SpriteKind.complete)
        } else if (!(story.checkLastAnswer("c) simple: appples complex:pasta"))) {
            game.showLongText("Sorry kid, try again.", DialogLayout.Bottom)
            NPC17.setKind(SpriteKind.restate)
            game.showLongText("Martin: whats an example of a complex and simple carbohydrate?", DialogLayout.Bottom)
            story.showPlayerChoices("a)simple:brown rice complex: candy", "b) simple:white bread complex: quinoa", "c) simple: appples complex:pasta", "d) simple: cake complex:oatmeal")
            if (story.checkLastAnswer("c) simple: appples complex:pasta")) {
                game.showLongText("Way to go! After you~", DialogLayout.Bottom)
                NPC17.setKind(SpriteKind.complete)
            } else if (!(story.checkLastAnswer("c) simple: appples complex:pasta"))) {
                game.showLongText("Sorry kid, try again.", DialogLayout.Bottom)
                NPC17.setKind(SpriteKind.restate)
                game.showLongText("Martin: whats an example of a complex and simple carbohydrate?", DialogLayout.Bottom)
                story.showPlayerChoices("a)simple:brown rice complex: candy", "b) simple:white bread complex: quinoa", "c) simple: appples complex:pasta", "d) simple: cake complex:oatmeal")
                if (story.checkLastAnswer("c) simple: appples complex:pasta")) {
                    game.showLongText("Way to go! After you~", DialogLayout.Bottom)
                    NPC17.setKind(SpriteKind.complete)
                } else if (!(story.checkLastAnswer("c) simple: appples complex:pasta"))) {
                    game.showLongText("Sorry kid, try again.", DialogLayout.Bottom)
                    NPC17.setKind(SpriteKind.restate)
                    game.showLongText("Martin: whats an example of a complex and simple carbohydrate?", DialogLayout.Bottom)
                    story.showPlayerChoices("a)simple:brown rice complex: candy", "b) simple:white bread complex: quinoa", "c) simple: appples complex:pasta", "d) simple: cake complex:oatmeal")
                }
            }
        }
    }
})
info.onScore(-1, function () {
    if (true) {
        sprites.destroy(player2)
        game.gameOver(false)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.strawberry15, function (sprite, otherSprite) {
    info.changeScoreBy(-6)
    sprites.destroy(strawberry152)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
function spawn_lemons () {
    eggplant17 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.eggplant)
    eggplant22 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.eggplant2)
    eggplant32 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.eggplant3)
    eggplant42 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.eggplant4)
    eggplant52 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.eggplant5)
    eggplant62 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.eggplant6)
    eggplant72 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.eggplant7)
    eggplant82 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.eggplant8)
    eggplant92 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.eggplant9)
    eggplant102 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.eggplant10)
    eggplant112 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.eggplant11)
    eggplant122 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.eggplant12)
    eggplant132 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.eggplant13)
    eggplant142 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.eggplant14)
    eggplant152 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.eggplant15)
    eggplant162 = sprites.create(img`
        4 4 4 . . 4 4 4 4 4 . . . . . . 
        4 5 5 4 4 5 5 5 5 5 4 4 . . . . 
        b 4 5 5 1 5 1 1 1 5 5 5 4 . . . 
        . b 5 5 5 5 1 1 5 5 1 1 5 4 . . 
        . b d 5 5 5 5 5 5 5 5 1 1 5 4 . 
        b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 . 
        c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4 
        c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4 
        c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4 
        c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4 
        . c 4 5 5 5 5 d d d 5 5 5 5 5 b 
        . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c 
        . . c 4 4 d 4 4 4 4 4 d d 5 d c 
        . . . c 4 4 4 4 4 4 4 4 5 5 5 4 
        . . . . c c b 4 4 4 b b 4 5 4 4 
        . . . . . . c c c c c c b b 4 . 
        `, SpriteKind.eggplant16)
    tiles.placeOnTile(eggplant22, tiles.getTileLocation(13, 3))
    tiles.placeOnTile(eggplant17, tiles.getTileLocation(16, 4))
    tiles.placeOnTile(eggplant32, tiles.getTileLocation(16, 28))
    tiles.placeOnTile(eggplant42, tiles.getTileLocation(31, 40))
    tiles.placeOnTile(eggplant62, tiles.getTileLocation(35, 28))
    tiles.placeOnTile(eggplant52, tiles.getTileLocation(33, 45))
    tiles.placeOnTile(eggplant72, tiles.getTileLocation(37, 16))
    tiles.placeOnTile(eggplant82, tiles.getTileLocation(23, 7))
    tiles.placeOnTile(eggplant92, tiles.getTileLocation(22, 27))
    tiles.placeOnTile(eggplant102, tiles.getTileLocation(10, 31))
    tiles.placeOnTile(eggplant112, tiles.getTileLocation(22, 35))
    tiles.placeOnTile(eggplant122, tiles.getTileLocation(42, 18))
    tiles.placeOnTile(eggplant142, tiles.getTileLocation(39, 42))
    tiles.placeOnTile(eggplant132, tiles.getTileLocation(39, 9))
    tiles.placeOnTile(eggplant152, tiles.getTileLocation(29, 7))
    tiles.placeOnTile(eggplant162, tiles.getTileLocation(29, 4))
    for (let value of tiles.getTilesByType(assets.tile`myTile0`)) {
        tiles.setTileAt(value, assets.tile`tile2`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple17, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple172, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cherry2, function (sprite, otherSprite) {
    info.changeScoreBy(-10)
    sprites.destroy(cherry22)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
// Change sprite when moving up
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    player2.setImage(player2front.image)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cherry11, function (sprite, otherSprite) {
    info.changeScoreBy(-10)
    sprites.destroy(cherry112)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cherry10, function (sprite, otherSprite) {
    info.changeScoreBy(-10)
    sprites.destroy(cherry102)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple5, function (sprite, otherSprite) {
    info.changeScoreBy(-95)
    sprites.destroy(apple52, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy2, function (sprite, otherSprite) {
    sprites.destroy(Junk2)
    info.player1.changeScoreBy(-250)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.strawberry, function (sprite, otherSprite) {
    info.changeScoreBy(-6)
    sprites.destroy(strawberry16)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.eggplant5, function (sprite, otherSprite) {
    info.changeScoreBy(-17)
    sprites.destroy(eggplant52)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cherry5, function (sprite, otherSprite) {
    info.changeScoreBy(-10)
    sprites.destroy(cherry52)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple10, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple102, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.strawberry10, function (sprite, otherSprite) {
    info.changeScoreBy(-6)
    sprites.destroy(strawberry102)
    curVel += 500
    curVel = player2.vx
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.strawberry11, function (sprite, otherSprite) {
    info.changeScoreBy(-6)
    sprites.destroy(strawberry112)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cherry8, function (sprite, otherSprite) {
    info.changeScoreBy(-10)
    sprites.destroy(cherry82)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
function spawn_strawberries () {
    strawberry16 = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.strawberry)
    strawberry22 = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.strawberry2)
    strawberry32 = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.strawberry3)
    strawberry42 = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.strawberry4)
    strawberry52 = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.strawberry5)
    strawberry62 = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.strawberry6)
    strawberry72 = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.strawberry7)
    strawberry82 = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.strawberry8)
    strawberry92 = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.strawberry9)
    strawberry102 = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.strawberry10)
    strawberry122 = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.strawberry12)
    strawberry112 = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.strawberry11)
    strawberry132 = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.strawberry13)
    strawberry142 = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.strawberry14)
    strawberry152 = sprites.create(img`
        . . . . . . . 6 . . . . . . . . 
        . . . . . . 8 6 6 . . . 6 8 . . 
        . . . e e e 8 8 6 6 . 6 7 8 . . 
        . . e 2 2 2 2 e 8 6 6 7 6 . . . 
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
        e 2 2 2 2 2 2 2 4 e 2 e e c . . 
        e e 2 e 2 2 4 2 2 e e e c . . . 
        e e e e 2 e 2 2 e e e c . . . . 
        e e e 2 e e c e c c c . . . . . 
        . c c c c c c c . . . . . . . . 
        `, SpriteKind.strawberry15)
    tiles.placeOnTile(strawberry16, tiles.getTileLocation(15, 6))
    tiles.placeOnTile(strawberry22, tiles.getTileLocation(18, 3))
    tiles.placeOnTile(strawberry32, tiles.getTileLocation(22, 1))
    tiles.placeOnTile(strawberry42, tiles.getTileLocation(30, 2))
    tiles.placeOnTile(strawberry52, tiles.getTileLocation(29, 8))
    tiles.placeOnTile(strawberry62, tiles.getTileLocation(34, 10))
    tiles.placeOnTile(strawberry72, tiles.getTileLocation(34, 10))
    tiles.placeOnTile(strawberry82, tiles.getTileLocation(36, 21))
    tiles.placeOnTile(strawberry92, tiles.getTileLocation(36, 35))
    tiles.placeOnTile(strawberry102, tiles.getTileLocation(24, 14))
    tiles.placeOnTile(strawberry112, tiles.getTileLocation(30, 30))
    tiles.placeOnTile(strawberry122, tiles.getTileLocation(55, 37))
    tiles.placeOnTile(strawberry132, tiles.getTileLocation(19, 36))
    tiles.placeOnTile(strawberry142, tiles.getTileLocation(16, 36))
    tiles.placeOnTile(strawberry152, tiles.getTileLocation(34, 46))
    for (let value3 of tiles.getTilesByType(assets.tile`myTile2`)) {
        tiles.setTileAt(value3, assets.tile`tile2`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.eggplant9, function (sprite, otherSprite) {
    info.changeScoreBy(-17)
    sprites.destroy(eggplant92)
    curVel = player2.vx
    player2.setVelocity(curVel, curVel)
    curVel += 500
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple24, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple242, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.strawberry14, function (sprite, otherSprite) {
    info.changeScoreBy(-6)
    sprites.destroy(strawberry142)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple2, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple25, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy5, function (sprite, otherSprite) {
    sprites.destroy(Junk5)
    info.player1.changeScoreBy(-200)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple12, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple122, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
function spawn_apples () {
    apple26 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple)
    apple25 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple2)
    apple32 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple3)
    apple42 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple4)
    apple52 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple5)
    apple62 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple6)
    apple72 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple7)
    apple82 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple8)
    apple92 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple9)
    apple102 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple10)
    apple112 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple11)
    apple122 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple12)
    apple132 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple13)
    apple142 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple14)
    apple152 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple15)
    apple162 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple16)
    apple172 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple17)
    apple182 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple18)
    apple192 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple19)
    apple202 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple20)
    apple212 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple21)
    apple222 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple22)
    apple232 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple23)
    apple242 = sprites.create(img`
        . . . . . . . e c 7 . . . . . . 
        . . . . e e e c 7 7 e e . . . . 
        . . c e e e e c 7 e 2 2 e e . . 
        . c e e e e e c 6 e e 2 2 2 e . 
        . c e e e 2 e c c 2 4 5 4 2 e . 
        c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
        c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
        c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
        . e e e 2 2 2 2 2 2 2 2 2 4 e . 
        . 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
        . . 2 e e 2 2 2 2 2 4 4 2 e . . 
        . . . 2 2 e e 4 4 4 2 e e . . . 
        . . . . . 2 2 e e e e . . . . . 
        `, SpriteKind.apple24)
    tiles.placeOnTile(apple26, tiles.getTileLocation(13, 8))
    tiles.placeOnTile(apple32, tiles.getTileLocation(17, 2))
    tiles.placeOnTile(apple42, tiles.getTileLocation(6, 43))
    tiles.placeOnTile(apple52, tiles.getTileLocation(28, 45))
    tiles.placeOnTile(apple62, tiles.getTileLocation(19, 26))
    tiles.placeOnTile(apple72, tiles.getTileLocation(16, 26))
    tiles.placeOnTile(apple82, tiles.getTileLocation(19, 35))
    tiles.placeOnTile(apple92, tiles.getTileLocation(19, 26))
    tiles.placeOnTile(apple102, tiles.getTileLocation(28, 2))
    tiles.placeOnTile(apple112, tiles.getTileLocation(23, 2))
    tiles.placeOnTile(apple122, tiles.getTileLocation(30, 4))
    tiles.placeOnTile(apple132, tiles.getTileLocation(24, 4))
    tiles.placeOnTile(apple142, tiles.getTileLocation(20, 13))
    tiles.placeOnTile(apple152, tiles.getTileLocation(16, 34))
    tiles.placeOnTile(apple162, tiles.getTileLocation(31, 35))
    tiles.placeOnTile(apple172, tiles.getTileLocation(37, 32))
    tiles.placeOnTile(apple182, tiles.getTileLocation(37, 31))
    tiles.placeOnTile(apple192, tiles.getTileLocation(31, 8))
    tiles.placeOnTile(apple202, tiles.getTileLocation(25, 7))
    tiles.placeOnTile(apple212, tiles.getTileLocation(32, 14))
    tiles.placeOnTile(apple222, tiles.getTileLocation(38, 15))
    tiles.placeOnTile(apple232, tiles.getTileLocation(41, 28))
    tiles.placeOnTile(apple242, tiles.getTileLocation(54, 37))
    tiles.placeOnTile(apple25, tiles.getTileLocation(38, 11))
    for (let value2 of tiles.getTilesByType(assets.tile`myTile`)) {
        tiles.setTileAt(value2, assets.tile`tile2`)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.eggplant15, function (sprite, otherSprite) {
    info.changeScoreBy(-17)
    sprites.destroy(eggplant152)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.eggplant7, function (sprite, otherSprite) {
    info.changeScoreBy(-17)
    sprites.destroy(eggplant72)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.eggplant4, function (sprite, otherSprite) {
    info.changeScoreBy(-17)
    sprites.destroy(eggplant42)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.apple15, function (sprite, otherSprite) {
    info.changeScoreBy(-90)
    sprites.destroy(apple152, effects.spray, 500)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.strawberry9, function (sprite, otherSprite) {
    info.changeScoreBy(-6)
    sprites.destroy(strawberry92)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.cherry3, function (sprite, otherSprite) {
    info.changeScoreBy(-10)
    sprites.destroy(cherry32)
    curVel = player2.vx
    curVel += 500
    player2.setVelocity(curVel, curVel)
})
let apple152: Sprite = null
let apple122: Sprite = null
let apple25: Sprite = null
let apple242: Sprite = null
let strawberry142: Sprite = null
let strawberry92: Sprite = null
let strawberry112: Sprite = null
let strawberry102: Sprite = null
let apple102: Sprite = null
let strawberry16: Sprite = null
let apple52: Sprite = null
let apple172: Sprite = null
let eggplant152: Sprite = null
let eggplant92: Sprite = null
let eggplant72: Sprite = null
let eggplant52: Sprite = null
let eggplant42: Sprite = null
let strawberry152: Sprite = null
let apple26: Sprite = null
let apple232: Sprite = null
let strawberry132: Sprite = null
let eggplant17: Sprite = null
let strawberry32: Sprite = null
let eggplant82: Sprite = null
let strawberry42: Sprite = null
let apple182: Sprite = null
let eggplant122: Sprite = null
let Junk5: Sprite = null
let Junk2: Sprite = null
let Junk1: Sprite = null
let player2front: Sprite = null
let player2right: Sprite = null
let NPC12: Sprite = null
let eggplant112: Sprite = null
let NPC15: Sprite = null
let apple32: Sprite = null
let Junk4: Sprite = null
let strawberry72: Sprite = null
let strawberry62: Sprite = null
let NPC14: Sprite = null
let apple132: Sprite = null
let eggplant32: Sprite = null
let NPC13: Sprite = null
let player2left: Sprite = null
let apple212: Sprite = null
let strawberry82: Sprite = null
let apple142: Sprite = null
let eggplant62: Sprite = null
let apple202: Sprite = null
let NPC16: Sprite = null
let apple42: Sprite = null
let Junk3: Sprite = null
let apple62: Sprite = null
let apple82: Sprite = null
let eggplant22: Sprite = null
let strawberry52: Sprite = null
let apple192: Sprite = null
let cherry122: Sprite = null
let cherry112: Sprite = null
let cherry102: Sprite = null
let cherry82: Sprite = null
let cherry72: Sprite = null
let cherry62: Sprite = null
let cherry52: Sprite = null
let cherry32: Sprite = null
let cherry22: Sprite = null
let cherry9: Sprite = null
let cherry42: Sprite = null
let eggplant132: Sprite = null
let apple112: Sprite = null
let apple72: Sprite = null
let apple92: Sprite = null
let strawberry122: Sprite = null
let eggplant142: Sprite = null
let eggplant162: Sprite = null
let apple222: Sprite = null
let strawberry22: Sprite = null
let player2back: Sprite = null
let apple162: Sprite = null
let player2: Sprite = null
let curVel = 0
let eggplant102: Sprite = null
let Scene1: Sprite = null
game.splash("What is your activity level?")
game.splash("1 - Sedentary", " only activities of daily living ")
game.splash("2 - Low Active", " daily exercise equivalent to walking for 30 minutes")
game.splash("3 - Active", "daily exercise equivalent to walking for 1 hour and 45 minutes")
game.splash("4 - Very Active", "daily exercise equivalent to walking for 4 hours and 15 minutes")
game.splash("1-4?", game.askForNumber(""))
if (1 == 1) {
    info.setScore(2000)
} else if (2 == 2) {
    info.setScore(2200)
} else if (3 == 3) {
    info.setScore(2400)
} else {
    info.setScore(2700)
}
story.queueStoryPart(function () {
    Scene1 = sprites.create(img`
        999999999999999999999999999999999999999999999999999999999999999999999999999fffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999fffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999fffffffffffffffffffffffffffffffffff1111111111111111111111111ffffffffffffff1199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111111155555559999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111115fffff99999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111115fffff99999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111115fffff99999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111111fffff99999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999911111111111111111111111111111111111111111111111111113fffff99999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111113333333199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111133333333199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111111333333333199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111333333333333199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111113333333333333331199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111333333333333333111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111113333333333333331111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111333333333333333311111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111113333333333333311111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111111333333333333111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999111111111111111111111111111111133333333333311111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111111111111111111111113333333333333111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111111111111111111111333333333333311111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111111111111111111133333333333333111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111111111111111113333333333333311111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111111111111111333333333333331111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111111111111133333333333333111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111111111113333333333333311111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111111111133333333333331111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111111111333333333333111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111111113333333333311111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999111111111113333333333311111111111111111111111111111555555f9999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111113333333333111111111111111111111111111111155fffff9999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111133333333331111111111111111111111111111111155fffff9999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999911111111333333333311111111111111111111111111111111155fffff9999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111133333333333111111111111111111111111111111111115fffff9999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111333333333311111111111111111111111111111111111115333339999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111333333333111111111111111111111111111111111111113333339999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991133333333331111111111111111111111111111111111111133333339999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991133333333311111111111111111111111111111111111111333333339999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991333333331111111111111111111111111111111111111113333333319999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999933333333331111111111111111111111111111111111111133333333319999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999933333333311111111111111111111111111111111111111333333333111999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999933333333111111111111111111111111111111111111113333333331111999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999933333331111111111111111111111111111111111111133333333311111999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999933333311111111111111111111111111111111111111333333333111111999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999933333111111111111111111111111111111111111111333333331111111999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111113333333311111111999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111133333333111111111999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111333333331111111111999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111113333333331111111111999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111333333333311111111111999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111113333333333111111111111999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111133333333331111111111111999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111333333333311111111111111999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111111111113333333333111111111111111999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111111111133333333311111111111111111999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111111113333333333111111111111111119999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111111133333333331111111111111111119999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111111133333333311111111111111111119999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111113333333333111111111111111111119999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111113333333331111111111111111111119999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111133333333111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111333333333111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111113333333331111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111133333333311111111111111111155555599999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111333333333111111111111111111155555559999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999111111111111111111113333333333111111111111111111115fffff99999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999111111111111111111333333333331111111111111111111115fffff99999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999111111111111111133333333333311111111111111111111115fffff99999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999111111111111111333333333333111111111111111111111115fffff99999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999111111111111113333333333331111111111111111111111111fffff99999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111113333333333331111111111111111111111111113333399999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999111111111133333333333111111111111111111111111111133333399999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999111111113333333333311111111111111111111111111113333333399999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999111111133333333333111111111111111111111111111133333333399999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999111113333333333331111111111111111111111111111333333333399999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999111333333333333111111111111111111111111111113333333333199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999113333333333331111111111111111111111111111333333333331199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999133333333333111111111111111111111111111113333333333111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999933333333333331111111111111111111111111111133333333331111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999933333333333111111111111111111111111111113333333333311111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999933333333311111111111111111111111111111133333333333111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999933333333111111111111111111111111111111333333333311111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999933333331111111111111111111111111111133333333333111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999933333111111111111111111111111111113333333333331111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111111111333333333333111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999111111111111111111111111111133333333333331111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999111111111111111111111111113333333333333311111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111111333333333333331111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111111333333333333333111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111111133333333333333311111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111113333333333333331111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111111133333333333333111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111113333333333333311111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111111333333333333311111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999991111111111333333333333331111111111111111111111111155555599999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999111111133333333333333311111111111111111111111111115fffff99999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999111133333333333333333111111111111111111111111111115fffff99999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999111333333333333333311111111111111111111111111111115fffff99999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999333333333333333331111111111111111111111111111111115fffff99999999999999999999999999999999999999999999999999999999999999999999
        99999999999999999999999999999999999999999999999999999999333333333333331111111111111111111111111111111111115fffff99999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999993333333333311111111111111111111111111111111111111113333339999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999993333333331111111111111111111111111111111111111113333333339999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999993333333111111111111111111111111111111111111133333333333339999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999993333311111111111111111111111111111111111133333333333333339999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111113333333333333333339999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111333333333333333333119999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111333333333333333333111119999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999111111111111111111111111111111133333333333333331111111119999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999111111111111111111111111111133333333333333331111111111119999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999111111111111111111111113333333333333333333111111111111119999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999111111111111111111133333333333333333333311111111111111119999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999111111111111111111133333333333333333311111111111111111119999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999111111111111111111133333333333333331111111111111111111119999999999999999999999999999999999999999999999999999999999999999999
        999999999999999999999999999999999999999999999999999999999111111111111199999933333333333331111111111111111111111119999999999999999999999999999999999999999999999999999999999999999999
        `, SpriteKind.scenery)
    Scene1.setPosition(77, 70)
    pause(5000)
    sprites.destroy(Scene1)
})
story.queueStoryPart(function () {
    start_game()
})
