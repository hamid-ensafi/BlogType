import { IPostError } from "@/interface/Error.Api.interface";

export default function ErrorMessage({ error }: { error: IPostError }) {
  return (
    <div
      className="w-full h-full flex justify-center items-center   "
      role="status"
    >
      <span className="text-slate-50 font-semibold text-lg">
        {error.message}
      </span>
    </div>
  );
}
