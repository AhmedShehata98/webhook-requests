// import React, { useCallback, useState } from "react";

// // 3rd party libraries
// import { nanoid } from "nanoid";

// //components
// import ProparytiesInputListWrapper from "./ProparytiesInputListWrapper";
// import PropertiesInputItem from "./PropertiesInputItem";
// import Button from "./Button";
// import RowInput from "./RowInput";

// function KeyAndValueInput({ bodyRequestOption, $requestMenu }) {
//   const [formData, setformData] = useState({
//     key: "",
//     value: "",
//     "selected-property": false,
//   });

//   return (
//     <>
//       {inputMethod === false && (
//         <ProparytiesInputListWrapper>
//           <span
//             key={nanoid(4)}
//             className="bg-slate-400 flex p-[4.5px] text-center divide-x-2"
//           >
//             <span key={nanoid(4)} className="w-10 font-medium uppercase">
//               #
//             </span>
//             <div key={nanoid(4)} className="w-2/5 font-medium uppercase">
//               key
//             </div>
//             <div key={nanoid(4)} className="w-2/5 font-medium uppercase">
//               value
//             </div>
//             <div key={nanoid(4)} className="w-1/6 flex justify-center">
//               <Button
//                 type={"button"}
//                 onClick={() => setInputMethod((prev) => !prev)}
//               >
//                 edit bulk
//               </Button>
//             </div>
//           </span>
//           <PropertiesInputItem
//             key={nanoid(5)}
//             bodyRequestOption={bodyRequestOption}
//             $requestMenu={$requestMenu}
//             formData={formData}
//           />
//         </ProparytiesInputListWrapper>
//       )}
//       {inputMethod && (
//         <RowInput
//           setInputMethod={setInputMethod}
//           bodyRequestOption={bodyRequestOption}
//         />
//       )}
//     </>
//   );
// }

// export default React.memo(KeyAndValueInput);
