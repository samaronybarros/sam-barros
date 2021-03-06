import React, { Component } from 'react'

import {
	MainCompany,
	MainCurriculumInformation,
	MainRole,
	MainCompanyName,
	MainCompanyDate,
	CompanyDivPicture,
	CompanyImg,
	CompanyDivRole,
	MainCurriculumDescription,
	MainDescription,
	MainTextDescription,
} from '../styles/Main'

class Company extends Component {
	render() {
		const { image, role, companyName, period, city, activities } = this.props
		return (
			<MainCompany>
				<MainCurriculumInformation>
					<CompanyDivPicture>
						<CompanyImg src={image} />
					</CompanyDivPicture>
					<CompanyDivRole>
						<MainRole>{role}</MainRole>
						<MainCompanyName>{companyName}</MainCompanyName>
						<MainCompanyDate>{period}</MainCompanyDate>
						<MainCompanyDate>{city}</MainCompanyDate>
					</CompanyDivRole>
				</MainCurriculumInformation>
				<MainCurriculumDescription>
					<MainDescription>Description</MainDescription>
					{activities &&
						activities.map((activity, index) => <MainTextDescription key={index}>{activity}</MainTextDescription>)}
				</MainCurriculumDescription>
			</MainCompany>
		)
	}
}

export default Company
