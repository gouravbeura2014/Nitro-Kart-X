/*
===========================================================
Nitro Kart X
Main Entry Point

Author: Gourav Beura

This is the first executable file of the game.

Responsibilities:

• Create the Phaser game
• Load configuration
• Initialize scenes
• Start Boot Scene
• Catch startup errors

===========================================================
*/

import Phaser from "phaser";

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

class BootScene extends Phaser.Scene {

    constructor() {
        super("BootScene");
    }

    preload(): void {

        console.log("Nitro Kart X Booting...");

    }

    create(): void {

        this.cameras.main.setBackgroundColor("#0f172a");

        this.add
            .text(
                GAME_WIDTH / 2,
                GAME_HEIGHT / 2,

                "NITRO KART X",

                {
                    fontFamily: "Arial",
                    fontSize: "56px",
                    color: "#ffffff",
                    fontStyle: "bold"
                }
            )
            .setOrigin(0.5);

        this.add
            .text(
                GAME_WIDTH / 2,
                GAME_HEIGHT / 2 + 80,

                "Version 0.1.0",

                {
                    fontFamily: "Arial",
                    fontSize: "24px",
                    color: "#90caf9"
                }
            )
            .setOrigin(0.5);

        this.add
            .text(
                GAME_WIDTH / 2,
                GAME_HEIGHT / 2 + 130,

                "Building the next generation kart racing experience",

                {
                    fontFamily: "Arial",
                    fontSize: "18px",
                    color: "#cccccc"
                }
            )
            .setOrigin(0.5);

    }

}

const config: Phaser.Types.Core.GameConfig = {

    type: Phaser.AUTO,

    width: GAME_WIDTH,

    height: GAME_HEIGHT,

    parent: "game-container",

    backgroundColor: "#000000",

    scene: [
        BootScene
    ],

    physics: {

        default: "arcade",

        arcade: {

            gravity: {
                x: 0,
                y: 0
            },

            debug: false

        }

    },

    render: {

        antialias: true,

        pixelArt: false

    },

    scale: {

        mode: Phaser.Scale.FIT,

        autoCenter: Phaser.Scale.CENTER_BOTH

    }

};

try {

    new Phaser.Game(config);

    console.log("Nitro Kart X successfully started.");

}
catch(error){

    console.error("Game failed to start.");

    console.error(error);

}
