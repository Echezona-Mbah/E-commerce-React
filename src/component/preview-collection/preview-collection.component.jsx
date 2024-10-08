import React from "react";
import CollectionItem from '../collection-Item/collection-item.component';

import './preview-collection.style.css';

const PreviewCollection = ({title,items}) => {
    return(
        <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items.filter((item, idx)=>idx <4)
            .map(({id, ...otherItemProps})=>(
                <CollectionItem key={id} {...otherItemProps}/>
            ))}
{/* kkk ugfftjvjuuyyyynrre*/}
        </div>
    </div>
    )
}

export default PreviewCollection;