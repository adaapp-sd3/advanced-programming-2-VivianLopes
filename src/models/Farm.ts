import Drawable from "./abstract/Drawable"
import Field from "./Field"
import Cow from "./animals/Cow"
import Chicken from "./animals/Chicken"
import Sheep from "./animals/Sheep"


class Farm extends Drawable {
    fields: Field[] = []
    width: number = 700
    height: number = 710
    cows: any
    sheep: any
    chickens: any
    wool: any
    eggs: any
    corn: any
    straw: any
    milk: any
    beef: any
    lamb: any
    chicken: any
    seeds: any

    constructor(
        cows: any = {
            name: "Cows",
            total: 142,
            objects: []
        },
        sheep: any = {
            name: "Sheep",
            total: 142,
            objects: []
        },
        chickens: any = {
            name: "Chickens",
            total: 142,
            objects: []
        },
        straw: any = {
            name: "Straw",
            total: 1000,
            unit: "bails"
        },
        corn: any = {
            name: "Corn",
            total: 1000,
            unit: "cobs"
        },
        wool: any = {
            name: "Wool",
            total: 0,
            unit: "bundles"
        },
        eggs: any = {
            name: "Eggs",
            total: 0,
            unit: "boxes"
        },
        milk: any = {
            name: "Milk",
            total: 0,
            unit: "pints"
        },
        beef: any = {
            name: "Beef",
            total: 0,
            unit: "steaks"
        },
        lamb: any = {
            name: "Lamb",
            total: 0,
            unit: "shanks"
        },
        chicken: any = {
            name: "Chicken",
            total: 0,
            unit: "fillets"
        },
        seeds: any = {
            name: "Grass seeds",
            total: 0,
            unit: "bunches"
        }
    ) {
        super()
        this.cows = cows
        this.sheep = sheep
        this.chickens = chickens
        this.wool = wool
        this.straw = straw
        this.corn = corn
        this.eggs = eggs
        this.milk = milk
        this.beef = beef
        this.lamb = lamb
        this.chicken = chicken
        this.seeds = seeds
    }

    public preload() {
        this.createBasicFarm()
    }

    private createBasicFarm = () => {
        let firstFieldX = 25
        let firstFieldY = 25
        let firstFieldW = 350
        let firstFieldH = 175

        for (let i = 0; i < this.cows.total; i++) {
            let cow = new Cow(this)
            cow.p5 = this.p5
            cow.preload()
            cow.setRandomPositionInField(
                firstFieldX,
                firstFieldY,
                firstFieldW,
                firstFieldH
            )
            this.cows.objects.push(cow)
        }


        for (let i = 0; i < this.chickens.total; i++) {
            let chicken = new Chicken(this)
            chicken.p5 = this.p5
            chicken.preload()
            chicken.setRandomPositionInField(25, 275, 350, 125)
            this.chickens.objects.push(chicken)
        }

        for (let i = 0; i < this.sheep.total; i++) {
            let sheep = new Sheep(this)
            sheep.p5 = this.p5
            sheep.preload()
            sheep.setRandomPositionInField(25, 450, 300, 125)
            this.sheep.objects.push(sheep)
        }


        this.fields.push(
            new Field(
                firstFieldX,
                firstFieldY,
                firstFieldW,
                firstFieldH,
                this.cows.objects
            )
        )
        this.fields.push(new Field(25, 275, 350, 125, this.chickens.objects))
        this.fields.push(new Field(475, 25, 200, 325))
        this.fields.push(new Field(25, 450, 300, 125, this.sheep.objects))
        for (let field of this.fields) {
            field.p5 = this.p5
            field.setHandleUpdate = this.updateUI
        }
    }

    public draw() {
        for (let field of this.fields) {
            field.draw()
        }
    }
}

export default Farm



