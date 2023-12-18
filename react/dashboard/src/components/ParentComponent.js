import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
    return (
        <div>
            This is parent component !!!
            <ChildComponent name="Roshan" />
        </div>
    )
}
