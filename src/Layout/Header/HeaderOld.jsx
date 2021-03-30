import styles from './Header.module.css'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import GroupIcon from '@material-ui/icons/Group';
import HelpIcon from '@material-ui/icons/Help';


export default function (props) {
    return (
        <div className={styles.myclass + "my-5 border-2 border-current p-5 bg-yellow-400 cursor-pointer"}>
            <span className={styles.myspan}>Home <HomeIcon /></span>
            <span className={styles.myspan}>About <InfoIcon /></span>
            <span className={styles.myspan}>Services <SettingsApplicationsIcon /></span>
            <span className={styles.myspan}>Courses <GroupIcon /></span>
            <span className={styles.myspan}>FAQ <HelpIcon /></span>
        </div>
    )
}
