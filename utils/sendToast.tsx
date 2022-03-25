import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import toast from "react-hot-toast";

const sendToast = (content: any, toastType: "success" | "error") =>
  toast.custom(
    (t) => (
      <div
        className={`transition ease-in-out duration-300 p-5 bg-zinc-800 my-44 flex flex-col rounded-xl drop-shadow-2xl relative max-w-md translate-y-0 transform-gpu items-center justify-between px-4 py-4 text-white shadow-2xl hover:translate-y-1 hover:shadow-none lg:w-auto ${
          t.visible ? "bottom-0" : "-bottom-96"
        }`}
        onClick={() => {
          toast.dismiss(t.id);
        }}
      >
        <div className="text-xl">
          {toastType === "success" ? (
            <CheckCircleIcon className="h-5 w-5" />
          ) : (
            <XCircleIcon className="h-5 w-5" />
          )}
        </div>
        <div className="ml-4 flex cursor-default flex-col items-start justify-center">
          <h1 className={`mr-auto w-60 text-base font-semibold text-gray-200`}>
            {toastType === "success" ? "Success" : "Error"}
          </h1>
          <span className="text-sm text-gray-400">{content}</span>
        </div>
      </div>
    ),
    { position: "bottom-right", duration: 2000 }
  );

export default sendToast;
