scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    tiles.setTileAt(location, assets.tile`transparency16`)
    music.bigCrash.play()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    music.zapped.play()
    info.changeLifeBy(-2)
    tiles.setTileAt(location, assets.tile`transparency16`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleBlueCrystal, function (sprite, location) {
    game.over(true)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.changeScoreBy(randint(10, 50))
    tiles.setTileAt(location, sprites.dungeon.chestOpen)
})
let princess = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . f 5 5 f . . . . . . 
    . . . . . f f d d f f . . . . . 
    . . . . f f b d d b f f . . . . 
    . . . f f d f d d f d f f . . . 
    . . . f 1 f d d d d f 1 f . . . 
    . . . f 3 f d d d d f 3 f . . . 
    . . . . f . . d d . . f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(princess, sprites.dungeon.collectibleRedCrystal)
controller.moveSprite(princess)
scene.cameraFollowSprite(princess)
info.setLife(10)
