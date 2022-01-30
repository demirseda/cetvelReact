import React, { Component } from 'react';


class Card extends Component {
  render() {
    return (
        <div>
            <div className='card_div'>

                <div className='card'>
                    <div className='card_header'>
                        <span className='card_icon'><i className='bx bxs-grid-alt'></i></span>
                        <span className='card_title'>Ön Muhasebe</span>
                    </div>
                    <div className='card_body'>
                        <p>Şirketinizin Ön Muhasebe İşlemlerini kolaylıkla mobil ve web aracılığıyla hızlıca gerçekleştirin. Yetişmeyen işleriniz gecikmesin.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_header'>
                        <span className='card_icon'><i className='bx bxs-grid-alt'></i></span>
                        <span className='card_title'>Depo & Stok Yönetimi </span>
                    </div>
                    <div className='card_body'>
                       <p>Bir veya birden fazla Depo yönetimi sayesinde Stoklarınız karışmasın. Depo ve Stok takibinizi mobil olarak cebinizde.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_header'>
                        <span className='card_icon'><i className='bx bxs-grid-alt'></i></span>
                        <span className='card_title'>E-Dönüşümler</span>
                    </div>
                    <div className='card_body'>
                        <p>E-Arşiv, E-Fatura, E-İrsaliye ve Online Teklif sistemi ile kağıt kullanımızı azaltıp dijital dönüşüme ortak olabilirsiniz.</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card_header'>
                        <span className='card_icon'><i className='bx bxs-grid-alt'></i></span>
                        <span className='card_title'>Online Tahsilat</span>
                    </div>
                    <div className='card_body'>
                        <p>Geciken veya Yapılması gereken tahsilatlarınız kaçmasın. Online Tahsilat sistemiyle anında hesabınızda.</p>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
export default Card;