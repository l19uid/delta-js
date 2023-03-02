import React from 'react';
import {ItemProp} from './Props';

export default function Product(props: ItemProp) {
    return (
        <div className={"item "} onClick={()=>props.LogItem(props.id)}>
            <p className={props.clicked ? "clicked" : "notclicked"}>{props.name}</p>
            <p>{props.description}</p>
        </div>
    );
}