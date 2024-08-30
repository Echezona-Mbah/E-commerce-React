import React from "react";
import SHOP_DATA from "./shop.data";
import PreviewCollection from "../../component/preview-collection/preview-collection.component"

class ShopPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            collection: SHOP_DATA
              
        }
    }

    render(){
        const {collection} = this.state;
         return(<div className="shop-page">
            {
                collection.map(({id,...otherSectionProps}) =>(
                    <PreviewCollection key={id} {...otherSectionProps}/>
                ))
            }

         </div>
        )
    }
}

export default ShopPage