import WelcomeBg from '../../image/custom-1.svg'

const WelcomeSection = (props) => {
  return (
    <div className="flex mb-7.5 rounded-xl bg-white dark:bg-boxdark">
      <div className="flex flex-1 py-6">
        <div
          className="flex-grow p-7.5"
          style={{
            backgroundImage: `url(${WelcomeBg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right bottom',
            backgroundSize: 'auto 100%',
          }}
        >
          <div className="w-full text-black dark:text-white">
            <h2 className="text-2xl mb-4">
              Chào mừng trở lại, <strong>{props.user?.fullName}</strong>!
            </h2>
            <p className="text-dark my-2 text-lg">
              Hệ thống đặt lịch khám bệnh hàng đầu tại Việt Nam
            </p>
            <p className="italic">
              Đặt lịch dễ dàng, chăm sóc tận tâm cùng YouMed
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
