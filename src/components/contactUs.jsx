import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default class ContactUs extends Component{

constructor(){
    super();
    this.state={ 
            display1:true,
            enable: false,
            email:'',
            height:'',
            name:'',
            message:'',
            subject:'',
        }
}
handleChange = event =>{
    this.setState({ [event.target.name]:event.target.value });
}
componentDidUpdate(prevProps, prevState) {
    if ( 
      ( prevState.email !== this.state.email )||
      ( prevState.name !== this.state.name )||
      ( prevState.subject !== this.state.subject) ||
       prevState.message !== this.state.message
      ) {
      if (this.state.email ||
        this.state.name ||
        this.state.subject ||
        this.state.message
        ) {
        this.setState({ enabled: true });
      } else {
        this.setState({ enabled: false });
      }
    }
}

handleKeyDown(e) {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`; 
  }
handleSubmit = event =>{
    event.preventDefault();
    // console.log("User Email :"  + this.state.email)
    const url = `${process.env.COCKPIT_API_URL}/api/forms/submit/pesan?token=${process.env.COCKPIT_TOKEN}`
    fetch(url, { 
        method: 'post', 
        body: JSON.stringify(
            {
                "form": {
                    "email": this.state.email,
                    "name" : this.state.name,
                    "subject": this.state.subject,
                    "message": this.state.message 
            }
            }), 
        headers:{ 'Content-Type': 'application/json'} })
        .then(res => res.json())
        // .catch(error => console.error('Error:', error))
        // .then(res => {console.log('Success:', res)})
        this.setState({ display1:false })}
render(){
    const {  location } = this.props

    let pathnames = [
        '/hubungi-kami',
        '/hubungi-kami/',

    ]

    let Kembali_lagi;

    if (pathnames.includes(location.pathname)) {
        Kembali_lagi = (
            <>
                <div className="contactUs-div1 contactUs-div1-dup ">
                    <Kembali />
                </div>
            </>
        )
    } else {
        Kembali_lagi  =  (null)
        
    }
return(
    <div className="contactUs-div contactUs-div-layanan"> 
    <FontAwesomeIcon icon="chevron-circle-left" />
    {this.state.display1?
        <div className="contactUs-div1">
            <form onSubmit={this.handleSubmit} className="contactUs-form">
                <label className="contactUs-label1">
                    <span>
                        <p className="contactUs-p1"> Nama : </p>
                    </span>
                        <input type="username" name="name" onChange={this.handleChange} required className= "contactUs-nama"/>
                </label>
                <label className="contactUs-label2">
                    <span>
                        <p className= "contactUs-p1"> Email : </p>
                    </span>
                        <input type="email" name="email" onChange={this.handleChange} required className="contactUs-email"
                placeholder="name@location.com"/>
                </label>
                <label className= "contactUs-label3">
                        <span>
                            <p className="contactUs-p1"> Judul : </p>
                        </span>
                            <input type="text" name="subject" onChange={this.handleChange}  className= "contactUs-nama"/>
                </label>
                <label className= "contactUs-label4">
                        <span>
                            <p className="contactUs-p1"> Pesan : </p>
                        </span>
                            <textarea name="message" onChange={this.handleChange} className= "contactUs-nama" onKeyDown={this.handleKeyDown} required />;
                </label>
                            {this.state.enabled?<input type="submit" value="Kirim" className= "contactUs-submit"  />:<input type="submit" value="Kirim" className= "contactUs-submitdisable "disabled/>}

            </form>
        </div>
    : 
    <h1 className="contactUs-head1">Thank You</h1>
    }
       {Kembali_lagi} 
</div>
)}}
