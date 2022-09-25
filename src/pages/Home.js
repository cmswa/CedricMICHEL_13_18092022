import React from 'react'
import Header from '../Components/Layout/Header'
import Footer from '../Components/Layout/Footer';
import Banner from '../Components/Banner';
import FeatureContact from '../Components/FeatureContact';
import FeatureMoney from '../Components/FeatureMoney';
import FeatureSecurity from '../Components/FeatureSecurity';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <section className="features">
                    <FeatureContact />
                    <FeatureMoney />
                    <FeatureSecurity />
                </section>
            </main>
            <Footer />
        </>
    )
}
