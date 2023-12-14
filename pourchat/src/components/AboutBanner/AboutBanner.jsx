import './_AboutBanner.scss'
import bannerImage from '../../assets/about-background.png'

export default function AboutBanner() {
	return (
		<div className="about__banner">
			<img src= {bannerImage} className='about__banner__image' alt="about banner"></img>
		</div>
	);
}