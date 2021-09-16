import React, { PureComponent } from 'react'
import axios from 'axios';
import 'semantic-ui-css/semantic.min.css'
import { Container, Form, GridRow } from 'semantic-ui-react'


class MyForm extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
        username: '',
        fullname:'',
        password:'',
        posts:[]
            };

        this.handleUserName = this.handleUserName.bind(this);
        this.handleFullName = this.handleFullName.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

     
//==========handles username input============
    handleUserName(event) {
        this.setState({username: event.target.value});
      }
    
      // ===========handles fullname input===========
      handleFullName(event) {
        this.setState({fullname: event.target.value});
      }
    
      // ===========handles fullname input==============
      handlePassword(event) {
        this.setState({password: event.target.value});
      }
    
     async handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.username);
        event.preventDefault();

try{
//=========sending to server============

const reactData = (this.state);
console.log(reactData);
const url = "http://localhost:4000";

let sendData = () => {
axios.post(url, reactData, {headers:{Accept: 'application/json', "content-type": "application/json"}})
   .then(({res}) => res)
   .catch(err => console.log('this is an error inside sendData'))
}

await sendData();

}catch(err){
    console.log(err);
}

      }

    render() {

        return (
          <Container style={{width: '500px'}} >
           <GridRow>
    <Form onSubmit={this.handleSubmit}>
      <Form.Field>
        <label>
          fullname:
          <input type="text" value={this.state.fullname} onChange={this.handleFullName} />
        </label>
        </Form.Field>
     
        <label>
          username:
          <input type="text" value={this.state.username} onChange={this.handleUserName} />
        </label>

     
        <label>
          password:
          <input type="password" value={this.state.password} onChange={this.handlePassword} />
        </label>

<Container  textAlign='center'>
        <button style={{textAlign:'center', marginTop:'30px'}} className="ui button"   type="submit" >Submit</button>
        </Container>

        </Form>
        </GridRow>
      
        </Container>
        )
    }
}

export default MyForm;