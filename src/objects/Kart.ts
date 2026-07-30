import Phaser from "phaser";

export default class Kart extends Phaser.GameObjects.Rectangle {
    private speed: number = 0;
    private maxSpeed: number = 300;
    private acceleration: number = 10;
    private rotationSpeed: number = 3;

    constructor(scene: Phaser.Scene, x: number, y: number) {
        super(scene, x, y, 40, 20, 0xff3333);

        scene.add.existing(this);

        this.setOrigin(0.5);
    }

    public update(
        cursors: Phaser.Types.Input.Keyboard.CursorKeys,
        delta: number,
    ): void {
        const dt = delta / 1000;

        if (cursors.up?.isDown) {
            this.speed += this.acceleration;
        } else if (cursors.down?.isDown) {
            this.speed -= this.acceleration;
        } else {
            this.speed *= 0.98;
        }

        this.speed = Phaser.Math.Clamp(
            this.speed,
            -this.maxSpeed / 2,
            this.maxSpeed,
        );

        if (cursors.left?.isDown) {
            this.rotation -= this.rotationSpeed * dt;
        }

        if (cursors.right?.isDown) {
            this.rotation += this.rotationSpeed * dt;
        }

        this.x += Math.cos(this.rotation) * this.speed * dt;
        this.y += Math.sin(this.rotation) * this.speed * dt;
    }
}
