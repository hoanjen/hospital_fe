import { Button } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import Swal from 'sweetalert2';


import { USER_URL } from '@/api/constant/user';
import axios from '@/api/axios';

function DeleteHistory(props) {

   const cancelBooking = async (id) => {
      try {
         const cancel = await axios.put(`${USER_URL.HEALTH_FORM}/${id}`, { status: 'rejected' });
         return cancel;
      } catch (error) {
         console.error('Error cancel booking:', error);
         throw error;
      }
   };




   const { record, onReload } = props;

   const handleDelete = async () => {
      if (record.status === "rejected") {
         return;
      }
      Swal.fire({
         title: 'Bạn có chắc chắn?',
         text: 'Muốn hủy lịch khám này!',
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Hủy lịch khám',
         cancelButtonText: 'Hủy',
      }).then(async (result) => {
         if (result.isConfirmed) {
            const response = await cancelBooking(record.id);
            if (response.data?.code === 200) {
               Swal.fire({
                  title: 'Thông báo!',
                  text: response.data?.message,
                  icon: 'success',
               });
               onReload();
            } else {
               Swal.fire({
                  title: 'Thông báo!',
                  text: response.response?.data.message,
                  icon: 'error',
               });
            }
         }
      });
   };

   return (
      <>
         <div className={record.status === "rejected" ? "font-medium text-red500 cursor-not-allowed dark:text-blue500 hover:underline" : "font-medium text-blue600 dark:text-blue500 hover:underline cursor-pointer"} onClick={() => { handleDelete(); }} >Hủy lịch</div>
      </>
   );
}

export default DeleteHistory;