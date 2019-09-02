import React, { Component } from 'react'
import { MainDiv, MainH1 } from '../styles/Main'

import { sam, mern, deploy, git, http, jwt } from '../img/blog'
import Breadcrumbs from './Breadcrumbs'
import Miniature from './Miniature'

class Blog extends Component {
	state = {
		showCompanies: false,
	}

	handleShowCompanies = () => this.setState({ showCompanies: !this.state.showCompanies })

	render() {
		return (
			<MainDiv>
				<Breadcrumbs name={'Blog'} />
				<MainH1>Blog</MainH1>
				<Miniature img={sam} link={'/'} title={'First of many'} subtitle={'26.05.19 - 2 min read'} />
				<Miniature
					img={mern}
					link={'/'}
					title={'How to create your first MERN (MongoDB, Express JS, React JS and Node JS) Stack'}
					subtitle={'02.06.19 - 11 min read'}
				/>
				<Miniature
					img={git}
					link={'/'}
					title={'What do I need to know about Git?'}
					subtitle={'09.06.19 - 10 min read'}
				/>
				<Miniature
					img={jwt}
					link={'/'}
					title={'Authentication: how to create a NodeJS application using JWT'}
					subtitle={'21.06.19 - 8 min read'}
				/>
				<Miniature
					img={http}
					link={'/'}
					title={'HTTP: An overview of web development'}
					subtitle={'01.08.19 - 8 min read'}
				/>
				<Miniature
					img={deploy}
					link={'/'}
					title={'How do I deploy my code to Heroku using GitLab CI/CD?'}
					subtitle={'18.08.19 - 8 min read'}
				/>
			</MainDiv>
		)
	}
}

export default Blog