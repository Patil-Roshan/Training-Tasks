import React from 'react';
import Form from "./Form";
import FunctionSetTimeout from './FunctionSetTimeout';
import ParentComponent from './ParentComponent';
import ToggleButton from './ToggleButton';

export default function Home() {
    return (
        <div>
            <ParentComponent/>
            <FunctionSetTimeout/>
            <ToggleButton/>
            <Form/>
        </div>
    )
}



