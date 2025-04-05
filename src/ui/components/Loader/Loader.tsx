import { FC } from "react";

export const Loader: FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-violet border-solid border-opacity-50"></div>
    </div>
  );
};
