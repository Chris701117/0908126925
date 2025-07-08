// src/components/ContactForm.tsx

import React from 'react';
import './ContactForm.css';

// 宣告 gtag 函式在 window 物件上，避免 TypeScript 報錯
declare global {
  interface Window {
    gtag: (command: string, action: string, params?: object) => void;
  }
}

const ContactForm: React.FC = () => {
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    // 這裡可以處理表單提交的後端邏輯，但為了追蹤，我們主要用 gtag
    
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
