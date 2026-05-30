import { useEffect, useState } from "react";

export default function Countdown({ expiresAt }: { expiresAt: string }) {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(expiresAt).getTime() - Date.now();

      if (diff <= 0) {
        setTimeLeft("Expired");
        clearInterval(interval);
        return;
      }

      const min = Math.floor(diff / 1000 / 60);
      const sec = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${min}m ${sec}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [expiresAt]);

  return (
    <span className="text-red-500 font-semibold">
      {timeLeft}
    </span>
  );
}