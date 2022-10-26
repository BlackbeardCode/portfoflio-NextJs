import React from "react";
import { motion } from "framer-motion";

const bounceTransition = {
  y: { duration: 5, yoyo: Infinity, ease: "easeOut" },
};

const BackgroundAnimation = () => {
  return (
    <motion.div transition={bounceTransition} animate={{ y: ["7.5%", "-5%"] }}>
      <svg
        width="400"
        height="500"
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g
          transition={bounceTransition}
          animate={{ y: ["5%", "-3%"] }}
          id="developer"
        >
          <motion.g
            animate={{
              scale: [0.9, 1.1, 0.9, 1, 0.9],
              rotate: [0, 170, 360, 90, 0],
              borderRadius: ["10%", "25%", "50%", "35%", "20%"],
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              times: [0, 0.4, 1, 1.6, 2.2],
              repeat: Infinity,
              repeatDelay: 0,
            }}
            id="back-grad"
          >
            <path
              id="Vector"
              d="M261.72 376.667C355.682 376.667 431.853 321.846 431.853 254.222C431.853 186.598 355.682 131.778 261.72 131.778C167.759 131.778 91.5879 186.598 91.5879 254.222C91.5879 321.846 167.759 376.667 261.72 376.667Z"
              fill="url(#paint0_linear_203_259)"
              fill-opacity="0.5"
            />
          </motion.g>
          <motion.g
            id="server"
            transition={bounceTransition}
            animate={{ y: ["7%", "-3%"] }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ x: -10, rotateZ: -3 }}
          >
            <path
              id="Vector_2"
              d="M174.858 239.444H93.1002V353.333H174.858V239.444Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_3"
              d="M189.508 219.444H91.2098V260H189.508V219.444Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_4"
              d="M183.365 276.111H85.0662V316.667H183.365V276.111Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_5"
              d="M183.365 324.444H85.0662V365H183.365V324.444Z"
              fill="#3F3D56"
            />
          </motion.g>
          <motion.g
            id="desk"
            transition={bounceTransition}
            animate={{ y: ["5%", "-3%"] }}
          >
            <path
              id="Vector_6"
              d="M346.881 261.667V348.436L359.016 372.09L359.94 373.889H407.823L408.79 261.667H346.881Z"
              fill="#CAE3FE"
            />
            <path
              id="Vector_7"
              opacity="0.1"
              d="M346.881 261.667V348.54L358.903 372.222L359.641 261.667H346.881Z"
              fill="black"
            />
            <path
              id="Vector_8"
              d="M232.042 256.667V347.303L219.906 372.01L218.983 373.889H171.1L170.132 256.667H232.042Z"
              fill="#CAE4FE"
            />
            <path
              id="Vector_9"
              opacity="0.1"
              d="M230.624 259.444V346.318L218.602 370L217.864 259.444H230.624Z"
              fill="black"
            />
            <path
              id="Vector_10"
              d="M423.44 254.573V262.778H162.571V250.926L186.815 227.222H402.106L423.44 254.573Z"
              fill="#EEFDFF"
              fill-opacity="0.77"
            />
            <path
              id="Vector_11"
              opacity="0.1"
              d="M423.44 257.394V262.778H162.098V255L423.44 257.394Z"
              fill="black"
            />
            <path
              id="Vector_12"
              d="M199.79 283.889H188.196L183.365 279.444H205.104L199.79 283.889Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_13"
              d="M199.79 300.556H188.196L183.365 296.111H205.104L199.79 300.556Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_14"
              d="M199.79 324.444H188.196L183.365 320H205.104L199.79 324.444Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_15"
              d="M199.79 347.778H188.196L183.365 343.889H205.104L199.79 347.778Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_16"
              d="M377.715 286.111H389.309L394.14 281.667H372.401L377.715 286.111Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_17"
              d="M377.715 302.778H389.309L394.14 298.889H372.401L377.715 302.778Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_18"
              d="M377.715 326.667H389.309L394.14 322.222H372.401L377.715 326.667Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_19"
              d="M377.715 350.556H389.309L394.14 346.111H372.401L377.715 350.556Z"
              fill="#3F3D56"
            />
          </motion.g>
          <motion.g
            transition={bounceTransition}
            animate={{ y: ["5%", "-3%"] }}
            id="input"
          >
            <path
              id="Vector_20"
              d="M313.8 245.773V247.222H246.692V246.063L246.784 245.773L248.438 240.556H312.428L313.8 245.773Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_21"
              d="M339.299 244.304C339.176 244.963 338.714 245.658 337.668 246.315C333.918 248.674 326.292 245.686 326.292 245.686C326.292 245.686 320.416 244.428 320.416 241.126C320.581 240.983 320.753 240.855 320.931 240.74C322.508 239.691 327.736 237.101 337.006 240.85C337.689 241.12 338.299 241.622 338.768 242.303C338.976 242.56 339.133 242.875 339.225 243.223C339.317 243.571 339.342 243.941 339.299 244.304Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_22"
              opacity="0.1"
              d="M339.299 244.049C334.816 246.158 330.82 246.315 326.719 242.819C325.168 241.412 323.29 240.652 321.361 240.653C322.901 239.653 328.007 237.185 337.06 240.758C337.727 241.015 338.323 241.494 338.781 242.142C338.984 242.387 339.137 242.688 339.227 243.019C339.317 243.351 339.342 243.704 339.299 244.049Z"
              fill="black"
            />
            <path
              id="Vector_23"
              d="M333.885 242.778C334.798 242.778 335.539 242.529 335.539 242.222C335.539 241.915 334.798 241.667 333.885 241.667C332.971 241.667 332.231 241.915 332.231 242.222C332.231 242.529 332.971 242.778 333.885 242.778Z"
              fill="#F2F2F2"
            />
            <path
              id="Vector_24"
              opacity="0.1"
              d="M313.8 245.556V247.222H246.692V245.889L246.784 245.556H313.8Z"
              fill="black"
            />
          </motion.g>
          <motion.g
            transition={bounceTransition}
            animate={{ y: ["3%", "-3%"] }}
            whileHover={{ scale: 1.15 }}
            whileTap={{ x: 10, rotateZ: -7 }}
            id="guy"
          >
            <path
              id="Vector_25"
              opacity="0.4"
              d="M161.153 144.444H155.009V152.222H161.153V144.444Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_26"
              opacity="0.8"
              d="M170.132 144.444H163.989V152.222H170.132V144.444Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_27"
              d="M179.584 144.444H172.968V152.222H179.584V144.444Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_28"
              opacity="0.4"
              d="M161.153 191.667H155.009V199.444H161.153V191.667Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_29"
              opacity="0.8"
              d="M170.132 191.667H163.989V199.444H170.132V191.667Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_30"
              d="M179.584 191.667H172.968V199.444H179.584V191.667Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_31"
              opacity="0.4"
              d="M161.153 239.444H155.009V246.667H161.153V239.444Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_32"
              opacity="0.8"
              d="M170.132 239.444H163.989V246.667H170.132V239.444Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_33"
              d="M179.584 239.444H172.968V246.667H179.584V239.444Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_34"
              d="M165.583 85.569C164.906 85.5023 164.229 85.6841 163.64 86.0902C163.062 86.5655 162.698 87.3983 162.326 88.1731C160.904 91.1712 158.979 93.7821 156.673 95.8403C154.993 97.3178 152.858 99.16 153.145 101.884C153.297 102.784 153.574 103.646 153.964 104.435C155.514 108.191 159.742 111.094 159.326 115.379C160.865 112.285 158.806 110.755 160.346 107.66C161.079 106.186 162.352 104.523 163.459 105.448C163.83 105.758 164.073 106.314 164.459 106.586C165.38 107.235 166.36 105.994 167.175 105.116C169.985 102.086 173.982 102.88 177.48 103.824C179.131 104.269 180.945 104.854 181.921 106.749C183.204 109.24 180.701 111.931 180.069 114.748C180.017 114.988 180.015 115.239 180.062 115.481C180.109 115.722 180.204 115.946 180.339 116.134C180.473 116.322 180.644 116.468 180.836 116.559C181.028 116.65 181.236 116.684 181.441 116.658C182.49 116.534 183.734 116.432 183.796 115.879C185.116 115.935 186.734 115.756 187.3 114.105C187.472 113.452 187.564 112.772 187.571 112.086C187.778 109.313 188.759 106.783 189.408 104.144C190.057 101.504 190.34 98.4114 189.244 96.0713C188.853 95.2927 188.369 94.5869 187.808 93.9761C181.59 86.75 173.414 85.5583 165.583 85.569Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_35"
              d="M160.586 120.917C160.586 120.917 161.955 134.473 156.936 135.558C151.918 136.643 161.499 155.08 161.499 155.08L184.31 158.333L178.835 136.643C178.835 136.643 175.185 135.016 177.467 124.17C179.748 113.325 160.586 120.917 160.586 120.917Z"
              fill="#FFB8B8"
            />
            <path
              id="Vector_36"
              d="M146.975 353.333L148.79 383.333H158.318L155.596 353.333H146.975Z"
              fill="#FFB8B8"
            />
            <path
              id="Vector_37"
              d="M216.446 297.199L217.809 322.222L228.261 316.782L224.171 296.111L216.446 297.199Z"
              fill="#FFB8B8"
            />
            <path
              id="Vector_38"
              d="M139.887 239.774C139.887 239.774 140.34 271.117 143.059 281.385C145.778 291.652 145.325 292.192 144.872 293.814C144.419 295.435 143.965 294.354 143.965 297.056C143.965 299.758 143.059 342.449 143.965 346.232C144.872 350.015 141.246 356.499 143.965 357.04C146.685 357.58 159.374 357.04 159.827 353.797C160.281 350.555 156.202 349.474 158.015 347.313C159.827 345.151 162.547 300.839 162.547 300.839L168.891 270.036L180.675 253.825H205.601L213.305 289.491C213.305 289.491 210.133 299.758 212.399 299.758C214.665 299.758 228.261 303 228.261 291.112C228.261 279.223 223.729 244.097 222.822 243.017C221.916 241.936 223.276 238.153 221.916 236.532C220.556 234.911 204.694 223.563 198.803 221.401C192.911 219.239 184.646 216.667 184.646 216.667L139.887 239.774Z"
              fill="#002966"
            />
            <path
              id="Vector_39"
              d="M228.4 312.099C228.4 312.099 221.669 309.395 218.528 317.509C215.387 325.622 216.733 327.786 216.733 327.786C216.733 327.786 227.054 332.113 228.848 329.95C229.629 329.008 232.109 328.681 234.662 328.612C238.549 328.507 239.583 321.877 235.912 320.333C235.802 320.287 235.691 320.247 235.579 320.213C231.989 319.131 228.4 312.099 228.4 312.099Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_40"
              d="M170.841 130C178.28 130 184.31 122.662 184.31 113.611C184.31 104.56 178.28 97.2222 170.841 97.2222C163.403 97.2222 157.372 104.56 157.372 113.611C157.372 122.662 163.403 130 170.841 130Z"
              fill="#FFB8B8"
            />
            <path
              id="Vector_41"
              d="M153.158 142.455C153.158 142.455 175.465 147.847 180.928 139.22C186.391 130.593 188.667 163.484 188.667 163.484L191.399 197.992L187.302 216.864C187.302 216.864 165.905 237.353 159.076 238.971C152.248 240.588 141.777 241.667 141.777 241.667C141.777 241.667 144.964 181.816 144.964 180.738C144.964 179.66 153.158 142.455 153.158 142.455Z"
              fill="white"
            />
            <path
              id="Vector_42"
              d="M160.064 132.102C160.064 132.102 155.13 128.714 153.772 131.968C152.414 135.223 139.741 143.36 138.383 143.36C137.025 143.36 141.098 188.386 139.288 193.811C137.477 199.235 128.878 238.836 133.856 242.091C138.835 245.346 135.214 238.836 140.193 246.973C145.172 255.11 169.614 255.11 170.972 251.855C172.33 248.601 160.109 224.189 162.372 201.405C164.635 178.621 168.256 147.158 165.088 142.818C161.919 138.478 160.064 132.102 160.064 132.102Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_43"
              d="M176.276 135.919L176.909 133.333C176.909 133.333 195.807 140.774 196.716 145.63C197.624 150.485 197.17 184.471 193.99 187.168C190.811 189.865 186.269 194.181 189.448 200.654C192.628 207.128 196.261 214.141 198.987 214.68C201.712 215.22 206.708 218.996 205.346 222.772C203.983 226.549 187.631 219.536 187.631 219.536C187.631 219.536 176.73 209.825 177.184 194.72C177.639 179.616 176.276 135.919 176.276 135.919Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_44"
              d="M192.164 199.444L181.212 223.77C181.212 223.77 165.24 243.23 174.367 245.392C183.494 247.554 188.513 227.554 188.513 227.554L200.378 207.553L192.164 199.444Z"
              fill="#FFB8B8"
            />
            <path
              id="Vector_45"
              d="M166.181 90.01C165.632 89.9619 165.082 90.0879 164.587 90.3749C164.14 90.7602 163.772 91.2585 163.509 91.8333C162.297 93.9848 160.717 95.8135 158.871 97.2017C157.492 98.2362 155.74 99.5261 155.976 101.434C156.104 102.073 156.332 102.679 156.648 103.22C157.924 105.876 158.432 108.951 158.095 111.978L161.884 105.478C162.486 104.446 163.531 103.281 164.439 103.929C164.743 104.146 164.943 104.535 165.259 104.726C166.015 105.18 166.819 104.311 167.487 103.696C169.794 101.575 173.073 102.131 175.943 102.792C177.298 103.104 178.786 103.513 179.587 104.84C180.918 107.045 179.528 110.231 180.305 112.778C180.522 112.598 180.707 112.369 180.848 112.103C180.989 111.838 181.083 111.542 181.125 111.232C182.209 111.272 183.536 111.146 184 109.99C184.141 109.537 184.217 109.059 184.223 108.577C184.393 106.635 185.197 104.864 185.73 103.016C186.263 101.168 186.495 99.0019 185.595 97.3635C185.267 96.8083 184.87 96.3139 184.417 95.8964C179.315 90.8369 172.606 90.0025 166.181 90.01Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_46"
              d="M192.154 143.333L196.335 144.667C196.335 144.667 206.067 174.614 203.823 195.108C201.579 215.602 200.232 211.288 200.232 211.288C200.232 211.288 196.642 201.58 188.563 203.737L192.154 143.333Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_47"
              d="M147.402 379.348C146.299 381.11 146.52 383.628 145.543 385.489C144.696 387.102 143.099 387.948 142.04 389.378C141.701 389.853 141.4 390.362 141.139 390.9C140.156 392.834 139.357 395.313 140.325 397.257C141.104 398.822 142.741 399.433 144.242 399.85C146.139 400.376 148.111 400.798 150.03 400.395C151.95 399.993 153.826 398.612 154.51 396.468C154.645 395.928 154.804 395.398 154.989 394.88C156.029 392.474 159.293 392.448 160.357 390.056C161.102 388.383 160.417 386.36 159.733 384.652L157.642 379.433C156.948 377.701 154.135 378.697 152.668 378.282C150.755 377.741 148.778 377.144 147.402 379.348Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_48"
              d="M132.325 210.476L151.361 245.853C151.361 245.853 163.145 263.814 166.771 255.65C170.397 247.486 154.08 233.88 154.08 233.88L141.843 206.667L132.325 210.476Z"
              fill="#FFB8B8"
            />
            <path
              id="Vector_49"
              d="M142.109 144.419L138.474 143.333C138.474 143.333 131.204 146.047 129.387 157.445C127.569 168.842 128.932 214.432 131.204 214.975C133.476 215.518 142.425 207.037 143.857 208.835C145.289 210.633 140.746 201.406 142.109 196.522C143.472 191.637 142.109 144.419 142.109 144.419Z"
              fill="#2F2E41"
            />
          </motion.g>
          <motion.g
            transition={bounceTransition}
            animate={{ y: ["4%", "-4%"] }}
            whileHover={{ scale: 0.95 }}
            whileTap={{ scale: 1.1 }}
            id="monitor"
          >
            <path
              id="Vector_50"
              d="M269.754 217.454L267.733 230.528C267.733 230.528 257.785 235.884 264.78 236.041C271.775 236.199 304.728 236.041 304.728 236.041C304.728 236.041 311.101 236.041 300.997 230.371L298.976 216.667L269.754 217.454Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_51"
              opacity="0.1"
              d="M263.371 236.08C264.959 234.634 267.731 233.127 267.731 233.127L269.752 219.931L298.976 219.959L300.997 232.968C303.353 234.303 304.813 235.326 305.667 236.111C306.964 235.808 308.382 234.683 300.997 230.499L298.976 216.667L269.752 217.462L267.731 230.658C267.731 230.658 259.372 235.201 263.371 236.08Z"
              fill="black"
            />
            <path
              id="Vector_52"
              d="M350.189 206.111V214.572C350.189 215.212 350.069 215.846 349.835 216.437C349.601 217.028 349.259 217.565 348.827 218.018C348.394 218.47 347.882 218.829 347.317 219.074C346.753 219.319 346.148 219.445 345.537 219.444H222.516C221.905 219.445 221.3 219.319 220.736 219.074C220.171 218.829 219.658 218.47 219.226 218.018C218.794 217.565 218.452 217.028 218.218 216.437C217.984 215.846 217.864 215.212 217.864 214.572V206.111H350.189Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_53"
              d="M284.026 215.556C285.593 215.556 286.862 214.188 286.862 212.5C286.862 210.812 285.593 209.444 284.026 209.444C282.46 209.444 281.191 210.812 281.191 212.5C281.191 214.188 282.46 215.556 284.026 215.556Z"
              fill="#F2F2F2"
            />
            <path
              id="Vector_54"
              d="M345.537 113.889H222.516C219.947 113.889 217.864 116.023 217.864 118.656V203.566C217.864 206.199 219.947 208.333 222.516 208.333H345.537C348.106 208.333 350.189 206.199 350.189 203.566V118.656C350.189 116.023 348.106 113.889 345.537 113.889Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_55"
              d="M341.582 117.778H226.471C224.066 117.778 222.117 119.749 222.117 122.18V200.597C222.117 203.029 224.066 205 226.471 205H341.582C343.987 205 345.936 203.029 345.936 200.597V122.18C345.936 119.749 343.987 117.778 341.582 117.778Z"
              fill="#0F1F2A"
            />
          </motion.g>
        </motion.g>
        <defs>
          <linearGradient
            id="paint0_linear_203_259"
            x1="393.5"
            y1="177.5"
            x2="113.324"
            y2="298.951"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#2FC4F3" />
            <stop offset="1" stop-color="#B133FF" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default BackgroundAnimation;
