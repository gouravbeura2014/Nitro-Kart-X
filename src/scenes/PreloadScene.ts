import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super("PreloadScene");
    }

    preload(): void {
        this.cameras.main.setBackgroundColor("#101522");

        const width = this.cameras.main.width;
        const height = this.cameras.main.height;

        this.add
            .text(width / 2, height / 2 - 60, "Loading Nitro Kart X...", {
                fontFamily: "Arial",
                fontSize: "32px",
                color: "#ffffff",
            })
            .setOrigin(0.5);

        // Assets will be loaded here later.
        // Example:
        // this.load.image("kart", "assets/karts/default.png");
        // this.load.image("track", "assets/tracks/test.png");
    }

    create(): void {
    console.log("Assets loaded.");

    this.scene.start("MainMenuScene");
    }
        console.log("Assets loaded successfully.");

        // For now, return to BootScene.
        this.scene.start("BootScene");
    }
}
