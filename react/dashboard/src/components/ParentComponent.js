import React from 'react'
import ChildComponent from './ChildComponent'

export default function ParentComponent() {
    return (
        <div>
            <h1> Welcome to Nimap Infotech </h1>
            <ChildComponent name="Roshan"/>
        </div>
    )
}
