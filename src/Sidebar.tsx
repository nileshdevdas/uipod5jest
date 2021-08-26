import React from "react";
import './Siderbar.css';

export class Sidebar extends React.Component {

    render() {
        return <div>
            <div className='sidebar'><p className='show'>Welcome</p>
                <div>
                    <div className='show'>
                        Hello1
                    </div>
                    <div className='show'>
                        Hell02
                    </div>
                </div>
            </div>
        </div>;
    }
}
