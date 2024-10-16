import React from 'react';
import './ERC721Info.css';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';

const ERC721Info = () => {
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
            <img src="https://indodax.com/academy/wp-content/uploads/2023/12/IA-Image-Article-Mengenal-ERC-721-dan-Perbedaannya-dengan-ERC1155_1200x675_INDODAX-Academy_1.webp" alt="ERC 721 Logo" />
          </div>
          <div className="erc721-content">
            <h1 className='title_content_erc'>Khám phá đặc điểm của ERC-721 và cách ứng dụng Token hiệu quả trong Blockchain</h1>
              <p className='content_erc'>Token ERC-721 là chuẩn mã thông báo không thể thay thế (NFT), mang đến một phương pháp để đại diện cho tài sản độc nhất và không thể thay thế trên Blockchain. Từ tranh ảnh kỹ thuật số đến các vật phẩm trò chơi, ERC-721 đã trở thành tiêu chuẩn để xác thực tính duy nhất và sở hữu trong môi trường phi tập trung.<br/>ERC-721 là một trong những tiêu chuẩn quan trọng nhất trên nền tảng Ethereum, được sử dụng để tạo ra các tài sản số mà mỗi đơn vị là duy nhất và không thể thay thế. Những tài sản này thường là NFT, mở ra cánh cửa cho vô số ứng dụng sáng tạo trong nhiều ngành công nghiệp.</p>
              <img src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/175514/Originals/erc-721-1.jpg" alt="ERC 721 Example" />
              <p className='content_erc'>Một điểm khác biệt chính giữa ERC-721 và các tiêu chuẩn token khác (như ERC-20) là ERC-721 không thể thay thế. Điều này có nghĩa là mỗi token ERC-721 đều là duy nhất, trong khi token ERC-20 có thể được thay thế lẫn nhau.</p>
            <h1 className='title_content_erc'>So sánh Non-Fungible Token (NFT) & Fungible Token (FT)</h1>
              <img src="https://cdn2.fptshop.com.vn/unsafe/Uploads/images/tin-tuc/175514/Originals/erc-721-2.jpg" alt="NFT vs FT" />
              <p className='content_erc'>Sự khác biệt chính giữa Non-Fungible Tokens (NFTs) và Fungible Tokens (FTs) nằm ở những đặc điểm sau đây:</p>
              <p className='content_erc'>NFTs: Mỗi NFT là duy nhất và không thể thay thế. Mỗi NFT có thông tin và giá trị riêng biệt và không thể hoán đổi một NFT với một NFT khác theo cách trực tiếp.<br />FTs: FTs có thể được hoán đổi một cách trực tiếp với nhau mà không làm thay đổi giá trị hoặc tính chất của chúng.</p>
              <h1 className='title_content_erc'>Tính ứng dụng của Token ERC-721 trong Blockchain</h1>
              <p className='content_erc'>Token ERC-721 có rất nhiều ứng dụng trong các lĩnh vực khác nhau. Những ứng dụng nổi bật của token này bao gồm:</p>
              <ul className='content_erc_ul'>
                <li>
                  <strong>Digital Art:</strong> Token ERC-721 đã giúp nghệ sĩ kỹ thuật số bán các tác phẩm nghệ thuật độc nhất trên blockchain. Điều này không chỉ đảm bảo tính xác thực mà còn giúp nghệ sĩ kiểm soát quyền sở hữu và giá trị của tác phẩm.
                </li>
                <li >
                  <strong>Collectibles:</strong> Token ERC-721 tạo ra cơ hội cho người dùng sưu tầm các món đồ kỹ thuật số độc đáo. Những bộ sưu tập này có thể là các nhân vật, vật phẩm trò chơi, hoặc những món đồ lưu niệm kỹ thuật số có giá trị.
                </li>
                <li>
                  <strong>Gaming:</strong> ERC-721 là tiêu chuẩn cho các vật phẩm trong trò chơi không thể thay thế. Người chơi có thể mua bán, trao đổi các vật phẩm trong game mà không lo lắng về vấn đề bản quyền hoặc tính xác thực.
                </li>
                <li>
                  <strong>Ethereum Name Service (ENS):</strong> Sử dụng token ERC-721 để cung cấp tên miền phi tập trung trên Ethereum, ENS cho phép người dùng đăng ký và sở hữu các tên miền có thể dễ dàng chuyển nhượng và giao dịch.
                </li>
              </ul>
            <h1 className='title_content_erc'>Những dự án Token ERC-721 nổi bật trên thị trường</h1>
              <p className='content_erc'>
                Một số dự án đã tận dụng Token ERC-721 để tạo ra các hệ sinh thái độc đáo và phong phú. Dưới đây là ba dự án tiêu biểu:
              </p>
              <ul>
                <li>
                  <strong>Bored Ape Yacht Club (BAYC):</strong> BAYC là một bộ sưu tập nổi tiếng về hình ảnh những chú khỉ buồn chán, mỗi hình ảnh là duy nhất và có giá trị cao. Những hình ảnh này đã tạo ra một cộng đồng sưu tập mạnh mẽ và là một trong những NFT nổi tiếng nhất trên thị trường.
                </li>
                <li>
                  <strong>Axie Infinity:</strong> Đây là một trò chơi blockchain sử dụng token ERC-721 để tạo ra các sinh vật kỹ thuật số gọi là Axies. Người chơi có thể nuôi dưỡng, huấn luyện và chiến đấu với Axies của mình. Axie Infinity đã phát triển một hệ sinh thái kinh tế trò chơi hoàn chỉnh và trở thành một trong những dự án blockchain hàng đầu.
                </li>
                <li>
                  <strong>Ethereum Name Service (ENS):</strong> Dự án ENS cho phép người dùng đăng ký các tên miền phi tập trung. Thay vì sử dụng các địa chỉ ví dài và phức tạp, người dùng có thể sở hữu các tên miền dễ nhớ để thực hiện các giao dịch trên blockchain.
                </li>
              </ul>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
    
  );
};

export default ERC721Info;
