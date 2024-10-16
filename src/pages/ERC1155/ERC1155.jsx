import React from 'react';
import './ERC1155.css';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const ERC1155 = () => {
  return (
    <div className="erc721-container_parent">
        <Navbar />
        <div className="blog_detail_erc721-container_parent">
          <h2>ERC1155</h2>
        </div>
      <div className="erc721-container_body">
      <div className="erc721-container_container">
        <div className="left_erc721-container">
          <div className="erc721-logo">
                   <img 
          src="https://indodax.com/academy/wp-content/uploads/2023/12/IA-Image-Article-Mengenal-ERC-721-dan-Perbedaannya-dengan-ERC1155_1200x675_INDODAX-Academy_1.webp" 
          alt="ERC 721 Logo" 
        />
          </div>
          <div className="erc721-content">
            <h1 className='title_content_erc'>Khám phá đặc điểm của ERC-721 và ERC-1155, và cách ứng dụng hiệu quả trong Blockchain</h1>
              <p className='content_erc'>ERC-1155 là một tiêu chuẩn token trên Ethereum cho phép tạo ra cả token ERC-20 và ERC-721 trong một hợp đồng thông minh duy nhất. Được phát triển bởi Enjin vào năm 2018, tiêu chuẩn này mang lại nhiều lợi ích về tính linh hoạt và hiệu suất, đặc biệt trong ngành công nghiệp game blockchain và các dự án NFT.</p>
              <p className='content_erc'>Ví dụ như trong game Axie Infinity, nhờ có ERC-1155, nhà phát triển có thể phát hành cả token AXS, RON cùng với các NFT đại diện cho các con thú chơi trong game chỉ trong một hợp đồng duy nhất, thay vì cần nhiều hợp đồng riêng lẻ như trước đây.</p>
            <h1 className='title_content_erc'>So sánh ERC-20, ERC-721 và ERC-1155</h1>
              <p className='content_erc'>Dưới đây là sự khác biệt chính giữa các tiêu chuẩn token phổ biến trên Ethereum:</p>
              <ul className='content_erc_ul'>
              <li><strong>ERC-20:</strong> Tiêu chuẩn token fungible, được sử dụng để tạo ra các token có thể hoán đổi (ví dụ: tiền điện tử).</li>
              <li><strong>ERC-721:</strong> Tiêu chuẩn non-fungible token (NFT), đại diện cho tài sản duy nhất và không thể thay thế.</li>
              <li><strong>ERC-1155:</strong> Cho phép tạo cả token fungible và non-fungible trong một hợp đồng duy nhất, giúp giảm chi phí và tăng hiệu quả giao dịch.</li>
            </ul>
            <img src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/175514/Originals/erc-721-1.jpg" alt="ERC 721 Info" />
              <h1 className='title_content_erc'>Ưu và Nhược điểm của ERC-1155</h1>
              <p className='content_erc_strong'>Ưu điểm</p>
                <ul className='content_erc_ul'>
                  <li>Tiết kiệm chi phí giao dịch và phát triển hợp đồng.</li>
                  <li>Cho phép tạo ra cả token fungible và non-fungible.</li>
                  <li>Tăng hiệu suất và tối ưu hoá việc quản lý tài sản trên blockchain.</li>
                </ul>
              <p className='content_erc_strong'>Nhược điểm</p>
                <ul className='content_erc_ul'>
                  <li>Cấu trúc phức tạp, có thể gây khó khăn cho những người mới tiếp cận.</li>
                  <li>Khó khăn trong việc tích hợp với các hệ thống khác do tính đa dạng và phức tạp của nó.</li>
                </ul>
            <h1 className='title_content_erc'>Ứng dụng của ERC-1155</h1>
             <img src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/175514/Originals/erc-721-2.jpg" alt="NFT vs FT" />
              <p className='content_erc'>ERC-1155 được sử dụng rộng rãi trong nhiều lĩnh vực, bao gồm:</p>
              <ul className='content_erc_ul'>
                <li><strong>Game Blockchain:</strong> Tạo token đại diện cho các vật phẩm trong game như vũ khí, trang phục.</li>
                <li><strong>Tokenized Assets:</strong> Đại diện cho tài sản vật chất như bất động sản, kim cương.</li>
                <li><strong>NFT Marketplace:</strong> Các sàn giao dịch NFT như OpenSea, Rarible hỗ trợ ERC-1155 để mua bán các NFT và token fungible trong cùng một hợp đồng.</li>
              </ul>
              <p className='content_erc'>Tiêu chuẩn ERC-1155 đã và đang thay đổi cách chúng ta tạo và quản lý token trên blockchain Ethereum, giúp tăng tính linh hoạt và hiệu quả cho nhiều ứng dụng trong tương lai.</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default ERC1155;
