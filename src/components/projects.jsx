import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-1.PNG)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">NextBot</a></h3>
											<span><a href='https://nextbot.tech'>Nextbot.tech</a></span>
											<p className="icon">
												<span><a href="#projects"><i className="icon-share3" /></a></span>
												<span><a href="#projects"><i className="icon-eye" /> 100</a></span>
												<span><a href="#projects"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-2.PNG)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Amazon Clone</a></h3>
											<span><a href='https://cl-28a79.web.app/'> Visit Amazon Clone </a></span>
											<p className="icon">
											<span><a href="#projects"><i className="icon-share3" /></a></span>
												<span><a href="#projects"><i className="icon-eye" /> 100</a></span>
												<span><a href="#projects"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/img-3.PNG)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Visit the Portfolio</a></h3>
											<span><a href='https://relaxed-hoover-c21ddb.netlify.app/'>portfolio</a></span>
											<p className="icon">
												<span><a href="#project"><i className="icon-share3" /></a></span>
												<span><a href="#project"><i className="icon-eye" /> 100</a></span>
												<span><a href="#project"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/img-4.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Chatbots</a></h3>
											<span>AI Chatbots Created for multiple social media platforms using AI for self responding with the ability to integrate to different API's using webhooks for services like firestore, google sheets/docs/calendar, emails, mongodb for different usecases like setting appointments or making reservations or orders from restaurants.</span>
											<p className="icon">
											<span><a href="#project"><i className="icon-share3" /></a></span>
												<span><a href="#project"><i className="icon-eye" /> 100</a></span>
												<span><a href="#project"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">RPBI</a></h3>
											<span>Created A RPBI Powered car with self driving mode in a small scale .</span>
											<p className="icon">
											<span><a href="#project"><i className="icon-share3" /></a></span>
												<span><a href="#project"><i className="icon-eye" /> 100</a></span>
												<span><a href="#project"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							
						</div>
						<div className="row">
							<div className="col-md-12 animate-box">
							
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
