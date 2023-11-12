'use client'

import axios from "@/api/axios"
import {USER_URL}from '@/api/constant/user'



export default function SpecialistPage() {

   return (
      <div onClick={async () => { await axios.post(`${USER_URL.LOGIN}`,{email:"abc@gmail.com",password:'1111111', fullName: 'Nguyen Van Hoan'}) }}>
      123
      </div>
   )
}
