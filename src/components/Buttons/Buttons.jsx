import React from "react";
import styles from "@/styles/buttons.module.css";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFilterRight } from "react-icons/bs";

export default function Buttons({
    donateNowBtn,
    signUpBtn,
    cancelBtn,
    confirmBtn,
    locationBtn,
    recentBtn,
    addItemBtn,
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
        </div>
    );
}
