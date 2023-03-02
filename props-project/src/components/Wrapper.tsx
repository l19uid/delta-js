import React from 'react';
import Products from './Products';
import {ItemProps} from './Props';

export default function Wrapper(props: ItemProps) {
    return (
        <Products items={props.items} LogItem={props.LogItem}/>
    );
}