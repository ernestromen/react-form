import React, { PureComponent } from 'react'
import { GridRow, Container } from 'semantic-ui-react'


class DisplayData extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            posts:[]
        }

        //===========get database data!==========================
        this.getDataFromDataBase = this.getDataFromDataBase.bind(this);

    }


    componentDidMount() {
        fetch("http://localhost:4000")
        .then(response => response.json())
        .then(result => {
            this.setState({posts: result})
        })
    }


            //===========get database data!==========================

    getDataFromDataBase(){
        const myOb = this.state.posts;
console.log(myOb,'right here');
var arr = [];

for(var x = 0; x < myOb.length; x++){
let name = myOb[x].name;
let email = myOb[x].email;
arr.push(<div style={{"textAlign":"left"}} className="grid-item">{name}</div>,<div style={{"textAlign":"left"}} className="grid-item" >{email}</div>);
}
return arr;
      }


    render() {
        return (
            <Container>
            <GridRow>
         <div className="grid-container">{this.getDataFromDataBase()}</div>
        </GridRow>  
        </Container>
 
        )
    }
}

export default DisplayData