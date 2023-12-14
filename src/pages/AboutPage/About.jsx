import AboutBanner from "../../components/AboutBanner/AboutBanner";
import Collapse from "../../components/Collapse/Collapse";
import "./_About.scss"
import { fiabiliteText } from "./Texts";
import { respectText } from "./Texts";
import { serviceText } from "./Texts";
import { securityText } from "./Texts";
export default function About () {
    return (
        <>
        <div className="about-page">
        <AboutBanner />
        <div className="about-page__collapse">
            <Collapse title='Fiabilité' content={fiabiliteText}/>
            <Collapse title='Respect' content={respectText}/>
            <Collapse title='Service' content={serviceText}/>
            <Collapse title='Sécurité' content={securityText}/>
        </div>
        </div>
        </>
    )
}