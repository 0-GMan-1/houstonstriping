import React, { useState, useEffect } from 'react';
import google from '../assets/google.png'
import ScrollH1 from './ScrollH1'
import { useSelector } from 'react-redux';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const reviewScroll = useSelector(state => state.scroll.reviews)

    // Example review data; replace with your data fetching logic
    const reviewData = [
        {
            author_name: "John Doe",
            profile_photo_url: "https://example.com/profile.jpg",
            rating: 5,
            text: "Great service, highly recommend!",
        },
        {
            author_name: "Jane Smith",
            profile_photo_url: "https://example.com/profile2.jpg",
            rating: 4,
            text: "Very good, but there is room for improvement.",
        },
        // Add more reviews here
    ];

    useEffect(() => {
        // Simulate data fetching
        setReviews(reviewData);
    }, []);

    const nextReview = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    };

    const prevReview = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="reviews-container">
            <ScrollH1 text="Reviews" dispatchValue={'REVIEWS'} classsData={reviewScroll} />

            <div className='reviewsheader'>
                <h2>10 out of 5 Stars!</h2>
                <p className='review-rating'>{'★★★★★'}</p>
                <p>Based on {} reviews</p>
                <img src={google}/>
            </div>

            {reviews.length > 0 && (
                <div className="review-slideshow">
                    <button className="nav-button prev" onClick={prevReview}>
                        &#10094; {/* Left arrow */}
                    </button>
                    <div className="review-card">
                        <img
                            src={reviews[currentIndex].profile_photo_url}
                            alt={reviews[currentIndex].author_name}
                            className="review-profile-img"
                        />
                        <div className="review-content">
                            <h3>{reviews[currentIndex].author_name}</h3>
                            <div className="review-rating">
                                {'★'.repeat(reviews[currentIndex].rating)}{' '}
                                {'☆'.repeat(5 - reviews[currentIndex].rating)}
                            </div>
                            <p>{reviews[currentIndex].text}</p>
                        </div>
                    </div>
                    <button className="nav-button next" onClick={nextReview}>
                        &#10095; {/* Right arrow */}
                    </button>
                </div>
            )}
        </div>
    );
};

export default Reviews;
