import { useEffect } from "react";

const BackgroundSVG = () => {
  useEffect(() => {
    let path = document.querySelectorAll(".backgroundSVG path");
    let redThreadClass = document.querySelector(".redThread");

    for (let i = 0; i < path.length; i++) {
      let pathLength = path[i].getTotalLength();

      path[i].style.strokeDasharray = pathLength + " " + pathLength;
      path[i].style.strokeDashoffset = pathLength;
      window.addEventListener("scroll", () => {
        // What % down is it?
        let scrollPercentage =
          (document.documentElement.scrollTop + document.body.scrollTop) /
          (document.documentElement.scrollHeight -
            document.documentElement.clientHeight);

        // Length to offset the dashes
        let drawLength = pathLength * scrollPercentage;
        //Draw in  reverse
        path[i].style.strokeDashoffset = pathLength - drawLength;
        redThreadClass.style.height = `${document.body.clientHeight}px`;
      });
      window.addEventListener("resize", () => {
        redThreadClass.style.height = `${document.body.clientHeight}px`;
      });
    }
  });
  return (
    <div className="redThread">
      <svg
        viewBox="0 0 1440 3315"
        fill="none"
        className="backgroundSVG desktopSVG"
        preserveAspectRatio="xMidYMax meet"
      >
        <path
          d="M1168.35 35C1179.75 68.19 1059.59 118.862 910.413 112.898C305.117 88.7 240.583 196.486 311.668 244.491C433.861 327.01 508.767 401.999 404.842 465.835C300.918 529.671 230.549 390.897 592.817 365.224C955.086 339.551 1271.49 462.223 1171.99 573.326C1004.01 760.892 469.827 684.734 622.684 656.447C719.089 638.606 661.511 707.364 549.933 695.614C406.366 680.495 22.7001 721.725 257.707 878.392C398.455 972.221 704.016 874.911 927.58 908.855C1267.73 960.502 1344.08 1403.56 1079.78 1318.02C766.961 1216.78 428.415 1117.94 323.918 1303.13C203.349 1516.81 468.779 1657.02 860.143 1545.53C1246.2 1435.56 1393.47 1921.04 1146.59 1939.26C833.928 1962.32 723.746 1901.56 501 1949C128.667 2028.29 229.098 2281 625.136 2292.75C686.851 2294.58 1106.71 2259.18 1213.27 2365.86C1336.29 2489.02 516.419 2292.75 206.21 2589.55C93.2069 2697.66 282.639 2840.21 447.348 2891.13C509.381 2910.31 741 2976 955 3009.5C1021.52 3019.91 1340.5 3064 1181.75 3314"
          stroke="url(#paint0_linear_39_4)"
          stroke-width="2"
        />
        <path
          d="M1188.47 1C1190.01 38.6733 1146.29 141.502 850.225 120.121C591.022 101.403 444.362 105.938 345.663 141.502C294.803 159.828 236.912 234.006 416.372 330.874C583.719 421.204 305.857 547.675 305.857 455.839C305.857 375.115 604.411 328.842 974.448 390.294C1100.57 411.239 1328.23 469.631 1206.66 573.48C1153.54 618.859 1058.8 671.866 908.528 693.873C772.486 713.796 629.207 712.261 582.894 676.803C510.782 621.59 625.549 635.664 672.907 661.906C718.72 687.292 639.183 715.958 550.89 699.147C277 647 183.84 728.94 166.338 794.981C148.836 861.022 307.298 916.125 394.133 905.099C593.44 879.791 1177.9 874.984 1228.99 1149.01C1280.08 1423.04 985.041 1340.47 880.41 1290.39C764.63 1234.97 255.804 1115.17 295.355 1399.28C334.906 1683.4 380.344 1203.01 334.861 1384.88C289.377 1566.76 441.067 1619.39 880.41 1549.14C1037.62 1524 1262.29 1599.79 1274.89 1744.62C1303.99 2079.06 748.652 1797.85 1063.96 1890.86C1305.25 1962.04 424.021 1897.02 307 2020.5C189.979 2143.98 323.859 2279.33 578.5 2285.5C1156.5 2299.5 1235.01 2358.17 1249 2384.5C1311.73 2502.61 669.507 2329.82 318.858 2517.01C148.496 2607.96 159.031 2698.86 226.846 2775.22C301.162 2851.01 354.5 2883 536 2930.5C655.115 2961.67 879.991 2988.16 1090.46 3048.82C1256.08 3111.53 1226.51 3252.65 1217.48 3310"
          stroke="url(#paint1_linear_39_4)"
          stroke-width="4"
        />
        <defs>
          <linearGradient
            id="paint0_linear_39_4"
            x1="1268.37"
            y1="44.7141"
            x2="1268.91"
            y2="3313.7"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EA4444" stop-opacity="0" />
            <stop offset="0.0255944" stop-color="#EA4444" />
            <stop offset="0.973676" stop-color="#EA4444" />
            <stop offset="0.984857" stop-color="#EA4444" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_39_4"
            x1="1288.12"
            y1="-4.23611"
            x2="1347.04"
            y2="3307.05"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.00810127" stop-color="#EA4444" stop-opacity="0" />
            <stop offset="0.0337302" stop-color="#EA4444" />
            <stop offset="0.954682" stop-color="#EA4444" />
            <stop offset="1" stop-color="#EA4444" stop-opacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 400 2442"
        fill="none"
        className="backgroundSVG mobileSVG"
        preserveAspectRatio="xMidYMax meet"
      >
        <g clip-path="url(#clip0_31_2)">
          <path
            d="M371.482 0C375.477 27.7704 348.202 79.944 207.152 66.4748C30.8402 49.6384 50.3247 192.109 74.7969 259C97.2969 320.5 151.297 447.529 78.2969 492C18.7291 528.288 41.8842 418.506 158.297 414C235.797 411 430.797 418.5 373.797 478C313.297 541.154 200.297 478 105.797 554.5C12.5412 629.993 411.297 649.5 373.797 684.5C318.033 736.546 47.1996 696.567 78.2971 772C152.297 951.5 321.06 794.701 380.297 864.5C444.797 940.5 170.297 1031 68.2969 1003.5C-90.8316 960.598 280.774 903.764 340.797 1059.5C371.052 1138 169.297 1326 205.297 1270.5C330.074 1078.14 461.849 1323.99 268.297 1391C-146.203 1534.5 108.797 1647.5 382.797 1767.5C465.968 1803.93 390.624 1921.27 203.297 1959.5C-17.2026 2004.5 43.0635 2069.14 69.7974 2092.5C164.797 2175.5 370.297 2032.5 381.297 2369"
            stroke="url(#paint0_linear_31_2)"
            stroke-width="4"
          />
          <path
            d="M354.724 0C355.237 29.3665 322.072 89.7523 250.954 71.7628C144.506 44.8365 93.4267 71.2122 68.5435 119.735C32.3423 190.327 81.8802 231.086 104.026 318.252C127.015 408.736 72.5148 536.66 77.5393 464.118C83.5364 377.535 252.209 398.353 345.407 435.647C541.311 514.04 96.5298 494.539 93.0315 590.093C90.6194 655.978 402.463 636.201 361.399 670.826C274.442 744.149 112.13 664.257 92.5317 719.578C69.0433 785.88 209.059 927.991 227.965 853.743C243.458 792.901 118.231 912.3 197.98 861.543C249.455 828.782 349.95 826.288 378.391 877.534C446.358 999.999 -50.7334 1074.99 52.0516 1013.65C221.968 912.245 334.913 976.321 334.913 1067.08C334.913 1157.84 257.749 1189.05 210.973 1211C55.768 1283.82 501.83 1179.02 354.903 1344.77C193.282 1527.1 514.965 1332.19 366.897 1366.61C-84.3809 1471.53 79.0386 1689.48 210.973 1657.95C388.886 1615.44 386.387 1793.5 386.387 1822.93C386.387 1974.5 116.673 1996.7 170.493 1926.67C219.331 1863.13 369.064 1922.4 158.999 1964.51C-23.9109 2001.17 81.0374 2159.22 209.974 2146.25C279.666 2139.24 394.383 2173.16 394.383 2328"
            stroke="url(#paint1_linear_31_2)"
            stroke-width="2"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_31_2"
            x1="406.519"
            y1="8.12793"
            x2="356.326"
            y2="2402.36"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EA4444" stop-opacity="0" />
            <stop offset="0.0255944" stop-color="#EA4444" />
            <stop offset="0.973676" stop-color="#EA4444" />
            <stop offset="0.984857" stop-color="#EA4444" stop-opacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_31_2"
            x1="381.219"
            y1="-21.1439"
            x2="539.971"
            y2="2308.41"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.00810127" stop-color="#EA4444" stop-opacity="0" />
            <stop offset="0.0376586" stop-color="#EA4444" />
            <stop offset="0.978067" stop-color="#EA4444" />
            <stop offset="1" stop-color="#EA4444" stop-opacity="0" />
          </linearGradient>
          <clipPath id="clip0_31_2">
            <rect width="430" height="2442" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default BackgroundSVG;
