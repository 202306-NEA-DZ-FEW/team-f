import React from "react";
import styles from "@/styles/buttons.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFilterRight } from "react-icons/bs";
import { BiSolidUpArrowCircle, BiSolidShareAlt } from "react-icons/bi";
import { HiMiniUserCircle } from "react-icons/hi2";
import { MdEdit } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import { GrFacebook, GrInstagram, GrLinkedin } from "react-icons/gr";
import Image from "next/image";

export default function Buttons({
    donateNowBtn,
    signUpBtn,
    cancelBtn,
    confirmBtn,
    locationBtn,
    recentBtn,
    addItemBtn,
    backToTop,
    user,
    editIcon,
    trashIcon,
    facebookIcon,
    instagramIcon,
    linkedinIcon,
    shareIcon,
    readMoreBtn,
    ukFlag,
}) {
    return (
        <div>
            {donateNowBtn && (
                <button className={styles.productButton} onClick={donateNowBtn}>
                    Donate Now
                </button>
            )}
            {signUpBtn && (
                <button className={styles.productButton} onClick={signUpBtn}>
                    Sign up
                </button>
            )}
            {cancelBtn && (
                <button className={styles.cancelButton} onClick={cancelBtn}>
                    Cancel
                </button>
            )}
            {confirmBtn && (
                <button className={styles.productButton} onClick={confirmBtn}>
                    Confirm
                </button>
            )}
            {locationBtn && (
                <button className={styles.productButton} onClick={locationBtn}>
                    <div className='flex items-center'>
                        Location <AiFillCaretDown className='ml-2' />
                    </div>
                </button>
            )}
            {recentBtn && (
                <button className={styles.productButton} onClick={recentBtn}>
                    <div className='flex items-center'>
                        Recent <BsFilterRight className='ml-2' />{" "}
                    </div>
                </button>
            )}
            {addItemBtn && (
                <button className={styles.addItemButton} onClick={addItemBtn}>
                    Add item
                </button>
            )}
            {backToTop && (
                <button onClick={backToTop}>
                    <BiSolidUpArrowCircle className={styles.upArrowIcon} />
                </button>
            )}
            {user && (
                <button onClick={user}>
                    <HiMiniUserCircle className={styles.user} />
                </button>
            )}
            {editIcon && (
                <button onClick={editIcon}>
                    <MdEdit className={styles.editIcon} />
                </button>
            )}
            {trashIcon && (
                <button onClick={trashIcon}>
                    <GoTrash className={styles.trashIcon} />
                </button>
            )}

            {facebookIcon && (
                <button onClick={facebookIcon}>
                    <GrFacebook className={styles.socialMediaIcon} />
                </button>
            )}
            {instagramIcon && (
                <button onClick={instagramIcon}>
                    <GrInstagram className={styles.socialMediaIcon} />
                </button>
            )}
            {linkedinIcon && (
                <button onClick={linkedinIcon}>
                    <GrLinkedin className={styles.socialMediaIcon} />
                </button>
            )}
            {shareIcon && (
                <button onClick={shareIcon}>
                    <BiSolidShareAlt className={styles.socialMediaIcon} />
                </button>
            )}
            {readMoreBtn && (
                <button className={styles.productButton} onClick={readMoreBtn}>
                    <div className='flex items-center'>Read more</div>
                </button>
            )}
            {ukFlag && (
                <button onClick={ukFlag}>
                    <Image
                        src='/images/uk.png'
                        width={50}
                        height={50}
                        alt='uk flag'
                    />
                </button>
            )}
        </div>
    );
}
