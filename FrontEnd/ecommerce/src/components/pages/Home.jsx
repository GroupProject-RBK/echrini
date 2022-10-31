import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item>
      <center>
      <img
        className="d-block w-70"
        src="https://www.lenovo.com/medias/lenovo-laptop-legion-ideapad-3-gaming-hero.png?context=bWFzdGVyfHJvb3R8MjE5OTA5fGltYWdlL3BuZ3xoYWMvaDVlLzE0MzI1NjEyNTQ0MDMwLnBuZ3xiMTdhY2FiMTg2YmYyZDIzNGZlMDNhNjM5YmEzZWMwZWEzZjVkNWEwODg1MDU3YzczNmZhYWNmNTBjYjM1ODA3"
        alt="Lenovo IdeaPad Gaming 3"
      />
      </center>
    </Carousel.Item>
    <Carousel.Item>
    <center>
      <img
        className="d-block w-50"
        src="https://cdn.shopify.com/s/files/1/0228/7629/1136/products/8852T_1_HD_2000x.png?v=1650378140"
        alt="Pc gaming "
      />
      </center>
    </Carousel.Item>
    <Carousel.Item>
      <center>
      <img
        className="d-block w-50"
        src="https://www.evetech.co.za/repository/ProductImages/gaming-laptop-best-deals-banner-v1.png"
        alt="gaming mouse"
      />
      </center>
    </Carousel.Item>
    <Carousel.Item>
      <center>
      <img
        className="d-block w-50"
        src="https://www.pngplay.com/wp-content/uploads/6/Computer-Accessories-PNG-Photos.png"
        alt="Pc gaming accessoiries"
      />
      </center>
    </Carousel.Item>
    <Carousel.Item>
      <center>
      <img
        className="d-block w-50"
        src="https://www.pngplay.com/wp-content/uploads/6/Computer-Accessories-PNG-Free-File-Download.png"
        alt="Pc gaming accessoiries"
      />
      </center>
    </Carousel.Item>
    <Carousel.Item>
      <center>
      <img
        className="d-block w-50"
        src="https://www.pngmart.com/files/22/iPhone-14-PNG-Photo.png"
        alt="Iphone"
      />
      </center>
    </Carousel.Item>
  </Carousel>

  )
}
export default Home;