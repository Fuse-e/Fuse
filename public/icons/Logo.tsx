export const Logo = ({className}: {className?: string}) => {
  return (
          <svg width="308" height="308" viewBox="0 0 308 308" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g filter="url(#filter0_f_145_28)">
            <rect x="4" y="4" width="300" height="300" rx="30" fill="#191A23"/>
            </g>
            <rect x="54" y="54" width="200" height="200" rx="23" fill="#4856CA"/>
            <path d="M144.808 103.192C149.884 98.1156 158.116 98.1156 163.192 103.192L204.808 144.808C209.884 149.884 209.884 158.116 204.808 163.192L163.192 204.808C158.116 209.884 149.884 209.884 144.808 204.808L103.192 163.192C98.1156 158.116 98.1156 149.884 103.192 144.808L144.808 103.192Z" fill="#D9D9D9"/>
            <path d="M121 214.341L163.212 171" stroke="#4856CA" stroke-width="11" stroke-linecap="round"/>
            <path d="M100 193.341L142.212 150" stroke="#4856CA" stroke-width="11" stroke-linecap="round"/>
            <g filter="url(#filter1_bif_145_28)">
            <rect x="54" y="54" width="200" height="200" rx="23" fill="#2B3AB6" fill-opacity="0.09"/>
            </g>
            <defs>
            <filter id="filter0_f_145_28" x="0" y="0" width="308" height="308" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_145_28"/>
            </filter>
            <filter id="filter1_bif_145_28" x="51" y="51" width="206" height="206" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="1"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_145_28"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_145_28" result="shape"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_innerShadow_145_28"/>
            <feOffset dx="1" dy="1"/>
            <feGaussianBlur stdDeviation="7"/>
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
            <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.19 0"/>
            <feBlend mode="normal" in2="shape" result="effect2_innerShadow_145_28"/>
            <feGaussianBlur stdDeviation="1.5" result="effect3_foregroundBlur_145_28"/>
            </filter>
            </defs>
          </svg>
  );
};
