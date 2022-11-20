import React from "react";
import Image from "next/image";
import Tshirt from "../../assets/tshirt.jpeg";
import { faShippingFast, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Product = () => {
  return (
    <div className={`w-full md:w-1/2 lg:w-1/3 h-80 flex flex-col mb-10 md:pr-2`}>
      <div className="overflow-hidden flex flex-col justify-center mb-4">
        <Image src={Tshirt} alt="tshirt" />
      </div>
      {/* <div className={`h-full`}>
            </div> */}
      <h4 className={`text-lg font-bold mb-2`}>Kaos Ngabers</h4>
      <h5 className={`text-lg mb-2`}>$59</h5>
      <div className={`flex`}>
        <FontAwesomeIcon
          style={{ width: 20, marginRight: 5 }}
          color={"#f8bc4e"}
          icon={faStar}
        />
        <FontAwesomeIcon
          style={{ width: 20, marginRight: 5 }}
          color={"#f8bc4e"}
          icon={faStar}
        />
        <FontAwesomeIcon
          style={{ width: 20, marginRight: 5 }}
          color={"#f8bc4e"}
          icon={faStar}
        />
      </div>
    </div>
  );
};

export default Product;
