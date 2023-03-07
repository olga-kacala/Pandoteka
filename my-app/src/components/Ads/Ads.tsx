import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle?: { push: (arg: any) => void }[];
  }
}

interface AdsProps {
  dataAdSlot: string;
}

export const Ads = (props: AdsProps): JSX.Element => {
  const { dataAdSlot } = props;

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []) as {
        push: (arg: any) => void;
      }[];
      const adObject = { push: (arg: any) => void 0 };
      window.adsbygoogle.push(adObject);
    } catch (error) {
      console.log("Add not successfully created");
    }
  }, []);

  return (
    <div>
         {/* change client number to ID from googleAdSense */}
      <button>
        Google adds
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
          data-ad-slot={dataAdSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </button>
    </div>
  );
};
