import React from "react";
import Style from "./DaysComponents.module.css";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import images from "../../../img";

const DaysComponents = () => {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image
            src={images.creatorbackground1}
            className={Style.daysComponent_box_img_img}
            width={380}
            height={300}
            objectFit="covers"
          />
        </div>
        <div className={Style.daysComponent_profile}>
          <Image
            src={images.creatorbackground2}
            width={200}
            height={200}
            className={Style.daysComponent_box_img_1}
            objectFit="covers"
          />
        </div>
        <div className={Style.daysComponent_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponent_title_info}>
            <div className={Style.daysComponent_title_info_profile}>
              <Image
                src={images.user1}
                width={30}
                height={30}
                objectFit="covers"
                className={Style.daysComponent_title_info_profile_img}
              />
              <p>Creator</p>
              <span>
                Shoaib{" "}
                <small>
                  <MdVerified />
                </small>
              </span>
            </div>
            <div className={Style.daysComponent_box_title_info_profile}>
              <small>1.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;
