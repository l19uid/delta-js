import React from 'react';
import Row from './Row';
import {ItemProps} from './Props';

export default function Products(props: ItemProps) {
    return (
        <Row items={props.items} LogItem={props.LogItem}/>
    );
}