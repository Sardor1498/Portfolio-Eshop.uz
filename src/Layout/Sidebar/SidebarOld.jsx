import React from 'react'
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import SettingsApplicationsIcon from '@material-ui/icons/SettingsApplications';
import GroupIcon from '@material-ui/icons/Group';
import HelpIcon from '@material-ui/icons/Help';

class Sidebar extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li className="my-4 md:w-48 border-2 rounded-full m-4 bg-indigo-300 cursor-pointer"><HomeIcon /> Home</li>
                    <li className="my-4 md:w-48 border-2 rounded-full m-4 bg-indigo-300 cursor-pointer"><InfoIcon /> About</li>
                    <li className="my-4 md:w-48 border-2 rounded-full m-4 bg-indigo-300 cursor-pointer"><SettingsApplicationsIcon /> Services</li>
                    <li className="my-4 md:w-48 border-2 rounded-full m-4 bg-indigo-300 cursor-pointer"><HelpIcon /> FAQ</li>
                    <li className="my-4 md:w-48 border-2 rounded-full m-4 bg-indigo-300 cursor-pointer"><GroupIcon /> Courses</li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;