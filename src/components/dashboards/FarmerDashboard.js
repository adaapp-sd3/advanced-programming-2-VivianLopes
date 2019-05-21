import React, {Component} from 'react';
import "../../index.css"

class FarmerDashboard extends Component {

    hideUI = () => {
        this.props.farmer.showUI = false
    }

    render() {
        return (
            <div className="FarmerDashboard">
                <dl>
                    <dt>Current budget</dt>
                    <dd>{this.props.farmer.budget}</dd>
                    {this.props.farmer.myFarm && (<>
                            <dt>Total cows</dt>
                            <dd>{this.props.farmer.myFarm.cows.total}</dd>
                            <dt>Total straw</dt>
                            <dd>{this.props.farmer.myFarm.straw.total} bails</dd>
                            <dt>Total milk</dt>
                            <dd>{this.props.farmer.myFarm.milk.total} pints</dd>
                            <dt>Total seeds</dt>
                            <dd>{this.props.farmer.myFarm.seeds.total} bunches</dd>
                            <dt>Total beef</dt>
                            <dd>{this.props.farmer.myFarm.beef.total} steaks</dd>


                            <dt>Total Chickens</dt>
                            <dd>{this.props.farmer.myFarm.chickens.total}</dd>
                            <dt>Total corn</dt>
                            <dd>{this.props.farmer.myFarm.corn.total} cobs</dd>
                            <dt>Total eggs</dt>
                            <dd>{this.props.farmer.myFarm.eggs.total} boxes</dd>
                            <dt>Total chicken</dt>
                            <dd>{this.props.farmer.myFarm.chicken.total} fillets</dd>

                            <dt>Total sheep</dt>
                            <dd>{this.props.farmer.myFarm.sheep.total}</dd>
                            <dt>Total wool</dt>
                            <dd>{this.props.farmer.myFarm.wool.total} bundles</dd>
                            <dt>Total lamb</dt>
                            <dd>{this.props.farmer.myFarm.lamb.total} shanks</dd>
                        </>
                    )}
                </dl>
                <button onClick={this.hideUI}>Hide UI</button>
            </div>
        )
    }
}

export default FarmerDashboard;


