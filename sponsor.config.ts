import { BadgePreset, defineConfig, presets } from 'sponsorkit'

const ZENHUB_LOGO = (width: number, y: number) => `
<a xlink:href="https://zenhub.com/" class="sponsorkit-link" target="_blank" id="Zenhub">
<svg xmlns="http://www.w3.org/2000/svg" x="${(width - 127.01) / 2}" y="${y}" width="127.01" height="32" viewBox="0 0 512 129"><path fill="#EEEFF3" d="M309.126 39.295c-12.845 0-21.816 8.899-21.816 21.64v22.782c0 2.653 2.14 4.732 4.87 4.732c2.686 0 4.87-2.123 4.87-4.732v-22.96c0-7.72 4.74-12.709 12.076-12.709c7.505 0 12.168 4.87 12.168 12.71v22.959c0 2.653 2.14 4.732 4.871 4.732c2.686 0 4.87-2.123 4.87-4.732V60.936c0-12.742-9.01-21.641-21.91-21.641h.001Zm59.272 0c-6.112 0-10.394 2.213-13.02 4.22v-21.19c0-2.56-2.186-4.643-4.872-4.643c-2.73 0-4.87 2.04-4.87 4.644v61.39c0 2.655 2.14 4.734 4.87 4.734c2.686 0 4.871-2.123 4.871-4.733v-22.96c0-9.37 6.237-12.709 12.074-12.709c7.507 0 12.17 4.87 12.17 12.71v22.959c0 2.654 2.139 4.733 4.87 4.733c2.686 0 4.87-2.123 4.87-4.733V60.936c0-12.742-8.62-21.64-20.964-21.64h.001Zm73.934.178c-2.732 0-4.871 2.04-4.871 4.644v23.047c0 7.84-4.663 12.71-12.166 12.71c-7.335 0-12.074-4.989-12.074-12.71V44.117c0-2.561-2.188-4.644-4.872-4.644c-2.732 0-4.87 2.04-4.87 4.644v22.78c0 12.795 8.968 21.73 21.816 21.73c12.843 0 21.908-8.935 21.908-21.73v-22.78c0-2.561-2.183-4.644-4.871-4.644ZM215.891 79.728l-28.88.005l31.974-31.96c.9-.845 1.395-1.965 1.395-3.153c0-2.46-2.098-4.462-4.677-4.462l-37.529.006c-2.578 0-4.676 2.002-4.676 4.462c0 2.42 2.142 4.463 4.676 4.463h27.303l-31.943 31.777l-.037.039c-.506.554-1.448 1.586-1.448 3.194c0 2.511 2.142 4.554 4.774 4.554h39.068c2.58 0 4.678-2.003 4.678-4.463c0-2.503-2.055-4.463-4.678-4.463v.001Zm270.507-40.643c-6.242 0-12.054 2.03-16.621 5.762V22.115c0-2.56-2.183-4.643-4.867-4.643c-2.732 0-4.872 2.039-4.872 4.643v40.39c-.008.308-.008.618 0 .93v.07h.004c.189 6.347 3.386 13.363 8.185 17.777l.064.061c.36.35.729.69 1.11 1.017l.64.59v-.056c4.467 3.577 10.184 5.523 16.357 5.523C500.75 88.417 512 77.583 512 63.752c0-13.832-11.249-24.666-25.602-24.666Zm16.296 24.666c0 8.923-7.135 15.913-16.24 15.913c-8.85 0-15.792-6.555-16.144-15.201l-.004-1.38c.356-8.691 7.299-15.246 16.148-15.246c9.105 0 16.24 6.99 16.24 15.914Zm-233.253 9.546c-1.633 0-2.672.944-3.677 1.858l-.07.07c-2.059 2.326-5.689 5.097-11.293 5.097c-3.265 0-6.33-.99-8.925-2.872l25.363-25.41c.975-1.07 1.408-2.094 1.408-3.317c0-1.273-.604-2.54-1.645-3.465c-4.136-3.817-10.04-6.007-16.201-6.007c-13.846 0-24.693 10.887-24.693 24.783c0 13.897 10.847 24.783 24.693 24.783c7.25 0 13.906-2.975 18.251-8.149c.794-.907 1.307-2.098 1.307-3.034c0-2.473-1.942-4.337-4.517-4.337Zm-29.065-2.099a17.208 17.208 0 0 1-1.544-7.164c0-9.134 6.838-16.288 15.568-16.288c2.682 0 5.32.76 7.259 2.064l-21.283 21.388Z"/><path fill="#AFD94F" d="m75.047 90.78l18.588 18.831c4.23 4.287 11.2 4.332 15.487.1c4.287-4.23 4.332-11.2.101-15.487l-18.93-19.177H75.048V90.78ZM53.144 37.411l-18.588-18.83c-4.232-4.288-11.2-4.333-15.487-.101c-4.287 4.23-4.332 11.2-.1 15.487l18.928 19.177h15.248V37.41h-.001Z"/><path fill="#38E1FA" d="M37.897 53.144H10.952C4.929 53.144 0 58.072 0 64.096c0 6.023 4.929 10.952 10.952 10.952h26.704l11.002-11.002l-10.76-10.901v-.001Zm79.343 0H90.535L79.533 64.145l10.76 10.902h26.947c6.023 0 10.951-4.928 10.951-10.952s-4.928-10.952-10.951-10.952Z"/><path fill="#515DF4" d="M37.655 75.047L18.772 93.93c-4.259 4.26-4.259 11.23 0 15.488c4.26 4.26 11.23 4.26 15.489 0l18.883-18.883V75.048H37.655Zm52.879-21.903l18.883-18.883c4.26-4.26 4.26-11.228 0-15.488c-4.259-4.26-11.228-4.26-15.487 0L75.047 37.656v15.487h15.487v.001Z"/><path fill="#4BC6CF" d="M75.047 37.656V10.952C75.047 4.929 70.12 0 64.095 0S53.144 4.929 53.144 10.952v26.46l11.002 11.145l10.901-10.9ZM53.144 90.535v26.704c0 6.024 4.927 10.952 10.951 10.952c6.024 0 10.952-4.928 10.952-10.952V90.78L64.044 79.634l-10.9 10.901Z"/><path fill="#50DEB4" d="M53.144 59.559v-6.415H37.898l10.76 10.902zm21.904 9.073v6.415h15.246L79.533 64.145z"/><path fill="#5575F1" d="m75.048 59.601l4.485 4.545l11.002-11.002H75.048zm-21.904 8.99l-4.486-4.546l-11.002 11.003h15.488z"/><path fill="#5073E8" d="m75.047 68.631l4.486-4.486l-4.486-4.544zm-26.389-4.586l4.486 4.546v-9.032z"/><path fill="#38BAA5" d="m68.632 75.047l-4.587 4.587L75.048 90.78V75.047zm-9.073-21.903l4.587-4.587l-11.002-11.146v15.733z"/><path fill="#2AB2C2" d="M75.048 75.048v-6.416l-6.416 6.416zM53.144 53.144v6.415l6.415-6.415z"/><path fill="#2EA7CD" d="M68.673 53.144h6.374V37.656L64.146 48.557zm-9.156 21.903h-6.373v15.488l10.9-10.901z"/><path fill="#2DA5C5" d="m64.045 79.634l4.587-4.587h-9.114zm.101-31.077l-4.587 4.587h9.114z"/><path fill="#2CA7CD" d="M75.047 53.144h-6.374l6.374 6.457zM53.144 75.048h6.373l-6.373-6.457z"/><path fill="#2CA5C8" d="M68.673 53.144h-9.114l-6.415 6.415v9.032l6.373 6.457h9.114l6.416-6.416v-9.031z"/></svg>
</a>
`

const GOTEAM_LOGO = (width: number, y: number) => `
<a xlink:href="https://go.team/" class="sponsorkit-link" target="_blank" id="GoTeam">
<svg  x="${(width - 296) / 2}" y="${y}" width="296" height="86" viewBox="0 0 296 86" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="296" height="86" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_2_2" transform="scale(0.000626852 0.00215054)"/>
</pattern>
<image id="image0_2_2" width="1596" height="465" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>
</a>
`

const past: BadgePreset = {
  avatar: {
    size: 20,
  },
  boxWidth: 22,
  boxHeight: 22,
  container: {
    sidePadding: 35,
  },
}

export default defineConfig({
  github: {
    login: 'phojie',
    type: 'user',
  },
  tiers: [
    {
      title: 'Past Sponsors',
      monthlyDollars: -1,
      preset: past,
    },
    {
      title: 'Backers',
      preset: presets.small,
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
          .addRaw(GOTEAM_LOGO(config.width!, compose.height))
          .addSpan(130)
      }
    },
  ]
})
