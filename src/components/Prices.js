import React, { Component } from 'react';

class Prices extends Component {
  render() {
    return (
        <div>
            <div className='prices_page'>
                <div className='prices_header'>
                    <h3>Çeşitli Paketler Sayesinde İhtiyacınıza Göre Paket Seçimi Yapabilirsiniz</h3>
                    <p>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır.</p>
                </div>

                <div className='prices_body'>
                    <div className='packet packet1'>
                        <div className='packet_header'>
                            <span className='packet_icon'><i className='bx bx-run' ></i></span>
                            <h4>Packet Adı</h4>
                            <span className='price'>1000 <span className='tl_icon'>₺ + KDV</span></span>
                        </div>
                        <div className='packet_content'>
                            <ul>
                                <li><i className='bx bx-check' ></i> <span>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</span></li>
                                <li><i className='bx bx-check' ></i> <span>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</span></li>
                                <li><i className='bx bx-check' ></i> <span>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</span></li>
                                <li><i className='bx bx-check' ></i> <span>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</span></li>
                            </ul>
                        </div>
                        <div className='packet_footer'>
                            <a className='btn_TryForFree'>Ücretsiz Deneyin</a>
                        </div>
                    </div>
                    
                    <div className='packet packet2'>
                        <div className='packet_header'>
                            <span className='packet_icon'><i className='bx bx-car' ></i></span>
                            <h4>Packet Adı</h4>
                            <span className='price'>1000 <span className='tl_icon'>₺ + KDV</span></span>
                        </div>
                        <div className='packet_content'>
                            <ul>
                                <li><i className='bx bx-check' ></i> <span>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</span></li>
                                <li><i className='bx bx-check' ></i> <span>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</span></li>
                                <li><i className='bx bx-check' ></i> <span>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</span></li>
                                <li><i className='bx bx-check' ></i> <span>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</span></li>
                            </ul>
                        </div>
                        <div className='packet_footer'>
                            <a className='btn_TryForFree'>Ücretsiz Deneyin</a>
                        </div>
                    </div>
                    <div className='packet packet3'>
                        <div className='more_populer'>En Popüler</div>
                        <div className='packet_header'>
                            <span className='packet_icon'><i className='bx bxs-plane-alt' ></i></span>
                            <h4>Packet Adı</h4>
                            <span className='price'>1000 <span className='tl_icon'>₺ + KDV</span></span>
                        </div>
                         <div className='packet_content'>
                            <ul>
                                <li><i className='bx bx-check' ></i> <span>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</span></li>
                                <li><i className='bx bx-check' ></i> <span>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</span></li>
                                <li><i className='bx bx-check' ></i> <span>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</span></li>
                                <li><i className='bx bx-check' ></i> <span>Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir</span></li>
                            </ul>
                        </div>
                        <div className='packet_footer'>
                            <a className='btn_TryForFree'>Ücretsiz Deneyin</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
  }
}
export default Prices;