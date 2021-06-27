import React from 'react';
import Clock from './Clock';
import Example1 from './Example1';
import TestRef from './TestRef';
import TestRefFile from './TestRefFile';

class Test extends React.Component {
    render() {
        return (
            <>
                <div className="flex m-5">
                    <TestRefFile />
                    {/* <Clock />
                    <Example1 />
                    <TestRef /> */}
                </div>
            </>
        );
    }
};

export default Test;