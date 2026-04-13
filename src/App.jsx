import React from 'react';
import { Icon } from 'some-icon-library';

const App = () => {
    return (
        <div>
            <h1>Welcome to Civs</h1>
            <Icon name="some-icon" s={1} />
            <Icon name="another-icon" s={1.5} />
            <Icon name="third-icon" s={2} />
            {/* Add any other components or elements here */}
        </div>
    );
};

export default App;