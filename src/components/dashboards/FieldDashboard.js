import React, {Component} from "react"
import "../../index.css"

class FieldDashboard extends Component {

    milkCows = () => {
        for (var i = 0; i < this.props.field.contents.length; i++) {
            this.props.field.contents[i].yieldMilk()
        }
    }

    yieldBeef = () => {
        let length = this.props.field.contents.length
        let mid = length / 2
        let cows = this.props.field.contents[0].farm.cows
        for (var i = length - 1; i > mid; i--) {
            cows.objects[i].yieldBeef()
        }
    }

    yieldEggs = () => {
        for (var i = 0; i < this.props.field.contents.length; i++) {
            this.props.field.contents[i].yieldEggs()
        }
    }

    yieldChicken = () => {
        let length = this.props.field.contents.length
        let mid = length / 2
        let chickens = this.props.field.contents[0].farm.chickens
        for (var i = length - 1; i > mid; i--) {
            chickens.objects[i].yieldChicken()
        }
    }

    yieldWool = () => {
        for (var i = 0; i < this.props.field.contents.length; i++) {
            this.props.field.contents[i].yieldWool()
        }
    }

    yieldLamb = () => {
        let length = this.props.field.contents.length
        let mid = length / 2
        let sheep = this.props.field.contents[0].farm.sheep
        for (var i = length - 1; i > mid; i--) {
            sheep.objects[i].yieldLamb()
        }
    }


    render() {
        return (
            <div className="FieldDashboard">
                <h2>Field</h2>
                {this.props.field.contents[0] && (
                    <p>
                        In this field you have {this.props.field.contents.length}{" "}
                        {this.props.field.contents[0].name}s
                        {this.props.field.contents[0].name === "Cow" && (
                            <div>
                                <button onClick={this.milkCows}>Milk Cows</button>
                                <button onClick={this.yieldBeef}>Snap Cows</button>

                            </div>
                        )}
                        {this.props.field.contents[0].name === "Chicken" && (
                            <div>
                                <button onClick={this.yieldEggs}>Get Eggs</button>
                                <button onClick={this.yieldChicken}>Snap Chickens</button>

                            </div>
                        )}
                        {this.props.field.contents[0].name === "Sheep" && (
                            <div>
                                <button onClick={this.yieldWool}>Shear Sheep</button>
                                <button onClick={this.yieldLamb}>Snap Sheep</button>

                            </div>
                        )}
                    </p>

                )}
                {this.props.field.contents.map((item, i) => (
                    <>
                        {item.showUI && (
                            <div className="fieldItem">
                                <h3><img src={item.imgUrl} alt={item.name}/> {item.name}</h3>
                                <dl>
                                    <dt>Hunger</dt>
                                    <dd>{item.hunger}</dd>
                                </dl>
                            </div>
                        )}
                    </>
                ))}
            </div>
        )
    }
}

export default FieldDashboard
