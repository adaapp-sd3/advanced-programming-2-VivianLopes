import React, {Component} from "react"
import "../../App.css"

class MarketDashboard extends Component {

    buyItem = item => {
        if (item === "seeds") {
            if (this.props.market.currentFarmer.budget > this.props.market.grassSeedPrice) {
                const grassSeedAmount = 100
                this.props.market.currentFarmer.myFarm.seeds.total += grassSeedAmount
                let pricePerAmount = grassSeedAmount * this.props.market.grassSeedPrice
                this.props.market.currentFarmer.budget -= pricePerAmount
            }
        } else if (item === "cows") {
            if (this.props.market.currentFarmer.budget > this.props.market.cowPrice) {
                const cowAmount = 5
                this.props.market.currentFarmer.myFarm.cows.total += cowAmount
                let pricePerAmount = cowAmount * this.props.market.cowPrice
                this.props.market.currentFarmer.budget -= pricePerAmount
            }
        } else if (item === "chickens") {
            if (this.props.market.currentFarmer.budget > this.props.market.liveChickenPrice) {
                const chickenAmount = 5
                this.props.market.currentFarmer.myFarm.chicken.total += chickenAmount
                let pricePerAmount = chickenAmount * this.props.market.chickenPrice
                this.props.market.currentFarmer.budget -= pricePerAmount
            }
        } else if (item === "sheep") {
            if (this.props.market.currentFarmer.budget > this.props.market.sheepPrice) {
                const sheepAmount = 5
                this.props.market.currentFarmer.myFarm.sheep.total += sheepAmount
                let pricePerAmount = sheepAmount * this.props.market.sheepPrice
                this.props.market.currentFarmer.budget -= pricePerAmount
            }
        } else if (item === "solarPanel") {
            if (this.props.market.currentFarmer.budget > this.props.market.solarPanelPrice) {
                const solarPanelAmount = 1
                this.props.market.currentFarmer.myFarm.solarPanel.total += solarPanelAmount
                let pricePerAmount = solarPanelAmount * this.props.market.solarPanelPrice
                this.props.market.currentFarmer.budget -= pricePerAmount
            }
        } else if (item === "greenGas") {
            if (this.props.market.currentFarmer.budget > this.props.market.greenGasPrice) {
                const greenGasAmount = 1
                this.props.market.currentFarmer.myFarm.greenGas.total += greenGasAmount
                let pricePerAmount = greenGasAmount * this.props.market.greenGasPrice
                this.props.market.currentFarmer.budget -= pricePerAmount
            }
        }
    }


    sellItem = item => {
        if (item === "milk") {
            if (this.props.market.currentFarmer.myFarm.milk.total > 0) {
                const milkAmount = 5
                this.props.market.currentFarmer.myFarm.milk.total -= milkAmount
                let pricePerAmount = milkAmount * this.props.market.milkPrice
                this.props.market.currentFarmer.budget += pricePerAmount
            }
        } else if (item === "beef") {
            if (this.props.market.currentFarmer.myFarm.beef.total > 0) {
                const beefAmount = 10
                this.props.market.currentFarmer.myFarm.beef.total -= beefAmount
                let pricePerAmount = beefAmount * this.props.market.beefPrice
                this.props.market.currentFarmer.budget += pricePerAmount
            }
        } else if (item === "eggs") {
            if (this.props.market.currentFarmer.myFarm.eggs.total > 0) {
                const eggsAmount = 2
                this.props.market.currentFarmer.myFarm.eggs.total -= eggsAmount
                let pricePerAmount = eggsAmount * this.props.market.eggPrice
                this.props.market.currentFarmer.budget += pricePerAmount
            }
        } else if (item === "chicken") {
            if (this.props.market.currentFarmer.myFarm.chicken.total > 0) {
                const chickenAmount = 5
                this.props.market.currentFarmer.myFarm.chicken.total -= chickenAmount
                let pricePerAmount = chickenAmount * this.props.market.chickenPrice
                this.props.market.currentFarmer.budget += pricePerAmount
            }
        } else if (item === "wool") {
            if (this.props.market.currentFarmer.myFarm.wool.total > 0) {
                const woolAmount = 10
                this.props.market.currentFarmer.myFarm.wool.total -= woolAmount
                let pricePerAmount = woolAmount * this.props.market.woolPrice
                this.props.market.currentFarmer.budget += pricePerAmount
            }
        } else if (item === "lamb") {
            if (this.props.market.currentFarmer.myFarm.lamb.total > 0) {
                const lambAmount = 5
                this.props.market.currentFarmer.myFarm.lamb.total -= lambAmount
                let pricePerAmount = lambAmount * this.props.market.lambPrice
                this.props.market.currentFarmer.budget += pricePerAmount
            }
        }
    }


    render() {
        return (
            <div className="MarketDashboard">
                <h2>Market</h2>
                <p>Welcome to the market! See our prices below:</p>
                <h3>Buy</h3>
                <dl>
                    <dt>Seeds</dt>
                    <dd>
                        <button onClick={() => this.buyItem("seeds")}>
                            Buy 100 seeds for {this.props.market.grassSeedPrice} per seed
                        </button>
                    </dd>
                    <dt>Cows</dt>
                    <dd>
                        <button onClick={() => this.buyItem("cows")}>
                            Buy 5 cows for {this.props.market.cowPrice} per cow
                        </button>
                    </dd>
                    <dt>Chickens</dt>
                    <dd>
                        <button onClick={() => this.buyItem("chickens")}>
                            Buy 5 chickens for {this.props.market.liveChickenPrice} per chicken
                        </button>
                    </dd>
                    <dt>Sheep</dt>
                    <dd>
                        <button onClick={() => this.buyItem("sheep")}>
                            Buy 5 sheep for {this.props.market.sheepPrice} per sheep
                        </button>
                    </dd>
                    <dt>Solar panels</dt>
                    <dd>
                        <button onClick={() => this.buyItem("solar panel")}>
                            Buy 1 solar panel for {this.props.market.solarPanelPrice} per unit
                        </button>
                    </dd>
                    <dt>Green gas</dt>
                    <dd>
                        <button onClick={() => this.buyItem("green gas")}>
                            Buy 1 green gas generator for {this.props.market.sheepPrice} per unit
                        </button>
                    </dd>
                </dl>
                <h3>Sell</h3>
                <dl>
                    <dt>Milk</dt>
                    <dd>
                        <button onClick={() => this.sellItem("milk")}>
                            sell milk for {this.props.market.milkPrice} per 5 pints
                        </button>
                    </dd>
                    <dt>Beef</dt>
                    <dd>
                        <button onClick={() => this.sellItem("beef")}>
                            sell beef for {this.props.market.beefPrice} per 10 steaks
                        </button>
                    </dd>
                    <dt>Eggs</dt>
                    <dd>
                        <button onClick={() => this.sellItem("eggs")}>
                            sell eggs for {this.props.market.eggPrice} per 2 boxes
                        </button>
                    </dd>
                    <dt>Chicken</dt>
                    <dd>
                        <button onClick={() => this.sellItem("chicken")}>
                            sell chicken for {this.props.market.chickenPrice} per 5 fillets
                        </button>
                    </dd>
                    <dt>Wool</dt>
                    <dd>
                        <button onClick={() => this.sellItem("wool")}>
                            sell wool for {this.props.market.woolPrice} per 10 bundles
                        </button>
                    </dd>
                    <dt>Lamb</dt>
                    <dd>
                        <button onClick={() => this.sellItem("lamb")}>
                            sell lamb for {this.props.market.lambPrice} per 5 shanks
                        </button>
                    </dd>
                </dl>
            </div>
        )
    }
}

export default MarketDashboard


