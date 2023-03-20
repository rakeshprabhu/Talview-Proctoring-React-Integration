// @ts-nocheck
import React, { useEffect } from "react";

interface ProviewProps {
  // setProviewCompleted: (value: boolean) => void;
  proviewConfiguration: {
    proviewUrl: string;
    proviewToken: string;
    profileId: string;
    sessionId: string;
    sessionTitle: string;
    sessionType: string;
  };
}
export const StopProview = () => {
  localStorage.removeItem("tv_candidate_proctor")
  const script = Array.from(document.querySelectorAll("script[src='https://cdn.proview.io/init.js']"));
  if(document.getElementById("proctor_container")) {
    document.getElementById("proctor_container").remove()
  }
  if(document.getElementById("tvp_screen_share_container")) {
    document.getElementById("tvp_screen_share_container").remove()
  }
  if(document.getElementById("proctor_flash_container")) {
    document.getElementById("proctor_flash_container").remove()
  }
  if(document.getElementById("screen_capture")) {
    document.getElementById("screen_capture").remove()
  }
  if(document.getElementById("#backdrop_element")) {
    document.getElementById("#backdrop_element").remove()
  }
  if(script[0]) {
    script[0].parentNode.removeChild(script[0]);
  }
}

export const Proview: React.FC<ProviewProps> = (props) => {
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("c");
  const { proviewConfiguration } = props;

  const loadProview = (callback: (token: string | null) => void) => {
    (function (i, s, o, g, r, a, m) {
      i["TalviewProctor"] = r;
      i[r] =
        i[r] ||
        function () {
          // eslint-disable-next-line prefer-rest-params
          (i[r].q = i[r].q || []).push(arguments);
        };
      i[r].l = 1 * new Date();
      a = s.createElement(o);
      m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m);
    })(window, document, "script", proviewConfiguration.proviewUrl, "tv");

    tv("init", proviewConfiguration.proviewToken, {
      profileId: proviewConfiguration.profileId,
      sessionId: proviewConfiguration.sessionId,
      session: proviewConfiguration.sessionId,
      sessionTitle: proviewConfiguration.sessionTitle,
      language: localStorage.getItem("i18nextLng"),
      session_type: proviewConfiguration.sessionType,
      previewStyle: "position: fixed; bottom:0px",
      initCallback: () => function(err,id,a,v,s){console.log([err,id, a,v,s]);},
    });
  };

  useEffect(() => {
    loadProview((token: string | null) => {
      localStorage.setItem("tv_candidate_proctor", proviewConfiguration.profileId);
    });
  }, []);

  return <></>;
};