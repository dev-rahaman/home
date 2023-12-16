import { DropdownTwoIcon, ReportIcon } from "@/app/icons/icons";

const BookDetails = () => {
  return (
    <>
      <div className="bg-white p-6 shadow-md flex mt-5">
        <div className="w-1/2 pr-6">
          <img
            src="/book.jpg"
            alt="Book Cover"
            className="w-[200px] h-[250px]"
          />
          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center flex-col justify-center">
              <div className="bg-[#0E6C14] w-[200px] text-white flex items-center justify-center p-2">
                <p>Download</p>
                <span>
                  <DropdownTwoIcon />
                </span>
              </div>
              <p className="text-yellow-500 text-xl">
                &#9733;&#9733;&#9733;&#9733;&#9733;
              </p>
              <p className="text-gray-600 ml-2">550</p>
              <button className="flex items-center justify-center text-blue-500 hover:underline">
                <ReportIcon /> Report
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <img
              src="/book.jpg"
              alt="Book Cover"
              className="w-[50px] rounded-full h-[50px] rounded"
            />
            <div className="text-gray-600 ">
              <p>David Kadavy</p>
              <p>10/20/2023</p>
            </div>
          </div>
          <h2 className="text-[#4C4C4C] font-extrabold text-4xl mt-5">
            Mind Management, Not Time Management By David Kadavy
          </h2>
          <div className="flex gap-2 mt-20">
            <button className="bg-blue-700 p-2 text-white">Facebook</button>
            <button className="bg-red-600 p-2 text-white">Instagram</button>
            <button className="bg-[#c8232c] p-2 text-white">Linkedin</button>
            <button className="bg-[#0088cc] p-2 text-white">Telegram</button>
          </div>
        </div>
      </div>
      {/* Book Details */}
      <div className="bg-white p-6 shadow-md my-5">
        <p className="font-bold uppercase text-[#4C4C4C] border-b-2">
          Description
        </p>
        <p className="py-4">
          In today’s fast-paced world, the pursuit of success often feels like a
          race against time. We’re constantly bombarded with advice on how to
          manage our time more effectively to achieve our goals. However, what
          if the secret to true productivity and success lies not in time
          management, but in something even more powerful—mind management? In
          this article, we delve into the concept of mind management, explore
          its benefits, and understand why it trumps traditional time
          management. Let’s embark on this journey of self-discovery and
          transformation.
        </p>
        <p className="font-bold uppercase text-[#4C4C4C] border-b-2">
          Detail of Mind Management not Time Management PDF
        </p>

        <table className="w-full bg-white border border-gray-300 mt-5">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Attribute</th>
              <th className="py-2 px-4 border-b">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b">Book Title</td>
              <td className="py-2 px-4 border-b">
                Mind Management not Time Management PDF
              </td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Number of Pages</td>
              <td className="py-2 px-4 border-b">451</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Author Name</td>
              <td className="py-2 px-4 border-b">David Kadavy</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Category</td>
              <td className="py-2 px-4 border-b">Motivation</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Original Published</td>
              <td className="py-2 px-4 border-b">Al Hera</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Audio</td>
              <td className="py-2 px-4 border-b">Yes</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b">Language</td>
              <td className="py-2 px-4 border-b">English</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookDetails;
