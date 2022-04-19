import React from 'react';
import Navbar from './Navbar';
import Location from './Location';
import data from '../resources/data'

function App() {
    const locations = data.map((location, index) => {
        return <Location key={index} items={location} />
    });
    return (
        <div>
            <Navbar />
            <section className='destinations'>
                {locations}
            </section>
        </div>
    );
}

export default App;