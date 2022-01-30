import React from 'react';

function Footer() {
  return (
    <div className='footer_div'>
        <div className='footer'>
            <div className='footer_info'>
                <div className='contact_info footer_height'>
                    <div className='cetvel_logo footer_title'>Cetvel LOGO</div>
                    <div className='address'>
                        <p>Sultan Orhan Mah. İlyasbey Cad. 1117 Sk. No:6 K:2</p>
                        <p>Gebze – KOCAELİ</p>
                    </div>
                    <div className='phone_numbers'>
                        <span className='phone1'><i className='bx bx-phone' ></i> 0 262 644 66 63</span>
                        <span className='phone2'><i className='bx bx-mobile-alt' ></i> 0 850 532 23 61</span>
                    </div>
                    <div className='mail'><i className='bx bxl-gmail' ></i>cetvel@wi.com.tr</div>
                </div>
                <div className='footer_right'>
                    <div className='contract_info footer_height'>
                        <div className='footer_title'> <h4>Cetvel Bulut Ön Muhasebe</h4> </div>
                        <ul>
                            <li><a> Kullanım Kılavuzu</a></li>
                            <li><a> Veri Güvenliği </a></li>
                            <li><a> Kullanıcı Sözleşmesi ve Gizlilik </a></li>
                            <li><a> Kişisel Verilerin Korunması ve İşlenmesine İlişkin Aydınlatma Metni</a></li>
                            <li><a> Çerez Politikası </a></li>
                        </ul>
                    
                    </div>
                    <div className='features footer_height'>
                        <div className='footer_title'> Özellikler </div>
                        <ul>
                            <li><a>e-Fatura</a></li>
                            <li><a>e-Arşiv</a></li>
                            <li><a>e-İrsaliye</a></li>
                            <li><a>Döviz & Cari Takibi</a></li>
                            <li><a>Online Teklif Sistemi</a></li>
                        </ul>
                    </div>
                    <div className='social_media footer_height'>
                        <div className='footer_title'> Bizi Takip Edin </div>
                        <div className='footer_icons'>
                            <a className='footer_facebook_icon'><i className='bx bxl-facebook' ></i></a>
                            <a className='footer_twitter_icon'><i className='bx bxl-twitter' ></i></a>
                            <a className='footer_instagram_icon'><i className='bx bxl-instagram' ></i></a>
                            <a className='footer_youtube_icon'><i className='bx bxl-youtube' ></i></a>
                        </div>
                        <div className='apply'>
                            <div className='google_play'> <img src= {require('../assets/images/google_play1.png')}></img> </div>
                        </div>
                    </div>
                </div>

            </div>
            
            <div className='footer_copyright'>
                <span>Copyrights © 2022 Cetvel</span>
                <div className='footer_info_small'>
                    <a>Hakkımızda</a> 
                    <a>Gizlilik Politikası</a>
                    <a>Destek Talebi</a>
                </div>
            </div>

        </div>
    </div>
  );
}
export default Footer;