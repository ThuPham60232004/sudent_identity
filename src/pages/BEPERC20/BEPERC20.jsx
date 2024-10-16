import React from 'react';
import './BEPERC20.css';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const BEPERC20 = () => {
  return (
    <div className="erc721-container_parent">
        <Navbar />
        <div className="blog_detail_erc721-container_parent">
          <h2>Blog detail</h2>
        </div>
      <div className="erc721-container_body">
      <div className="erc721-container_container">
        <div className="left_erc721-container">
          <div className="erc721-logo">
              <img src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/175514/Originals/erc-721-1.jpg" alt="ERC 721 Example" />
          </div>
          <div className="erc721-content">
            <h1 className='title_content_erc'>Khám phá đặc điểm của BEPERC20 và cách ứng dụng Token hiệu quả trong Blockchain</h1>
              <p className='content_erc'>Giới thiệu những thông tin cơ bản về Token kỹ thuật số BEPERC20. Nền tảng đã mở ra nhiều ứng dụng trong nhiều lĩnh vực khác nhau như trò chơi, nghệ thuật số, bất động sản kỹ thuật số. Công nghệ có nhiều ứng dụng khác mà việc xác thực tính duy nhất và sở hữu của tài sản là quan trọng.</p>
                      <img 
          src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/175514/Originals/erc-721-2.jpg" 
          alt="NFT vs FT" 
        />
            <h1 className='title_content_erc'>Định nghĩa BEP-20 là gì?</h1>
              <p className='content_erc'>Mã tiêu chuẩn BEP-20 là một chuẩn giao thức token trên mạng lưới Binance Smart Chain (BSC). Nền tảng tương tự như mã tiêu chuẩn ERC-20 trên mạng lưới Ethereum. Chuẩn BEP-20 được ứng dụng nhằm thể hiện cách một token hoạt động trên mạng lưới Binance Smart Chain.</p>
              
              <h1 className='title_content_erc'>Những điều khác biệt giữa BEP-20 và BEP-2</h1>
              <p className='content_erc'>Token ERC-721 có rất nhiều ứng dụng trong các lĩnh vực khác nhau. Những ứng dụng nổi bật của token này bao gồm:</p>
              <ul className='content_erc_ul'>
                <li>
                  <strong>Mục đích:</strong>BEP-20 được sử dụng trên Binance Smart Chain; BEP-2 được sử dụng trong Binance Chain.
                </li>
                <li >
                  <strong>Liên kết với mạng lưới:</strong> BEP-20 hỗ trợ DeFi; BEP-2 tập trung vào chuyển tiền
                </li>
                <li>
                  <strong>Cách hoạt động:</strong>BEP-20 cho phép tạo ra token phức tạp; BEP-2 đơn giản hóa quy trình chuyển và lưu trữ.
                </li>
              </ul>
            <h1 className='title_content_erc'>Đánh giá ưu và nhược điểm của BEP-20</h1>
            <p className='content_erc_strong'>Ưu điểm:</p>
              <ul>
                <li>Tốc độ và chi phí giao dịch thấp.</li>
                <li>Tính tương thích với hệ sinh thái DeFi.</li>
                <li>Sự phổ biến nhờ vào cộng đồng người dùng lớn.</li>
              </ul>
            <h1 className='content_erc_strong'>Nhược điểm:</h1>
              <ul>
                <li>Tính tập trung trong quản lý.</li>
                <li>Rủi ro liên quan đến độ tin cậy và ổn định.</li>
              </ul>

            <h1 className='title_content_erc'>Token BEP-20 được phát hành như thế nào?</h1>
            <p className='content_erc'>Bạn có thể phát hành token BEP-20 trên Binance Smart Chain (BSC) bằng cách sử dụng các công cụ và hướng dẫn như Remix, Truffle hoặc Hardhat. Việc tuân theo chuẩn BEP-20 là rất quan trọng để đảm bảo tính tương tác.</p>
            <p className='content_erc'>Các bước phát hành:</p>
            <ul className='content_erc_ul'>
              <li>Sử dụng một trình tạo hợp đồng thông minh.</li>
              <li>Tuân theo chuẩn BEP-20.</li>
              <li>Triển khai hợp đồng thông minh.</li>
              <li>Thử nghiệm và kiểm tra token của bạn.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default BEPERC20;
