// import { useState } from "react";

// export default function Footer() {
//   const [message, setMessage] = useState("");

//   const handleSubscribe = (e) => {
//     e.preventDefault();
//     setMessage("🎉 Thank you for subscribing!");
//     setTimeout(() => {
//       setMessage("");
//     }, 3000);
//   };

//   return (
//     <footer
//       className="
//       w-full
//       bg-gradient-to-br
//       from-[#0f172a] via-[#0b1120] to-black
//       backdrop-blur-xl
//       text-gray-200
//       border-t border-white/10
//     "
//     >
//       <div
//         className="max-w-5xl mx-auto px-6 py-5 
//                       flex flex-col items-center 
//                       text-center space-y-4"
//       >
//         {/* Newsletter */}
//         <div className="w-full max-w-md">
//           <h3 className="font-medium text-sm mb-1 text-white">
//             Stay Updated
//           </h3>
//           <p className="text-xs text-gray-400 mb-3">
//             Subscribe for exclusive deals and updates.
//           </p>

//           <form onSubmit={handleSubscribe} className="flex">
//             <input
//               type="email"
//               required
//               placeholder="Enter your email"
//               className="w-full px-3 py-1.5 
//                          bg-white/5
//                          border border-white/10
//                          rounded-l-lg 
//                          focus:outline-none 
//                          focus:ring-2 focus:ring-blue-500/40
//                          text-xs text-white 
//                          placeholder-gray-400"
//             />
//             <button
//               type="submit"
//               className="px-4 py-1.5 
//                          bg-blue-600/80
//                          hover:bg-blue-600
//                          border border-blue-500/40
//                          rounded-r-lg 
//                          text-xs 
//                          text-white
//                          transition">
//               Subscribe
//             </button>
//           </form>

//           {message && (
//             <p className="mt-3 text-xs text-green-400">
//               {message}
//             </p>
//           )}
//         </div>

//         {/* Bottom Bar */}
//         <div className="w-full border-t border-white/10 pt-3 text-[11px] text-gray-500">
//           © {new Date().getFullYear()} BlueShop. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }








import { useState } from "react";

export default function Footer() {
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    setMessage("🎉 Thank you for subscribing!");
    setTimeout(() => {
      setMessage("");
    }, 3000);
  };

  return (
    <footer
      className="
      w-full
      bg-gradient-to-br
      from-gray-300 via-gray-500 to-gray-800
      text-gray-800
      border-t border-gray-300
    "
    >
      <div
        className="max-w-5xl mx-auto px-6 py-5 
                   flex flex-col items-center 
                   text-center space-y-4"
      >
        {/* Newsletter */}
        <div className="w-full max-w-md">
          <h3 className="font-medium text-sm mb-1 text-gray-1000">
            Stay Updated
          </h3>
          <p className="text-xs text-gray-900 mb-3">
            Subscribe for exclusive deals and updates.
          </p>

          <form onSubmit={handleSubscribe} className="flex">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-3 py-1.5 
                         bg-white
                         border border-gray-300
                         rounded-l-lg 
                         focus:outline-none 
                         focus:ring-2 focus:ring-blue-500/40
                         text-xs text-gray-800
                         placeholder-gray-400"
            />
            <button
              type="submit"
              className="px-4 py-1.5 
                         bg-blue-600
                         hover:bg-blue-700
                         border border-blue-600
                         rounded-r-lg 
                         text-xs 
                         text-white
                         transition">
              Subscribe
            </button>
          </form>

          {message && (
            <p className="mt-3 text-xs text-yellow-300">
              {message}
            </p>
          )}
        </div>  

        {/* Bottom Bar */}
        <div className="pt-3 text-[11px] text-white">
          © {new Date().getFullYear()} BlueShop. All rights reserved.
        </div>
      </div>
    </footer>
  );
}