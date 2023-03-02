import React from 'react';

export interface ItemProps {
    items: { name: string; id: number; description : string; clicked : boolean; }[],

    LogItem: (id: number) => void
}

export interface ItemProp{
    name: string;
    id: number;
    description: string;
    clicked : boolean;
    LogItem: (id: number) => void
}

