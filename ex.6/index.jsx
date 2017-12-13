import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './Member'

ReactDOM.render(
    <Family lastName="Rímulo">
        <Member name="Rômulo" />
        <Member name="Geraldo" />
    </Family>
, document.getElementById('app'))