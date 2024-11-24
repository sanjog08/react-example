import React from 'react';
import './CSS/Feedback.css';

export default function Feedback() {
  return (
    <>
    <div className="main-feedback">
      <div className="header">
        <h2>Site Reviews</h2>
      </div>
      <hr />
      <div className="user-feed">
        <div className="user-feed-left">
          <img src="user.jpg" alt="" />
          <div className="user-name">
            <p>Naman Sharma</p>
            <p>Verfied Buyer</p>
          </div>
        </div>
        <div className="user-feed-middle">
          <p>Product Name</p>
          <p>100% Genuine products and a great service in delivering to home. Great thanks for your your wonderful service.</p>
        </div>
        <div className="user-feed-right">
          <p>06/11/2024</p>
        </div>
      </div>
      <hr />
      <div className="user-feed">
        <div className="user-feed-left">
          <img src="user.jpg" alt="" />
          <div className="user-name">
            <p>Mitali Ranjan</p>
            <p>Verfied Buyer</p>
          </div>
        </div>
        <div className="user-feed-middle">
          <p>Product Name</p>
          <p>I have purchased 7 Mukhi Rudraksha, there is 2 big whole in Rudraksha bead, pl. replace it , This time bad experience.</p>
        </div>
        <div className="user-feed-right">
          <p>16/11/2024</p>
        </div>
      </div>
      <hr />
      <div className="user-feed">
        <div className="user-feed-left">
          <img src="user.jpg" alt="" />
          <div className="user-name">
            <p>Vishal Yadavji</p>
            <p>Verfied Buyer</p>
          </div>
        </div>
        <div className="user-feed-middle">
          <p>Product Name</p>
          <p>I have purchased a 5 mukhi, 6 mukhi and 4 mukhi rudraksha in a year from here and a Lehsuniya catseye.. the beads are original and are providing me benefits like good mental health. Highly recommended.</p>
        </div>
        <div className="user-feed-right">
          <p>22/11/2024</p>
        </div>
      </div>
      <hr />
      <div className="user-feed">
        <div className="user-feed-left">
          <img src="user.jpg" alt="" />
          <div className="user-name">
            <p>Shivani Sirvi</p>
            <p>Verfied Buyer</p>
          </div>
        </div>
        <div className="user-feed-middle">
          <p>Product Name</p>
          <p>I have purchsed durga shakti kamachya the combination of two 7mukhi and one 9 mukhi rudraksha bandha It really the blessings of Goddess Durga and Mata Laxmi and my protecter from negative energy.</p>
        </div>
        <div className="user-feed-right">
          <p>24/11/2024</p>
        </div>
      </div>
      <hr />
    </div>
    </>
  );
}
