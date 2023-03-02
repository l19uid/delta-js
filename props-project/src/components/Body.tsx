import React from 'react';
import Wrapper from './Wrapper';
import {ItemProps} from './Props';


export default function Body(props: ItemProps) {
    return (
        <Wrapper items={props.items} LogItem={props.LogItem}/>
    );
}