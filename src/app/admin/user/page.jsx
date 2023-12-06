'use client'

import Swal from 'sweetalert2'


export default function Role() {
   return (
      <div onClick={() => {
         Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
         }) }}>Quản lý quyền</div>
   )
}