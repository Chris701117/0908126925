// src/ContactForm.jsx

import React from 'react';
import './ContactForm.css'; // 我們稍後會建立這個 CSS 檔案

function ContactForm() {
  
  const handleSubmit = (event) => {
    // 這裡可以保留，但 Google Ads 轉換是透過 gtag
    // 如果您有後端，可以在這裡處理表單提交邏.輯
    
    // 觸發 Google Ads 轉換事件
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17286917434/q5dYCKiBvOoaELrahbNA'
      });
    }
  };

  return (
    <div className="optimized-contact-form-container">
      <form id="contactForm" onSubmit={handleSubmit}>
        <h2>聯絡我們</h2>
        <p className="subtitle">有任何拆除需求歡迎洽詢！</p>
        
        <div className="form-group">
          <label htmlFor="name">姓名</label>
          <input type="text" id="name" name="name" placeholder="請輸入您的姓名" required />
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">電話</label>
          <input type="tel" id="phone" name="phone" placeholder="請輸入您的聯絡電話" required />
        </div>
        
        <button type="submit" className="submit-button">送出諮詢</button>
      </form>
    </div>
  );
}

export default ContactForm;
