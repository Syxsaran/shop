import { Component } from "react";
import Counter from "./Counter";

class CounterList extends Component{
    state = {
        itemlist:[
            {id: 1, value: 10, itemname:"iPhone" , price:150 },
            {id: 2, value: 20, itemname:"iPad", price:200 },
            {id: 3, value: 30, itemname:"iMac", price:300 },
            {id: 4, value: 40, itemname:"iBook", price:500 },
        ]
    };
    render () {
        return (
            <div>
                <div className="d-inline mx-2">ราคารวม 100</div>
                <button 
                    onClick={this.resetButton}
                    className="btn btn-sm btn-warning d-inline">Reset</button>               
                {
                    this.state.itemlist.map((item) => {                        
                        return (<Counter key={item.id} item={item} onIncrement={this.Increment} />);
                        }
                    )
                    
                }

            </div>    
        );
    }
    


    Increment = (item) => {
        var _itemList = [...this.state.itemlist];
        const indexItem = _itemList.indexOf(item);
        _itemList[indexItem] = { ...item };
        _itemList[indexItem].value++;
        this.setState({ itemlist : _itemList });
    }

    decrement = (item) => {
        var _itemList = [...this.state.itemlist];
        const indexItem = _itemList.indexOf(item);
        _itemList[indexItem] = { ...item };
        _itemList[indexItem].value--;
        this.setState({ itemlist : _itemList });
    }

        
    //function resetButton() {}


    resetButton = () => {
        var resetItem = this.state.itemlist.map((item) => { 
            item.value = 0; 
            return item;
        });
        this.setState({ resetItem });
    }
}
export default CounterList;