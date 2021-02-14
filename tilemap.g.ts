// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100004000000000000000000000700000004060006060006040600060600060600060200000000000000000000040000000406000706060606060506060606070006060006060606070707070706060600060000000000000701070107050000000406000606060604070707070606060006060006080806060607060606080607060605060606060704070707060606000600000005000007060706070500000007000606060606070005050506060606000006060606060606050606060606060007000404040404000000000000000004060606060606060605060606060606060600000007000000000000040404040606030606060606060606060606060406`, img`
. . . . . . . . . . . . . . . . 
2 . 2 2 . 2 . 2 . 2 2 . 2 2 . 2 
. . . . . . . . . . . . . . . . 
2 . . 2 2 2 2 2 . 2 2 2 2 . . 2 
2 . 2 2 2 2 . . . . . 2 2 2 . 2 
. . . . . . . 2 . 2 . . . . . . 
2 . 2 2 2 2 . . . . . 2 2 2 . 2 
2 . 2 2 2 2 2 2 . 2 2 2 2 2 . 2 
2 . 2 2 2 2 . . . . . 2 2 2 . 2 
. . . . . . . 2 . 2 . . . . . . 
. 2 2 2 2 2 . . . . . 2 2 2 2 . 
. 2 2 2 2 2 2 2 . 2 2 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal,myTiles.tile1,myTiles.tile2,sprites.castle.rock2,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,myTiles.tile3], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
