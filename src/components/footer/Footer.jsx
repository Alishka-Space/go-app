import React from 'react'
import './footer.css'
import {languages} from '../../data'
import {currencies} from '../../data'
const Footer = () => {
  return ( <footer className="footer">
    <div className="footer-item select-box-wrapper">
        <div className="select-box">
            <label className="select-box-label">Languages</label>
            <select name="" id="" className="select-box-input">
                {languages.map(item => <option key={item.id}>{item.value}</option>)}
            </select>
        </div>
        <div className="select-box">
            <label className="select-box-label">currencies</label>
            <select name="" id="" className="select-box-input">
                {currencies.map(item => <option key={item.id}>{item.value}</option>)}
            </select>
        </div>
    </div>
    <div className="footer-item">
        <h3 className="footer-item-title">Support</h3>
        <ul className="footer-item-list">
            <li className="footer-item-link">Contact Us</li>
            <li className="footer-item-link">Legal Notice</li>
            <li className="footer-item-link">Privacy Policy</li>
            <li className="footer-item-link">Contact</li>
        </ul>
    </div>
    <div className="footer-item">
        <h3 className="footer-item-title">Company</h3>
        <ul className="footer-item-list">
            <li className="footer-item-link">About Us</li>
            <li className="footer-item-link">Careers</li>
            <li className="footer-item-link">Blog</li>
            <li className="footer-item-link">Travel Guide</li>
        </ul>
    </div>
    <div className="footer-item">
        <h3 className="footer-item-title">Work With Us</h3>
        <ul className="footer-item-list">
            <li className="footer-item-link">Become a supplier</li>
            <li className="footer-item-link">Become a Partner</li>
        </ul>
        <div className="footer-icons">
            <div className="icon">
                <i style={{color:"#d35400"}} className="bi bi-instagram"></i>
            </div>
            <div className="icon">
                <i style={{color:"#2980b9"}} className="bi bi-facebook"></i>
            </div>
            <div className="icon">
                <i style={{color:"#3498db"}} className="bi bi-twitter"></i>
            </div>
            <div className="icon">
                <i style={{color:"#95a5a6"}} className="bi bi-github"></i>
            </div>
        </div>
        <div className="footer-copy-right">
            Copyright &copy; 2024 GO DUBAI
        </div>
    </div>

  </footer>
   
  )
}

export default Footer
