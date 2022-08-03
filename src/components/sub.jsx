import React, { Component } from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'


export default class Sub extends Component{
  constructor(){

  super();

  this.state={ 
        display1:true,
        enable: false,
        email:'',
      }
  }

  handleChange = event =>{
  this.setState({ [event.target.name]:event.target.value });
  }

  componentDidUpdate(prevProps, prevState) {
      if (
        prevState.email !== this.state.email 
      ) {
        if (this.state.email) {
          this.setState({ enabled: true });
        } else {
          this.setState({ enabled: false });
        }
      }
  }


  handleSubmit = event =>{

  event.preventDefault();

  // console.log("User name :"  + this.state.name)
  // console.log("User Email :"  + this.state.email)
  const url = `${process.env.COCKPIT_API_URL}/api/forms/submit/form?token=${process.env.COCKPIT_TOKEN}`

  fetch(url, { 
      method: 'post', 
      body: JSON.stringify(
          {
              "form": {
                  "email": this.state.email,
              
          }
          }), 
      headers:{ 'Content-Type': 'application/json'} })
  // .then(res => res.json())
  // .catch(error => console.error('Error:', error))
  // .then(res => {console.log('Success:', res)})
  addToMailchimp(this.state.email)
        .then(({ msg, result }) => {
            // console.log('msg', `${result}: ${msg}`)

            if (result !== 'success') {
                throw msg
            }
        })
        .catch(err => {
            // console.log('err', err)
        })
      this.setState({
                  display1:false
              })
  }

render(){

return(
    <div className= "modal-subscribe-div" > 
      {this.state.display1?
      <div className= "modal-subscribe-div1">
        <h2>Newsletter</h2>
          <form onSubmit={this.handleSubmit} className= "modal-subscribe-form" >

          <label className="modal-subscribe-label">
              <span>
                  <p className= "modal-subscribe-p1"> Email : </p>
              </span>
                  <input type="email" name="email" onChange={this.handleChange} required className= "modal-subscribe-email" placeholder="name@location.com" />
          </label>

          {this.state.enabled?
          <input type="submit" value="Subscribe" className= "modal-subscribe-submit" />
          :
          <input type="submit" value="Subscribe" className= "modal-subscribe-submitdisable"
          disabled/>}


      </form>
  </div>
  : 
  <h1 className= "modal-subscribe-head1">Thank You</h1>}
</div>
)
}
}
