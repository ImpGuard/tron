module Data {
    export var WIDTH: number = 1000;            //The width of the map in terms of map unit.
    export var HEIGHT: number = 1000;           //The height of the map in terms of map unit.

    export var GRID_WIDTH: number = 20;         //The width of the map in terms of number of grids.
    export var GRID_HEIGHT: number = 20;        //The height of the map in terms of number of grids.

    /* The base (bottom) of the player is a triangle with the tip at the player's current position. */
    export var PLAYER_LENGTH: number = 21;      //The height of the triangular base.
    export var PLAYER_WIDTH: number = 12;       //The width of the triangular base.


    export interface Point {
        x: number;
        y: number;
        z?: number;
    }

    export class Player {
        curPos: Point;
        curTheta: number;
        normalizedTheta: number;
        dir: THREE.Vector3;

        constructor(curPos: Point, normalizedTheta: number, dir: THREE.Vector3) {
            this.curPos = curPos;
            this.curTheta = 0;
            this.normalizedTheta = normalizedTheta;
            this.dir = dir.normalize();
        }
    }

    /* Objects on the map that the player can interact with. Each occupies an entire grid. */
    export interface MapObject {
        pos: Point;                             // The bottom left corner of the object, as well as its height
        color?: number;
    }

    export class GameState {
        player: Player;
        obstacles: MapObject[];
        goal: MapObject;
        score: number;                          //Number of times the game is won.
        level: number;                          // Level counter.
        paused: boolean;
    }
}
