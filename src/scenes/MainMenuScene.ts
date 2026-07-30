import Phaser from "phaser";

export default class MainMenuScene extends Phaser.Scene {
    constructor() {
        super("MainMenuScene");
    }

    create(): void {
        const { width, height } = this.scale;

        this.cameras.main.setBackgroundColor("#14213d");

        this.add
            .text(width / 2, 100, "NITRO KART X", {
                fontFamily: "Arial",
                fontSize: "56px",
                color: "#ffffff",
                fontStyle: "bold",
            })
            .setOrigin(0.5);

        this.add
            .text(width / 2, 180, "Prototype v0.1.0", {
                fontFamily: "Arial",
                fontSize: "22px",
                color: "#ffd166",
            })
            .setOrigin(0.5);

        const playButton = this.add
            .text(width / 2, 320, "▶ PLAY", {
                fontFamily: "Arial",
                fontSize: "34px",
                color: "#00ff88",
                backgroundColor: "#1f2937",
                padding: {
                    left: 20,
                    right: 20,
                    top: 10,
                    bottom: 10,
                },
            })
            .setOrigin(0.5)
            .setInteractive({ useHandCursor: true });

        playButton.on("pointerdown", () => {
            console.log("Play button clicked.");
            // Later:
            this.scene.start("RaceScene");
        });

        this.add
            .text(
                width / 2,
                height - 40,
                "© Nitro Kart X - Early Development Build",
                {
                    fontFamily: "Arial",
                    fontSize: "16px",
                    color: "#bbbbbb",
                },
            )
            .setOrigin(0.5);
    }
}
