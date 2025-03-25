import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
    darkMode: ["class"],
    content: ["./src/**/*.tsx"],
  theme: {
  	extend: {
  		fontFamily: {
  			proxima: [
  				'proxima-nova',
  				'sans-serif'
  			],
  			sans: [
  				'proxima-nova',
                    ...fontFamily.sans
                ]
  		},
  		colors: {
  			background: '#121212',
  			foreground: '#f5f5f5',
  			primary: {
  				DEFAULT: '#1a1a1a',
  				foreground: '#ffffff'
  			},
  			secondary: {
  				DEFAULT: '#00b8a9',
  				foreground: '#ffffff'
  			},
  			accent: {
  				DEFAULT: '#ff7e67',
  				foreground: '#ffffff'
  			},
  			muted: {
  				DEFAULT: '#1e1e1e',
  				foreground: '#a0a0a0'
  			},
  			card: {
  				DEFAULT: '#1a1a1a',
  				foreground: '#f5f5f5'
  			},
  			border: '#2a2a2a',
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		container: {
  			center: true,
  			padding: {
  				DEFAULT: '1rem',
  				sm: '1.5rem',
  				md: '2rem',
  				lg: '3rem'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(10px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		},
  		animation: {
  			fadeIn: 'fadeIn 0.8s ease-out forwards'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
