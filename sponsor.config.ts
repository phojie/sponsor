import { defineConfig, presets } from 'sponsorkit'

const ZENHUB_LOGO = (width: number, y: number) => `
<a xlink:href="https://zenhub.com/" class="sponsorkit-link" target="_blank" id="Zenhub">
<svg xmlns="http://www.w3.org/2000/svg" x="${(width - 127.01) / 2}" y="${y}" width="127.01" height="32" viewBox="0 0 512 129"><path fill="#EEEFF3" d="M309.126 39.295c-12.845 0-21.816 8.899-21.816 21.64v22.782c0 2.653 2.14 4.732 4.87 4.732c2.686 0 4.87-2.123 4.87-4.732v-22.96c0-7.72 4.74-12.709 12.076-12.709c7.505 0 12.168 4.87 12.168 12.71v22.959c0 2.653 2.14 4.732 4.871 4.732c2.686 0 4.87-2.123 4.87-4.732V60.936c0-12.742-9.01-21.641-21.91-21.641h.001Zm59.272 0c-6.112 0-10.394 2.213-13.02 4.22v-21.19c0-2.56-2.186-4.643-4.872-4.643c-2.73 0-4.87 2.04-4.87 4.644v61.39c0 2.655 2.14 4.734 4.87 4.734c2.686 0 4.871-2.123 4.871-4.733v-22.96c0-9.37 6.237-12.709 12.074-12.709c7.507 0 12.17 4.87 12.17 12.71v22.959c0 2.654 2.139 4.733 4.87 4.733c2.686 0 4.87-2.123 4.87-4.733V60.936c0-12.742-8.62-21.64-20.964-21.64h.001Zm73.934.178c-2.732 0-4.871 2.04-4.871 4.644v23.047c0 7.84-4.663 12.71-12.166 12.71c-7.335 0-12.074-4.989-12.074-12.71V44.117c0-2.561-2.188-4.644-4.872-4.644c-2.732 0-4.87 2.04-4.87 4.644v22.78c0 12.795 8.968 21.73 21.816 21.73c12.843 0 21.908-8.935 21.908-21.73v-22.78c0-2.561-2.183-4.644-4.871-4.644ZM215.891 79.728l-28.88.005l31.974-31.96c.9-.845 1.395-1.965 1.395-3.153c0-2.46-2.098-4.462-4.677-4.462l-37.529.006c-2.578 0-4.676 2.002-4.676 4.462c0 2.42 2.142 4.463 4.676 4.463h27.303l-31.943 31.777l-.037.039c-.506.554-1.448 1.586-1.448 3.194c0 2.511 2.142 4.554 4.774 4.554h39.068c2.58 0 4.678-2.003 4.678-4.463c0-2.503-2.055-4.463-4.678-4.463v.001Zm270.507-40.643c-6.242 0-12.054 2.03-16.621 5.762V22.115c0-2.56-2.183-4.643-4.867-4.643c-2.732 0-4.872 2.039-4.872 4.643v40.39c-.008.308-.008.618 0 .93v.07h.004c.189 6.347 3.386 13.363 8.185 17.777l.064.061c.36.35.729.69 1.11 1.017l.64.59v-.056c4.467 3.577 10.184 5.523 16.357 5.523C500.75 88.417 512 77.583 512 63.752c0-13.832-11.249-24.666-25.602-24.666Zm16.296 24.666c0 8.923-7.135 15.913-16.24 15.913c-8.85 0-15.792-6.555-16.144-15.201l-.004-1.38c.356-8.691 7.299-15.246 16.148-15.246c9.105 0 16.24 6.99 16.24 15.914Zm-233.253 9.546c-1.633 0-2.672.944-3.677 1.858l-.07.07c-2.059 2.326-5.689 5.097-11.293 5.097c-3.265 0-6.33-.99-8.925-2.872l25.363-25.41c.975-1.07 1.408-2.094 1.408-3.317c0-1.273-.604-2.54-1.645-3.465c-4.136-3.817-10.04-6.007-16.201-6.007c-13.846 0-24.693 10.887-24.693 24.783c0 13.897 10.847 24.783 24.693 24.783c7.25 0 13.906-2.975 18.251-8.149c.794-.907 1.307-2.098 1.307-3.034c0-2.473-1.942-4.337-4.517-4.337Zm-29.065-2.099a17.208 17.208 0 0 1-1.544-7.164c0-9.134 6.838-16.288 15.568-16.288c2.682 0 5.32.76 7.259 2.064l-21.283 21.388Z"/><path fill="#AFD94F" d="m75.047 90.78l18.588 18.831c4.23 4.287 11.2 4.332 15.487.1c4.287-4.23 4.332-11.2.101-15.487l-18.93-19.177H75.048V90.78ZM53.144 37.411l-18.588-18.83c-4.232-4.288-11.2-4.333-15.487-.101c-4.287 4.23-4.332 11.2-.1 15.487l18.928 19.177h15.248V37.41h-.001Z"/><path fill="#38E1FA" d="M37.897 53.144H10.952C4.929 53.144 0 58.072 0 64.096c0 6.023 4.929 10.952 10.952 10.952h26.704l11.002-11.002l-10.76-10.901v-.001Zm79.343 0H90.535L79.533 64.145l10.76 10.902h26.947c6.023 0 10.951-4.928 10.951-10.952s-4.928-10.952-10.951-10.952Z"/><path fill="#515DF4" d="M37.655 75.047L18.772 93.93c-4.259 4.26-4.259 11.23 0 15.488c4.26 4.26 11.23 4.26 15.489 0l18.883-18.883V75.048H37.655Zm52.879-21.903l18.883-18.883c4.26-4.26 4.26-11.228 0-15.488c-4.259-4.26-11.228-4.26-15.487 0L75.047 37.656v15.487h15.487v.001Z"/><path fill="#4BC6CF" d="M75.047 37.656V10.952C75.047 4.929 70.12 0 64.095 0S53.144 4.929 53.144 10.952v26.46l11.002 11.145l10.901-10.9ZM53.144 90.535v26.704c0 6.024 4.927 10.952 10.951 10.952c6.024 0 10.952-4.928 10.952-10.952V90.78L64.044 79.634l-10.9 10.901Z"/><path fill="#50DEB4" d="M53.144 59.559v-6.415H37.898l10.76 10.902zm21.904 9.073v6.415h15.246L79.533 64.145z"/><path fill="#5575F1" d="m75.048 59.601l4.485 4.545l11.002-11.002H75.048zm-21.904 8.99l-4.486-4.546l-11.002 11.003h15.488z"/><path fill="#5073E8" d="m75.047 68.631l4.486-4.486l-4.486-4.544zm-26.389-4.586l4.486 4.546v-9.032z"/><path fill="#38BAA5" d="m68.632 75.047l-4.587 4.587L75.048 90.78V75.047zm-9.073-21.903l4.587-4.587l-11.002-11.146v15.733z"/><path fill="#2AB2C2" d="M75.048 75.048v-6.416l-6.416 6.416zM53.144 53.144v6.415l6.415-6.415z"/><path fill="#2EA7CD" d="M68.673 53.144h6.374V37.656L64.146 48.557zm-9.156 21.903h-6.373v15.488l10.9-10.901z"/><path fill="#2DA5C5" d="m64.045 79.634l4.587-4.587h-9.114zm.101-31.077l-4.587 4.587h9.114z"/><path fill="#2CA7CD" d="M75.047 53.144h-6.374l6.374 6.457zM53.144 75.048h6.373l-6.373-6.457z"/><path fill="#2CA5C8" d="M68.673 53.144h-9.114l-6.415 6.415v9.032l6.373 6.457h9.114l6.416-6.416v-9.031z"/></svg>
</a>
`

const Multiplai_LOGO = (width: number, y: number) => `
<a xlink:href="https://multiplai.tech/" class="sponsorkit-link" target="_blank" id="GoTeam">
<svg  x="${(width - 300) / 2}" y="${y}"  width="300" height="90" viewBox="0 0 300 90" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <g filter="url(#filter0_d_201_22)">
  <path d="M4 10C4 4.47715 8.47715 0 14 0H144H274C279.523 0 284 4.47715 284 10V58C284 63.5228 279.523 68 274 68H14C8.47715 68 4 63.5228 4 58V10Z" fill="white"/>
  </g>
  <path d="M47.3807 51.1493V35.4782C47.3807 31.9896 49.2924 29.7808 52.3196 29.7808C55.3018 29.7808 56.9791 31.9432 56.9791 35.2844V51.1493H63.4557V35.4782C63.4557 31.9896 65.3674 29.7808 68.3945 29.7808C71.3768 29.7808 73.0541 31.9432 73.0541 35.2844V51.1493H79.5306V35.9208C79.5306 27.9112 76.5018 23.6365 70.6778 23.6365H70.3985C66.3914 23.6365 63.7349 25.6998 62.4774 29.6844C61.219 25.7042 58.6099 23.6365 54.5563 23.6365H54.277C49.8501 23.6365 47.0549 26.1915 46.0292 31.0071V24.4718H40.9042V51.1493H47.3807ZM94.4419 51.9847C98.9153 51.9847 101.664 49.626 102.736 44.9577V51.1493H107.862V24.4157H101.385V40.1929C101.385 43.6815 99.2877 45.8438 96.3063 45.8438C93.3705 45.8438 91.4605 43.7805 91.4605 40.4883V24.4227H84.9831V39.901C84.9831 47.9106 88.2912 51.989 94.1627 51.989L94.4419 51.9847ZM121.188 51.1493V14.7565H111.546V20.3899H114.711V51.1493H121.188ZM142.295 51.4929V45.6457H138.335C135.865 45.6457 134.467 44.1714 134.467 41.5673V29.4837H142.295V24.4718H134.514V14.76H128.456V24.4718H124.403V29.4837H128.41V41.129C128.41 48.9414 131.671 51.4973 138.661 51.4973L142.295 51.4929ZM152.347 22.0991C154.863 22.0991 156.028 20.5266 156.028 18.3642C156.028 16.2019 154.864 14.6829 152.347 14.6829C149.784 14.6829 148.619 16.2063 148.619 18.3642C148.619 20.5222 149.783 22.0991 152.347 22.0991ZM156.027 51.1493V24.4683H146.013V29.5783H149.555V51.1493H156.027ZM167.503 60.9768V47.6152C169.46 50.662 172.582 52.0373 176.077 52.0373C183.345 52.0373 187.912 45.9446 187.912 38.276V37.2443C187.912 29.5792 183.206 23.6338 176.077 23.6338C173.863 23.5349 171.682 24.2218 169.883 25.5848C168.083 26.9478 166.77 28.908 166.152 31.1517V24.4691H161.026V60.9777L167.503 60.9768ZM174.446 46.2847C173.517 46.3207 172.59 46.1574 171.722 45.8049C170.854 45.4524 170.063 44.9179 169.397 44.2337C168.73 43.5496 168.202 42.73 167.845 41.8245C167.487 40.9191 167.308 39.9465 167.317 38.9658V37.0007C167.272 35.9962 167.424 34.9928 167.765 34.0537C168.106 33.1146 168.628 32.2603 169.298 31.5446C169.968 30.8289 170.771 30.2675 171.657 29.8957C172.544 29.524 173.493 29.3499 174.446 29.3846C178.639 29.3846 181.435 32.775 181.435 37.7869C181.435 42.7988 178.595 46.2882 174.447 46.2882L174.446 46.2847ZM199.464 51.1493V15.2833H189.823V20.3934H192.991V51.1493H199.464ZM213.116 51.8374C217.403 51.8374 220.152 49.8214 221.27 46.0393V51.1493H226.396V34.5938C226.396 27.1741 222.436 24.0756 214.654 24.0756C212.138 24.0756 208.919 24.2229 206.78 24.4192V30.2173C209.389 30.021 213.49 29.8737 215.819 29.8737C218.755 29.8737 220.2 31.3971 220.2 34.4439V34.6893H215.027C208.271 34.6893 203.938 37.3916 203.938 43.2388C203.941 48.6951 207.576 51.8409 213.121 51.8409L213.116 51.8374ZM214.933 46.9728C211.951 46.9728 210.32 45.3512 210.32 42.8943C210.32 40.4375 211.998 38.7668 214.933 38.7668H220.199V41.2728C220.017 45.6492 217.594 46.9763 214.938 46.9763L214.933 46.9728ZM236.736 22.2244C239.252 22.2244 240.417 20.6519 240.417 18.4896C240.417 16.3272 239.254 14.8082 236.736 14.8082C234.174 14.8082 233.008 16.3316 233.008 18.4896C233.008 20.6476 234.174 22.2244 236.736 22.2244ZM240.102 51.1493V24.4683H230.082V29.5783H233.619V51.1493H240.102Z" fill="#4D11F6"/>
  <path d="M20.3123 33.7096L21.9514 28.815L23.6536 29.9799L25.3201 28.8165L27.0114 33.7097C27.5456 33.5074 28.0622 33.2569 28.5555 32.9608C29.0569 32.6416 29.5332 32.2805 29.9799 31.8811L25.3234 25.9705L23.6535 26.9872L21.9519 25.9707L17.3147 31.9001C17.7515 32.2769 18.2156 32.617 18.7028 32.9173C19.2212 33.2206 19.759 33.4853 20.3123 33.7096Z" fill="#4D11F6"/>
  <path d="M17.1511 15.8328L20.3512 19.7771L18.5434 20.7492L18.6655 22.8528L13.8015 21.9509C13.7083 22.5504 13.6593 23.1568 13.6552 23.7644C13.6661 24.3725 13.7216 24.9788 13.8214 25.5779L21.0011 24.2789V22.2454L22.6868 21.1997L20.1359 14C19.6027 14.2187 19.0855 14.4782 18.5882 14.7766C18.0865 15.093 17.6063 15.446 17.1511 15.8328Z" fill="#4D11F6"/>
  <path d="M30.0598 15.8845L26.8598 19.8288L28.6676 20.8009L28.5454 22.9045L33.4095 22.0026C33.4814 22.6339 33.5197 23.2689 33.5242 23.9046C33.5184 24.4822 33.4742 25.0586 33.392 25.6296L26.2098 24.3306V22.2971L24.5242 21.2514L27.0742 14.0517C27.6089 14.2701 28.1276 14.5297 28.626 14.8283C29.1269 15.1444 29.6061 15.4973 30.0598 15.8845Z" fill="#4D11F6"/>
  <path d="M251.765 33.3401V32.0718H250.703C250.566 32.0862 250.427 32.0681 250.297 32.0188C250.167 31.9696 250.049 31.8904 249.952 31.787C249.855 31.6837 249.781 31.5587 249.735 31.4214C249.689 31.284 249.673 31.1376 249.688 30.9928V27.6472H251.766V26.5647H249.688V24.1481H248.379V26.5647H247.329V27.6472H248.379V30.8692C248.379 32.7476 249.229 33.3445 250.809 33.3445L251.765 33.3401ZM255.754 33.4891C256.413 33.549 257.07 33.3533 257.602 32.9387C258.134 32.5242 258.505 31.9193 258.644 31.2374H257.355C257.234 31.572 257.011 31.8543 256.72 32.0392C256.429 32.2242 256.088 32.3011 255.751 32.2576C255.497 32.2701 255.244 32.2265 255.007 32.1294C254.771 32.0323 254.556 31.884 254.377 31.6941C254.198 31.5041 254.059 31.2767 253.968 31.0266C253.878 30.7764 253.838 30.509 253.852 30.2417H258.756V29.657C258.781 29.2204 258.72 28.783 258.576 28.3729C258.431 27.9628 258.207 27.5892 257.917 27.2763C257.627 26.9633 257.279 26.7179 256.893 26.5559C256.508 26.394 256.095 26.319 255.68 26.3359C255.252 26.3248 254.827 26.4079 254.432 26.5796C254.036 26.7514 253.679 27.0083 253.382 27.3337C253.086 27.6592 252.857 28.0462 252.711 28.47C252.564 28.8939 252.503 29.3453 252.531 29.7955V30.0287C252.504 30.4845 252.569 30.9412 252.72 31.3691C252.872 31.7969 253.107 32.1866 253.41 32.5127C253.713 32.8389 254.078 33.0943 254.48 33.2625C254.883 33.4307 255.315 33.5079 255.748 33.4891H255.754ZM255.684 27.5683C255.904 27.5542 256.125 27.5872 256.332 27.6655C256.54 27.7438 256.731 27.8656 256.893 28.0237C257.055 28.1818 257.185 28.3728 257.275 28.5853C257.365 28.7977 257.414 29.0272 257.417 29.26H253.887C253.917 28.7867 254.121 28.3444 254.456 28.0283C254.791 27.7121 255.231 27.5473 255.68 27.5692L255.684 27.5683ZM262.773 33.4891C263.134 33.524 263.498 33.4829 263.844 33.3682C264.19 33.2536 264.512 33.0677 264.789 32.8212C265.067 32.5748 265.295 32.2727 265.461 31.9325C265.627 31.5924 265.728 31.2208 265.757 30.8394H264.409C264.359 31.2482 264.16 31.6202 263.854 31.8758C263.547 32.1315 263.158 32.2506 262.769 32.2077C261.523 32.2077 260.941 31.2128 260.941 29.9191C260.941 28.5885 261.531 27.6182 262.757 27.6182C263.133 27.5824 263.509 27.7005 263.805 27.9481C264.101 28.1957 264.296 28.554 264.349 28.9488H265.679C265.652 28.5739 265.555 28.2083 265.393 27.8734C265.23 27.5385 265.007 27.2409 264.735 26.9979C264.463 26.7549 264.147 26.5713 263.807 26.4578C263.467 26.3443 263.109 26.3032 262.754 26.3368C262.323 26.3251 261.895 26.4076 261.496 26.5792C261.097 26.7508 260.736 27.0076 260.435 27.3336C260.135 27.6596 259.902 28.0477 259.751 28.4734C259.6 28.899 259.534 29.3531 259.558 29.8069V30.0287C259.534 30.4834 259.6 30.9384 259.752 31.3647C259.904 31.791 260.139 32.1792 260.441 32.5047C260.743 32.8302 261.106 33.0858 261.507 33.2553C261.908 33.4248 262.338 33.5044 262.769 33.4891H262.773ZM268.328 33.2656V29.3976C268.307 29.1785 268.331 28.9573 268.397 28.7484C268.463 28.5396 268.57 28.3478 268.711 28.1857C268.853 28.0237 269.025 27.8949 269.217 27.808C269.408 27.7211 269.616 27.6779 269.824 27.6814C270.018 27.6716 270.211 27.7057 270.39 27.7813C270.57 27.8569 270.733 27.9723 270.866 28.1197C271 28.267 271.103 28.4429 271.167 28.6356C271.231 28.8282 271.255 29.033 271.237 29.2363V33.2683H272.62V29.4493C272.62 27.4587 271.842 26.3648 270.355 26.3648H270.293C269.87 26.3353 269.449 26.4516 269.094 26.6961C268.738 26.9407 268.468 27.3003 268.323 27.7208V24.1885H266.943V33.2691L268.328 33.2656Z" fill="#4D11F6"/>
  <defs>
  <filter id="filter0_d_201_22" x="0" y="0" width="288" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
  <feOffset dy="4"/>
  <feGaussianBlur stdDeviation="2"/>
  <feComposite in2="hardAlpha" operator="out"/>
  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_201_22"/>
  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_201_22" result="shape"/>
  </filter>
  </defs>
</svg>
</a>
`

export default defineConfig({
  github: {
    login: 'phojie',
    type: 'user',
  },
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: presets.xs,
    },
    {
      title: 'Backers',
      preset: presets.base,
    },
    {
      title: 'Sponsors',
      monthlyDollars: 7,
      preset: {
        avatar: {
          size: 42,
        },
        boxWidth: 52,
        boxHeight: 52,
        container: {
          sidePadding: 30,
        },
      },
    },
    {
      title: 'Silver Sponsors',
      monthlyDollars: 50,
      preset: presets.medium,
      composeAfter(compose, _, config) {
        compose
          .addSpan(20)
          .addText('Silver Sponsors', 'sponsorkit-tier-title')
          .addSpan(10)
          .addRaw(ZENHUB_LOGO(config.width!, compose.height))
          .addSpan(65)
      }
    },
    {
      title: 'Gold Sponsors',
      monthlyDollars: 100,
      preset: presets.large,
    },
    {
      title: 'Platinum Sponsors',
      monthlyDollars: 500,
      preset: presets.xl,
    },
    {
      title: 'Special Sponsor',
      monthlyDollars: Infinity,
      composeAfter(compose, _, config) {
        compose
          .addSpan(20)
          .addText('Special Sponsors', 'sponsorkit-tier-title')
          .addSpan(10)
          .addRaw(Multiplai_LOGO(config.width!, compose.height))
          .addSpan(130)
      }
    },
  ]
})
