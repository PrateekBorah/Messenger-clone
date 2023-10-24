'use client'

import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form';

interface MessageInputProps {
    id: string;
    register: UseFormRegister<FieldValues>;
    placeholder:string;
    required?:boolean;
    errors:FieldErrors<FieldValues>
    type?:string;
}

const MessageInput:React.FC<MessageInputProps> = ({id, register, errors, required, placeholder, type}) => {
  return (
    <div className='relative w-full'>
        <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, {required})}
        placeholder={placeholder}
        className='text-black font-light py-2 px-4 bg-neutral-100 rounded-full w-full focus:outline-none'
        />
    </div>
  )
}

export default MessageInput