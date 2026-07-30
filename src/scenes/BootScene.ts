import Phaser from "phaser";

const GAME_WIDTH = 1280;
const GAME_HEIGHT = 720;

export default class BootScene extends Phaser.Scene {
    constructor() {
        super("BootScene");
    }

    preload(): void {
        console.log("Loading Nitro Kart X...");
    }

    create(): void {
    console.log("Boot complete.");

    this.scene.start("PreloadScene");
    } 
        this.cameras.main.setBackgroundColor("#0f172a");

        this.add
            .text(
                GAME_WIDTH / 2,
                GAME_HEIGHT / 2 - 40,
                "NITRO KART X",
                {
                    fontFamily: "Arial",
                    fontSize: "56px",
                    color: "#ffffff",
                    fontStyle: "bold",
                },
            )
            .setOrigin(0.5);

        this.add
            .text(
                GAME_WIDTH / 2,
                GAME_HEIGHT / 2 + 30,
                "Boot Scene Loaded Successfully",
                {
                    fontFamily: "Arial",
                    fontSize: "24px",
                    color: "#90caf9",
                },
            )
            .setOrigin(0.5);

        this.add
            .text(
                GAME_WIDTH / 2,
                GAME_HEIGHT / 2 + 80,
                "The adventure begins...",
                {
                    fontFamily: "Arial",
                    fontSize: "18px",
                    color: "#cccccc",
                },
            )
            .setOrigin(0.5);
    }
}
