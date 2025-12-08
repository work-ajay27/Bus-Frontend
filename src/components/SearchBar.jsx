import React, { useState, useRef } from 'react';
import { Bus, MapPin, Calendar } from 'lucide-react';
// import heroImage from '../assets/HeroSectionImage.jpg';
import SearchBarBackgroundImage from '../assets/SearchBarBackgroundImage.jpg';
import './SearchBar.css';

const BusSearch = () => {
    const [date, setDate] = useState("2025-12-08");
    const dateInputRef = useRef(null); // 1. Create a reference

    // 2. This function forces the calendar to open
    const openCalendar = () => {
        if (dateInputRef.current) {
            dateInputRef.current.showPicker();
        }
    };

    return (
        <div className="hero-container">
            <div className="hero-background" style={{ backgroundImage: `url(${SearchBarBackgroundImage})` }}>
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                {/* Heading */}
                <h1 className="hero-title">
                    Book the tickets, <br />
                    before the <span style={{ color: '#00e1ff' }}>Goa plan </span> gets cancelled.
                </h1>

                <div className="search-widget">

                    {/* FROM */}
                    <div className="input-group">
                        <Bus className="input-icon" />
                        <div className="input-wrapper">
                            <label className="input-label">From</label>
                            <input type="text" placeholder="Enter City" className="search-input" />
                        </div>
                    </div>

                    {/* TO */}
                    <div className="input-group">
                        <MapPin className="input-icon" />
                        <div className="input-wrapper">
                            <label className="input-label">To</label>
                            <input type="text" placeholder="Enter Destination" className="search-input" />
                        </div>
                    </div>

                    {/* DATE SECTION */}
                    {/* 3. Add onClick here so clicking ANYWHERE in this box opens the calendar */}
                    <div
                        className="input-group"
                        onClick={openCalendar}
                        style={{ cursor: 'pointer' }}
                    >
                        <Calendar className="input-icon" />

                        <div className="input-wrapper">
                            <label className="input-label">Date of Journey</label>

                            <div className="date-row" style={{ position: 'relative' }}>

                                {/* 4. The Text (Visible) */}
                                <span className="search-input" style={{ display: 'inline-block', marginTop: '4px' }}>
                                    {date}
                                </span>

                                {/* 5. The Input (Hidden but Functional) */}
                                <input
                                    type="date"
                                    ref={dateInputRef}
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    // We hide it completely using inline styles
                                    style={{
                                        position: 'absolute',
                                        opacity: 0,
                                        width: '0px',
                                        height: '0px',
                                        bottom: 0,
                                        left: 0
                                    }}
                                />

                                <div className="date-tags">
                                    <span className="tag today">Today</span>
                                    <span className="tag tom">Tom</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="search-btn">SEARCH BUSES</button>

                </div>
            </div>
        </div>
    );
};

export default BusSearch;