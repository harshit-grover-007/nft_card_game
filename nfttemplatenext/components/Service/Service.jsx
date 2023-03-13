import React from "react";
import Style from "./Service.module.css";
import Image from "next/image";
import Link from "next/link";
import images from "../../img";

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>
            Connect wallet, discover, buy, sell your NFTs & earn
            money.
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>Connect your wallet, and start earning money.</p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Start Trading</h3>
          <p>
            Start trading with a wallet, crypto funds, and an NFT
            marketplace.
          </p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service4}
            alt="Filter & Discover"
            width={100}
            height={100}
          />
          <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <h3>Earn Money</h3>
          <p>Earn with NFTs by selling or investing in promising projects.</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
