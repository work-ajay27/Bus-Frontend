import React from 'react'
import SearchBar from "../components/SearchBar";
import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
function Home() {
    return (
        <div>
            <Navbar />
            <SearchBar />
            <FAQ />
            <Footer />

        </div>
    )
}

export default Home