/// <reference path="./references.ts" />
module Graphics {
    import GameState = Data.GameState;

    export class Engine {
        constructor(state: GameState) {
            // fixme
        }

        render(): void {
            // fixme
        }

        gameOver(): void {

        }
    }

    function test() {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1,
        1000 );

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        var geometry = new THREE.CubeGeometry(1,1,1);
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

    }
}
