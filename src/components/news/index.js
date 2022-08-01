import React from 'react';
import Card from './Card';
import News1 from '../../assets/Images/Latest News/news1.jpg'
import News2 from '../../assets/Images/Latest News/news2.jpg'
import News3 from '../../assets/Images/Latest News/news3.jpg'
import Covid from '../../assets/Images/image02.jpg'
import './news.style.scss'
const News = () => {
    return (
        <section className="news">
            <div className="borderTop"></div>
            <div className="cards container">
                <div className="cards-header">
                    <div className="title">
                        <h1>latest <br /> <span><h1>news</h1></span></h1>
                        <button>explore more</button>
                    </div>
                </div>
                <div className="cards-body">
                    <Card
                        className={'cardd'}
                        image={News1}
                        head={' major trendS'}
                        p="innovation"
                    />
                    <Card
                        className={'cardd'}
                        image={News2}
                        head={'news of the week'}
                        p="news"
                    />
                    <Card
                        className={'cardd'}
                        image={News3}
                        head={'covid updates'}
                        p="news"
                    />
                    
                </div>
            </div>
            <div className="aside">
                <aside><img src={Covid} alt="news" /></aside>
                <h1>rapid research <br /> respovse team <br /> <span>covid-19</span></h1>
            </div>
        </section>);
}

export default News;