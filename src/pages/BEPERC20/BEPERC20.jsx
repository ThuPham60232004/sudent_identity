import React from 'react';
import './BEPERC20.css';

const BEPERC20 = () => {
  return (
    <div className="BEPERC20-container">
      <div className="BEPERC20-logo">
        <img 
          src="https://indodax.com/academy/wp-content/uploads/2023/12/IA-Image-Article-Mengenal-ERC-721-dan-Perbedaannya-dengan-BEPERC20_1200x675_INDODAX-Academy_1.webp" 
          alt="ERC 721 Logo" 
        />
      </div>
      <div className="BEPERC20-content">
        <h1>Khám phá đặc điểm của BEPERC20 và cách ứng dụng Token hiệu quả trong Blockchain</h1>
        <p>
          Giới thiệu những thông tin cơ bản về Token kỹ thuật số BEPERC20. Nền tảng đã mở ra nhiều ứng dụng trong nhiều lĩnh vực khác nhau như trò chơi, nghệ thuật số, bất động sản kỹ thuật số. Công nghệ có nhiều ứng dụng khác mà việc xác thực tính duy nhất và sở hữu của tài sản là quan trọng.
        </p>
      </div>

        <img 
          src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/175514/Originals/erc-721-2.jpg" 
          alt="NFT vs FT" 
        />

      <div className="BEPERC20-definition">
        <h2>Định nghĩa BEP-20 là gì?</h2>
        <p>
          Mã tiêu chuẩn BEP-20 là một chuẩn giao thức token trên mạng lưới Binance Smart Chain (BSC). Nền tảng tương tự như mã tiêu chuẩn ERC-20 trên mạng lưới Ethereum. Chuẩn BEP-20 được ứng dụng nhằm thể hiện cách một token hoạt động trên mạng lưới Binance Smart Chain.
        </p>
        <h3>Những điều khác biệt giữa BEP-20 và BEP-2</h3>
        <ul>
          <li><strong>Mục đích:</strong> BEP-20 được sử dụng trên Binance Smart Chain; BEP-2 được sử dụng trong Binance Chain.</li>
          <li><strong>Liên kết với mạng lưới:</strong> BEP-20 hỗ trợ DeFi; BEP-2 tập trung vào chuyển tiền.</li>
          <li><strong>Cách hoạt động:</strong> BEP-20 cho phép tạo ra token phức tạp; BEP-2 đơn giản hóa quy trình chuyển và lưu trữ.</li>
        </ul>
      </div>

      <div className="BEPERC20-advantages">
        <h2>Đánh giá ưu và nhược điểm của BEP-20</h2>
        <h3>Ưu điểm:</h3>
        <ul>
          <li>Tốc độ và chi phí giao dịch thấp.</li>
          <li>Tính tương thích với hệ sinh thái DeFi.</li>
          <li>Sự phổ biến nhờ vào cộng đồng người dùng lớn.</li>
        </ul>
        <h3>Nhược điểm:</h3>
        <ul>
          <li>Tính tập trung trong quản lý.</li>
          <li>Rủi ro liên quan đến độ tin cậy và ổn định.</li>
        </ul>
      </div>

      <div className="BEPERC20-creation">
        <h2>Token BEP-20 được phát hành như thế nào?</h2>
        <p>
          Bạn có thể phát hành token BEP-20 trên Binance Smart Chain (BSC) bằng cách sử dụng các công cụ và hướng dẫn như Remix, Truffle hoặc Hardhat. Việc tuân theo chuẩn BEP-20 là rất quan trọng để đảm bảo tính tương tác.
        </p>
        <h3>Các bước phát hành:</h3>
        <ol>
          <li>Sử dụng một trình tạo hợp đồng thông minh.</li>
          <li>Tuân theo chuẩn BEP-20.</li>
          <li>Triển khai hợp đồng thông minh.</li>
          <li>Thử nghiệm và kiểm tra token của bạn.</li>
        </ol>
      </div>
    </div>
  );
};

export default BEPERC20;
