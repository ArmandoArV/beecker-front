import React, { useState } from "react";
import styles from "./RightBar.module.css";
import { IRightBar } from "@/app/interfaces/IRightBar";
import downArrow from "@/app/images/icons/closeArrow.png";
import upArrow from "@/app/images/icons/openArrow.png";
import profile from "@/app/images/icons/profile.png";
import Link from "next/link";

const RightBar: React.FC<IRightBar> = ({
  profileName,
  profileImageUrl,
}: IRightBar) => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.topContainer}>
        <div className={styles.profileImage}>
          <img src={profileImageUrl} alt={profileName} width={50} height={50} />
        </div>
        <div className={styles.profileNameContainer}>
          <p className={styles.profileName}>{profileName}</p>
        </div>
        <div className={styles.arrowContainer} onClick={toggleDropdown}>
          {showDropdown ? (
            <img src={downArrow.src} alt="arrow-up" />
          ) : (
            <img src={upArrow.src} alt="arrow-down" />
          )}
        </div>
      </div>
      {showDropdown && (
        <div className={styles.dropdownMenu}>
          <ul>
            <Link href="/profile">
              <li>Profile</li>
            </Link>
            <li>Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default RightBar;
