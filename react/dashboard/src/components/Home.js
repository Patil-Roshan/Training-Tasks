import React from 'react';
import Form from "./Form";
import FunctionSetInterval from './FunctionSetInterval';
import FunctionSetTimeout from './FunctionSetTimeout';
import ParentComponent from './ParentComponent';
import ToggleButton from './ToggleButton';
export default function Home() {
    return (
        <div>
            <FunctionSetInterval />
            <FunctionSetTimeout />
            <ParentComponent />
            <ToggleButton />
            <Form />
        </div>
    )
}
