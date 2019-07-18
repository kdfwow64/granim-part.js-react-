import React, { Component } from 'react'
import { Slider } from 'material-ui-slider'
import Granim from 'react-granim'
import Particles from 'react-particles-js'
import './App.css';
import { Container, Row, Col, Button, Input } from 'reactstrap';

// import { Button } from 'reactstrap';
// import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShare } from '@fortawesome/free-solid-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
// import { cpus } from 'os';

const granim_gradient_options = {
	"default-state": {
		"gradients": [
			['#0732A7', '#6845A0'],
			['#6845A0', '#F1815F'],
			['#F1815F', '#0732A7']
		],
		"transitionSpeed": 7000
	}
}
const particles_options = {
	"particles": {
		"number": {
			"value": 10,
			"density": {
				"enable": false
			}
		},
		"color":{
			"value":"#0c25d9"
		},
		"shape":{
			"type":"circle",
			"stroke":{
				"width":0,
				"color":"#000"
			},
			"polygon":{
				"nb_sides":6
			},
			"image":{
				"src":"img/github.svg",
				"width":50,
				"height":20}
		},
		"size": {
			"value": 100,
			"shapes_count": 5,
			"circle_shapes": [
				{
					"radius": 20,
					"direction": 1, //  x0:0% y0:100% x1:100% y1:0%
					"gradient": {
						'start': 'rgba(0,154,218,0.2)',
						'stop': 'rgba(10,79,213,0.2)'
					},
					"blur": "blur(0px)",
					"shadowBlur": 1,
					"shadowColor": "white"
				},
				{
					"radius": 40,
					"direction": 2, //  x0:0% y0:0% x1:100% y1:100%
					"gradient": {
						'start': 'rgba(255,45,80,0.2)',
						'stop': 'rgba(187,48,97,0.2)'
					},
					"blur": "blur(0px)",
					"shadowBlur": 1,
					"shadowColor": "white"
				},
				{
					"radius": 60,
					"direction": 1, //  x0:0% y0:0% x1:100% y1:100%
					"gradient": {
						'start': 'rgba(255,45,80,0.2)',
						'stop': 'rgba(187,48,255,0.2)'
					},
					"blur": "blur(0px)",
					"shadowBlur": 1,
					"shadowColor": "white"
				},
				{
					"radius": 80,
					"direction": 2, //  x0:0% y0:0% x1:100% y1:100%
					"gradient": {
						'start': 'rgba(255,45,80,0.2)',
						'stop': 'rgba(255,48,97,0.2)'
					},
					"blur": "blur(0px)",
					"shadowBlur": 5,
					"shadowColor": "white"
				},
				{
					"radius": 100,
					"direction": 1, //  x0:0% y0:0% x1:100% y1:100%
					"gradient": {
						'start': 'rgba(255,45,80,0.2)',
						'stop': 'rgba(187,48,255,0.2)'
					},
					"blur": "blur(0px)",
					"shadowBlur": 10,
					"shadowColor": "black"
				}
			],
			"random": true,
			"anim": {
				"speed": 1,
				"size_min": 100
			}
		},
		"line_linked": {
			"enable": false
		},
		"move": {
			"random": true,
			"speed": 0.2,
			"direction": "top",
			"out_mode": "out"
		}
	},
	"interactivity": {
		"events": {
			"onhover": {
				"enable": false,
				"mode": "bubble"
			},
			"onclick": {
				"enable": true,
				"mode": "push"
			}
		},
		"modes": {
			"bubble": {
				"distance": 300,
				"duration": 2,
				"size": 0,
				"opacity": 0
			},
			"repulse": {
				"distance": 400,
				"duration": 4
			},
			"push": {
				"particles_nb": 1
			},
		}
	}
}

const granim_direction_options = {
	"x0": '100%',
	'y0': '40%',
	'x1': '0%',
	'y1': '60%'
}

class Logo extends Component {
	render() {
		return (
			<div className="Logo">
				<span className="LogoName">moresocial</span>
			</div>
		);
	}
}

class HeaderButtons extends Component {
	render() {
		return (
			<div className="NavButtonDiv">
				<button className="ShareButton"><FontAwesomeIcon className="ShareIcon" icon={faShare} />SHARE</button>
			</div>
		);
	}
}

const wrapperStyle = { width: 400, margin: 50 };

class App extends Component {
	state = {
		value1: 50,
		value2: 50,
		x: 0,
		y: 0,
	};

	handleChange = (value, event) => {
		this.setState({ value1:value });
		console.log(event);
		this.setState({ x:event.layerX });
		this.setState({ y:event.layerY });
	};
	handleChange1 = (value, event) => {
		this.setState({ value2:value });
	};

  render() {
    return (
      	<div className="App" style={{ height: '100vh' }}>
		  	<div style={{ position: 'fixed'}} className="background">
			  	<Granim direction="diagonal" states={granim_gradient_options} customDirection={granim_direction_options} />
        		<Particles className="particles" style={{position:'fixed', zIndex: 1}} params={particles_options} />
			</div>
			<header className="Header">
				<Logo />
				<HeaderButtons />
			</header>
			<div className="MainContent">
				<Container>
					<Row className="RowCenter">
						<span className="MainContentTitle">Invite-Only Access for NYC</span>
					</Row>
					<Row className="ContentElement RowCenter">
						<Col className="ContentElementBigCol ColBorder">
							<Row>
								<span className="ElementLabel">EVENT PRICE :</span>
								<span style={{left:this.state.x, position: "absolute"}}> {this.state.value1}</span>
								<Slider 
									aria-labelledby="label" 
									defaultValue={20} min={20} max={100} color="#8959F7" step={1} value={this.state.value1} 
									onChange={this.handleChange}
									/>
								{/* <span className="SliderLabelFirst" >$20</span> */}
								{/* <span className="SliderLabelLast" >$100</span> */}
							</Row>
							<Row>
								<span className="ElementLabel">ATTENDEES :</span>
								<span> {this.state.value2}</span>
								<Slider aria-labelledby="label" defaultValue={20} min="20" max="500" value={this.state.value2} onChange={this.handleChange1}></Slider>
								{/* <span className="SliderLabelFirst" >20</span> */}
								{/* <span className="SliderLabelLast" >500</span> */}
							</Row>
							<Row>
								<Col className="padding0"><Button className="EventPro">Eventbrite Professional</Button></Col>
								<Col className="padding0"><Button className="EventEss">Eventbrite Essentials</Button></Col>
							</Row>
							<Row>
								<span className="SavingsPerEvent">Savings Per Event: $50</span>
							</Row>
						</Col>
						<Col className="ContentElementBigCol">
							<Row>
								<span className="ElementLabel">FIRST NAME</span>
								<Input className="NewInputBox"></Input>
							</Row>
							<Row>
								<span className="ElementLabel">VENUE / ORGANIZATION</span>
								<Input className="NewInputBox"></Input>
							</Row>
							<Row>
								<span className="ElementLabel">EMAIL</span>
								<Input className="NewInputBox"></Input>
							</Row>
							<Row>
								<span className="ElementLabel">PHONE</span>
								<Input className="NewInputBox"></Input>
							</Row>
						</Col>
					</Row>
					<Row className="RowCenter">
						<Button className="RequestInvite">REQUEST AN INVITE</Button>
					</Row>
				</Container>
			</div>

			<div className="IntroduceTextDiv">
				<Row className="RowCenter">
					<Col>
						<span className="IntroduceTextTitle">What is Moresocial?</span>
						<br/>
						<br/>
						<span className="IntroduceTextContent">Moresocial is a social network that rewards millennials for the things they enjoy doing most.</span>
						<br/>
						<br/>
						<span className="IntroduceTextContent">The platform we are developing will make it easier and faster to engage with your millennial guests.</span>
						<br/>
						<br/>
						<span className="IntroduceTextContent">It will also be simple and cost-effective to reach a millennial audience that enjoys exceptional entertainment experiences.</span>
					</Col>
					<Col>
						<span className="IntroduceTextTitle">What is Moresocial LIVE?</span>
						<br/>
						<br/>
						<span className="IntroduceTextContent">Our invite-only ticket platform offers a simple, concierge-style event management experience to a select group of NYC partners.</span>
						<br/>
						<br/>
						<span className="IntroduceTextContent"><Button className="LIVE">LIVE</Button> partners have first access to the innovative entertainment marketing solutions we build</span>
					</Col>
				</Row>
			</div>

			<div className="OurTeamDiv">
				<Row className="RowCenter">
					<span className="OurTeamTitle">Our Team</span>
				</Row>
				<Row>
					<Col className="text-center">
						<div className="TeamMember"></div>
						<span className="TeamMemberName">JOSH HOWARD</span>
						<br/>
						<br/>
						<span className="TeamMemberDescription">Joshua is a first-time entrepreneur with a thirst for knowledge. His frustration with a lackluster event discovery experience in his home town of NYC led to him creating Moresocial.</span>
					</Col>
					<Col className="text-center">
						<div className="TeamMember"></div>
						<span className="TeamMemberName">ISREAL HAGAN</span>
						<br/>
						<br/>
						<span className="TeamMemberDescription">Isreal brings over 10 years of brand management experience in sports, entertainment,  and hospitality. He's created integrated marketing strategies for the likes of CBS Sports, MTV, VH1, and a slew of athletes. Isreal has also led successful marketing initiatives for mobile apps including Fever, Bae App, and Soul Swipe.</span>
					</Col>
					<Col className="text-center">
						<div className="TeamMember"></div>
						<span className="TeamMemberName">FEDERICO MORETTI</span>
						<br/>
						<br/>
						<span className="TeamMemberDescription">Federico brings over 10 years of tech leadership experience. He designed a portable, mobile phone operated EKG that won several prizes before being acquired. Federico also developed ZippySpots's MVP until the company's acquisition. He has successfully led Goldbelly through a $20 million Series B as lead platform engineer.</span>
					</Col>
					<Col className="text-center">
						<div className="TeamMember"></div>
						<span className="TeamMemberName">WEBSTER ROSS</span>
						<br/>
						<br/>
						<span className="TeamMemberDescription">Webster is a veteran of New York City's startup community with over 15 years of hands-on tech experience. Prior to consulting with New York City's Tech Talent Pipeline (TTP), he co-founded two healthcare startups (Zipdrug & Mixlab) where he led as CTO. He holds a Master of Science in Computer Engineering from Columbia University.</span>
					</Col>
				</Row>
			</div>

			<div className="MainFooter">
				<Row className="RowCenter">
					<span className="MainFooterTitle">moresocial</span>
				</Row>
				<Row className="RowCenter">
					<span className="MainFooterCategory">Home  /   Partners  /  Contact</span>
				</Row>
				<Row className="RowCenter">
					<span><FontAwesomeIcon icon={faFacebook} className="SocialIcon"></FontAwesomeIcon></span>
					<span><FontAwesomeIcon icon={faTwitter} className="SocialIcon"></FontAwesomeIcon></span>
					<span><FontAwesomeIcon icon={faCamera} className="SocialIcon"></FontAwesomeIcon></span>
				</Row>
				<Row className="RowCenter">
					<span className="MainFooterCopyright">© Copyright 2019, All rights reserved. </span> <span className="MainFooterTerms"> Terms | Privacy Policy</span>
				</Row>
			</div>
      	</div>
    );
  }
}

export default App;
