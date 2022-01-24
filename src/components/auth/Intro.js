import { Link } from "react-router-dom";

export default function IntroPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className=" SM:shadow-sm SM:border SM:rounded-md flex flex-col  items-center p-8 sm:w-full w-2/5  ">
        <p className="mb-10 text-custom-black text-3xl font-bold ">
          Career Resource Hub
        </p>

        <div className="sm:flex-none text-center">
          <p className="">Welcome</p>
          <p className="text-center">
            Join over here to get details of thousands of books from differnt
            authors and get help with it.
          </p>
          <Link to="/login">
            <button
              type="submit"
              className="bg-custom-green h-12 w-full mt-4 rounded-sm text-white font-semibold hover:text-custom-green hover:border hover:bg-white hover:border-custom-green"
            >
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button
              type="submit"
              className="bg-custom-blue h-12 w-full mt-4 rounded-sm text-white font-semibold hover:text-custom-blue hover:border hover:bg-white hover:border-custom-blue"
            >
              Register
            </button>
          </Link>

          {/* <div >
            
          </div> */}
        </div>
      </div>
    </div>
  );
}
