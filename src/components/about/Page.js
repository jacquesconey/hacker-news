// Since the about page needs no data or actions, this doesn't
// contain the usual Redux container boilerplate
// for mapState and mapDispatch.
import React from 'react';

class Page extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p>Welcome to the new Hacker News App. This has been created and designed by Jacques Coney for your benefit. If you are currently using this don't forget to follow me on social media etc</p>
            </div>
        );
    }
}

export default Page;
