export default function Profile({ user }) {
  const { address, first_name, last_name, avatar, employment, email } = user;
  const fullName = `${first_name} ${last_name}`;
  const { street_address, city, zip_code, country, phone_number } = address;
  const fullAddress = `${street_address},  ${city}, ${zip_code}, ${country}.`;
  return (
    <div className="container mx-auto my-5 p-5">
      <div className="md:flex no-wrap md:-mx-2 ">
        <div className="w-full md:w-3/12 md:mx-2">
          <div className="bg-white p-3 ">
            <div className="image overflow-hidden">
              <img
                className="h-auto w-full mx-auto"
                src={avatar}
                alt={fullName}
              />
            </div>
            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
              {fullName}
            </h1>
            <h3 className="text-gray-600 font-lg text-semibold leading-6">
              {employment.title}
            </h3>
            <h3 className="text-gray-400 font-lg text-semibold leading-6">
              {email}
            </h3>
            <p className="text-sm py-3 text-gray-500 hover:text-gray-600 leading-6">
              I am very good at {employment.key_skill}
            </p>
          </div>
          <div className="my-4"></div>
        </div>
        <div className="w-full md:w-9/12 mx-2 h-64">
          <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="text-gray-700">
              <div className="grid md:grid-cols-2 text-sm">
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">First Name</div>
                  <div className="px-4 py-2">{first_name}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Last Name</div>
                  <div className="px-4 py-2">{last_name}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Contact No.</div>
                  <div className="px-4 py-2">{phone_number}</div>
                </div>
                <div className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">Current Address</div>
                  <div className="px-4 py-2">{fullAddress}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
