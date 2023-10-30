import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      
      'white': '#ffffff',
     'green':'#C1E502',
     'black':'#1D1D1D',
     'gray':'#EEEEEE',
    
      
    },
  },
  plugins: [],
}
export default config
