import React from 'react';
import Product from './Product';
import {ItemProps} from './Props';

export default function List(props: ItemProps) {
    return <div>
        {props.items.map((item: any) => {
            return (
                <Product name={item.name} id = {item.id} description={item.description} LogItem={props.LogItem} clicked={item.clicked}/>
            );
        })}
    </div>;
}
