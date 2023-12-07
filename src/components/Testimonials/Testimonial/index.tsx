import React from "react";
import Image from "next/image";
import { faShippingFast, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Styles.module.css";
import rStyles from './Responsive.module.css'
import Profile from "../../../assets/profile.jpeg";

const Testimonial = () => {
  return (
    <div className={`${styles.card} ${rStyles.card} p-4 bg-white mr-4 flex-1`}>
      <div className="flex items-center mb-4">
        <div className={`${styles.profileImageWrapper} mr-4`}>
          <Image className={styles.profileImage} src={Profile} alt="profile" />
        </div>
        <div className="flex-1">
          <h4 className="text-xl font-bold mb-1">Jenny Stroman</h4>
          <h6 className="text-sm text-gray-500">June 12, 2022</h6>
        </div>
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
      <p className="text-base text-gray-500">
        Cross functional teams enable out of the box brainstorming sacred cow
        big data digital literacy gain alignment. We&apos;ve got kpis for that price
        point.
      </p>
    </div>
  );
};

export default Testimonial;
