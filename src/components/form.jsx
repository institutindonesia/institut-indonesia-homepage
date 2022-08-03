import React, { PureComponent } from 'react';

import addToMailchimp from 'gatsby-plugin-mailchimp'
export default class Form extends PureComponent{
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
.then(res => res.json())

addToMailchimp(this.state.email)
            .then(({ msg, result }) => {
                // console.log('msg', `${result}: ${msg}`)

                if (result !== 'success') {
                    throw msg
                }
                // alert(msg)
            })
            .catch(err => {
                // console.log('err', err)
                // alert(err)
            })

// .catch(error => console.error('Error:', error))
// .then(res => {console.log('Success:', res)})
this.setState({
            display1:false
        })
      }
render(){
return(
  <div className="subscribe-div"> 
    {this.state.display1?
        <div className="subscribe-div1">
        <h3 className="subscribe-head">Daftarkan email Anda !</h3>
        <p className="subscribe-p">Agar tidak kelewatan postingan terbaru</p>
        <form onSubmit={this.handleSubmit} className="subscribe-form">
          <label className="subscribe-label">
            <span>
                <p className="subscribe-p1"> Email : </p>
            </span>
                <input type="email" name="email" onChange={this.handleChange} required className="subscribe-email" placeholder="name@location.com" />
          </label>
                {this.state.enabled?<input type="submit" value="Subscribe" className="subscribe-submit"/>:<input type="submit" value="Subscribe" className="subscribe-submitdisable" disabled/>}
        </form>
      </div>
    : 
    <h1 className="subscribe-head1">Thank You</h1>}
  </div>
)}}
