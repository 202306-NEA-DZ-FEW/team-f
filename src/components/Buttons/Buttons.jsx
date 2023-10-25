import React from "react";
import { AiFillCaretDown } from "react-icons/ai";
import { BsFilterRight } from "react-icons/bs";
import { BiSolidUpArrowCircle, BiSolidShareAlt } from "react-icons/bi";
import { HiUserCircle } from "react-icons/hi";
import { MdEdit } from "react-icons/md";
import { GoTrash } from "react-icons/go";
import { GrFacebook, GrInstagram, GrLinkedin } from "react-icons/gr";
import Image from "next/image";

export default function Buttons({ onClick, icon, className, name }) {
    return (
        <div>
            <button
                className={`font-bold py-2 px-2 ml-2 rounded-full flex items-center ${className}`}
                onClick={onClick}
            >
                {name}
                {icon === "caretDown" && <AiFillCaretDown className='ml-2' />}
                {icon === "filterRight" && <BsFilterRight className='ml-2' />}
                {icon === "upArrowCircle" && (
                    <BiSolidUpArrowCircle className='ml-2' />
                )}
                {icon === "userCircle" && <HiUserCircle className='ml-2' />}
                {icon === "edit" && <MdEdit className='ml-2' />}
                {icon === "trash" && <GoTrash className='ml-2' />}
                {icon === "facebook" && <GrFacebook className='ml-2' />}
                {icon === "instagram" && <GrInstagram className='ml-2' />}
                {icon === "linkedin" && <GrLinkedin className='ml-2' />}
                {icon === "shareAlt" && <BiSolidShareAlt className='ml-2' />}
                {name === "Read more" && <span className='ml-2'>{name}</span>}
                {icon === "ukFlag" && (
                    <Image
                        src='/images/uk.png'
                        width={50}
                        height={50}
                        alt='uk flag'
                    />
                )}
            </button>
        </div>
    );
}
