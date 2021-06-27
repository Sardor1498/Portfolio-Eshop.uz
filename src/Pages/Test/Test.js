import React from 'react';
import Clock from './Clock';
import Example1 from './Example1';

class Test extends React.Component {
    render() {
        return (
            <>
                <div className="flex m-5">
                    <Clock />
                    <Example1 />
                </div>
            </>
        );
    }
};

export default Test;