/** @format */
import Slider from "react-slick";

const ShopSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1500,
      };

      

  return (
        <Slider {...settings} ref={sliderRef} className="Service_Slider">
          <div className="Main hover">
            <img src="./Image/61.png" alt="" />
            <p className="head hideOnHover">Head Chefs</p>
            <p className="desc hideOnHover">Earn upto 12 - 15 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Head Chefs</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("52", "Head Chefs")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>

          <div className="Main hover">
            <img src="./Image/59.png" alt="" />
            <p className="head hideOnHover">Head Chefs</p>
            <p className="desc hideOnHover">Earn upto 15 - 20 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Head Chef</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("52", "Head Chefs")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>
          <div className="Main hover">
            <img src="./Image/60.png" alt="" />
            <p className="head hideOnHover">Bartender</p>
            <p className="desc hideOnHover">Earn upto 20 - 25 £ per hour</p>
            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Bartender</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("100", "Bartender")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>

          <div className="Main hover">
            <img src="./Image/61.png" alt="" />
            <p className="head hideOnHover">Head Chefs</p>
            <p className="desc hideOnHover">Earn upto 12 - 15 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Head Chefs</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("52", "Head Chefs")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>

          <div className="Main hover">
            <img src="./Image/59.png" alt="" />
            <p className="head hideOnHover">Head Chefs</p>
            <p className="desc hideOnHover">Earn upto 15 - 20 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Head Chef</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("52", "Head Chefs")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>
          <div className="Main hover">
            <img src="./Image/60.png" alt="" />
            <p className="head hideOnHover">Bartender</p>
            <p className="desc hideOnHover">Earn upto 20 - 25 £ per hour</p>
            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Bartender</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("100", "Bartender")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>

          <div className="Main hover">
            <img src="./Image/61.png" alt="" />
            <p className="head hideOnHover">Bartender</p>
            <p className="desc hideOnHover">Earn upto 12 - 15 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Bartender</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("100", "Bartender")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>

          <div className="Main hover">
            <img src="./Image/59.png" alt="" />
            <p className="head hideOnHover">Head Chefs</p>
            <p className="desc hideOnHover">Earn upto 15 - 20 £ per hour</p>

            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Head Chef</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("52", "Head Chefs")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>
          <div className="Main hover">
            <img src="./Image/60.png" alt="" />
            <p className="head hideOnHover">Bartender</p>
            <p className="desc hideOnHover">Earn upto 20 - 25 £ per hour</p>
            <motion.div
              className="content-div"
              initial={{ opacity: 0, scale: 0.7, rotate: 180 }}
              whileHover={{ opacity: 1, scale: 1, rotate: 360 }}
              whileFocus={{ opacity: 1, scale: 1, rotate: 360 }}
              whileTap={{ opacity: 0.8, scale: 0.9, rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <p className="head">Bartender</p>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                eget mollis velit. Praesent pharetra, ipsum eget vestibulum
                eleifend, est sapien mollis erat, faucibus rhoncus purus tellus
                eget odio. Nam dapibus magna a neque luctus auctor quis quis
                diam. Donec viverra laoreet massa quis consectetur.
              </p>
              <button onClick={() => ModalOpen("100", "Bartender")}>
                FIND OUT MORE{" "}
              </button>
            </motion.div>
          </div>
        </Slider>
  );
};

export default ShopSlider;
