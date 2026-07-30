import Phaser from "phaser";

export default class RaceScene extends Phaser.Scene {
    constructor() {
        super("RaceScene");
    }

    create(): void {
        const { width, height } = this.scale;

        this.cameras.main.setBackgroundColor("#2d6a4f");

        this.add
            .text(width / 2, height / 2 - 40, "🏁 RACE START!", {
                fontFamily: "Arial",
                fontSize: "48px",
                color: "#ffffff",
                fontStyle: "bold",
            })
            .setOrigin(0.5);

        this.add
            .text(
                width / 2,
                height / 2 + 30,
                "This is the first prototype race scene.",
                {
                    fontFamily: "Arial",
                    fontSize: "22px",
                    color: "#f1f1f1",
                },
            )
            .setOrigin(0.5);
    }
}
