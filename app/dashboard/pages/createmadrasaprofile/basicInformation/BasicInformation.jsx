import { TextInputWithLabel } from "@/app/dashboard/DashboardComponents/SmallComponents";

const BasicInformation = () => {
  return (
    <>
      <h2 className="text-center">Basic Information</h2>
      <div className="flex items-center justify-center w-full">
        <form className="flex lg:w-[500px] flex-col gap-4">
          <TextInputWithLabel
            label={"School name"}
            placeholder={"School name"}
            id={"SchoolName"}
            htmlFor={"SchoolName"}
          />
          <TextInputWithLabel
            label={"village"}
            placeholder={"village"}
            id={"village"}
            htmlFor={"village"}
          />
          <TextInputWithLabel
            label={"district"}
            placeholder={"district"}
            id={"district"}
            htmlFor={"district"}
          />
          <TextInputWithLabel
            label={"established"}
            placeholder={"established"}
            id={"established"}
            htmlFor={"established"}
          />
          <TextInputWithLabel
            label={"registration"}
            placeholder={"registration"}
            id={"registration"}
            htmlFor={"registration"}
          />
          {/* Description */}
          <TextInputWithLabel
            label={"Description"}
            placeholder={"Description"}
            id={"Description"}
            htmlFor={"Description"}
          />

          {/* School  logo */}
          {/* <div className="mb-2 block">
            <Label
              htmlFor="choiceLogo"
              name="School LogoLabel"
              value="মাদ্রাসার লোগো চয়েস করুন"
              className="cursor-pointer w-[120px] h-[120px] text-center border border-dashed border-black flex items-center justify-center rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Label>
            <FileInput
              required
              id="choiceLogo"
              name="School Logo"
              value={formData.School Logo}
              onChange={handleInputChange}
              className="hidden"
              type="School Logo"
            />
          </div>

          <div className="flex  justify-between mb-2">
            <Label
              htmlFor="choiceLogo"
              value="মাদ্রাসার ফটো চয়েস করুন"
              className="cursor-pointer w-[120px] h-[120px] text-center border border-dashed border-black flex items-center justify-center rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Label>
            <FileInput
              required
              name="School Gallery1"
              value={formData.School Gallery1}
              onChange={handleInputChange}
              id="choiceLogo"
              className="hidden"
              type="School Logo"
            />
            <Label
              htmlFor="choiceLogo"
              value="মাদ্রাসার ফটো চয়েস করুন"
              className="cursor-pointer w-[120px] h-[120px] text-center border border-dashed border-black flex items-center justify-center rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Label>

            <FileInput
              required
              id="choiceLogo"
              className="hidden"
              name="School Gallery2"
              value={formData.School Gallery2}
              onChange={handleInputChange}
              type="School Logo"
            />
            <Label
              htmlFor="choiceLogo"
              value="মাদ্রাসার ফটো চয়েস করুন"
              className="cursor-pointer w-[120px] h-[120px] text-center border border-dashed border-black flex items-center justify-center rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </Label>
            <FileInput
              required
              id="School Gallery3"
              name="School Gallery3"
              value={formData.School Gallery3}
              onChange={handleInputChange}
              className="hidden"
              type="School Logo"
            />
          </div> */}
          <div className="flex items-center justify-end">
            <button
            // className={`text-white bg-blue-700 ${
            //   isFormEmpty()
            //     ? "cursor-not-allowed opacity-50"
            //     : "hover:bg-blue-800"
            // } font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
            >
              <button
              // onClick={() =>
              //   redirect("/createSchool profile/contactInformation")
              // }
              // disabled={isFormEmpty()}
              >
                <svg
                  class="w-6 h-6 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </button>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BasicInformation;
