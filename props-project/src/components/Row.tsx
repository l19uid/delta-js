import React from 'react';
import List from './List';
import {ItemProps} from './Props';

export default function Row(props: ItemProps) {
    return (
        <List items={props.items} LogItem={props.LogItem}/>
    );
}