import React, { Component } from 'react'

export class User extends Component {
    render(props) {
        const {data} = this.props
        return (
            <div>
                <h1>User Component</h1>
                <p>The name is {data.name} {data.age}</p>
            </div>
        )
    }
}

export default User
