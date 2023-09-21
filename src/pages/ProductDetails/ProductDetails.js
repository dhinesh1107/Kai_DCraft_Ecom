import React from 'react';
import './ProductDetails.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import six from '../../Images/DC_img/six.jpg';
import Response from '../../Response';

const ProductDetails = () => {
  return (
    <div>
        <Header/>
        <div className="product-detail">
            {Response.product_details.map((e,idx) =>{})}
            <h1 className="product-name">The Catcher</h1>
            <img className="product-image" src={six}/>
            <div className="product-price">
                Price: Rs.400
                <div className='price-end'>
                    <button className="add-to-cart">Add to Cart</button>
                    <button className="buy-now">Buy Now</button>
                </div>
            </div>
            <div className="product-description">
                <h2>Description</h2>
                <p>A decorative object consisting of a ring with a net of string across it and feathers, etc, and thought to bring its owner good dreams.</p>
            </div>
            <div className="product-features">
                <h2>Features</h2>
                <ul>
                    <li>Its shape has meaning.</li>
                    <li>They are meant to catch only the bad dreams.</li>
                    <li>Sunlight cleanses them.</li>
                </ul>
            </div>
            <div className="product-specifications">
                <h2>Specifications</h2>
                <ul>
                    <li>Size: Available in various sizes.</li>
                    <li>Color: Available in different colors.</li>
                </ul>
            </div>
            <div className="reviews">
                <h2>Reviews</h2>
                <div className="review">
                    <div className="review-rating">5 Stars</div>
                    <div className="review-text">"Amazing product, highly recommended!"</div>
                </div>
                <div className="review">
                    <div className="review-rating">4 Stars</div>
                    <div className="review-text">"Amazing product, highly recommended!"</div>
                </div>
                <div className="review">
                    <div className="review-rating">3 Stars</div>
                    <div className="review-text">"Amazing product, highly recommended!"</div>
                </div>
            </div>
            <div className="write-review">
                <h2>Write a Review</h2>
                <div className="review-options">
                    <button className="star-button">5 Stars</button>
                    <button className="star-button">4 Stars</button>
                    <button className="star-button">3 Stars</button>
                    <button className="star-button">2 Stars</button>
                    <button className="star-button">1 Stars</button>
                </div>
                <textarea className="review-input" placeholder="Write your review..."></textarea>
                <button className="submit-review-button">Submit Review</button>
            </div>
        </div>
        <Footer/>      
    </div>
  )
}

export default ProductDetails
