import './globals.css'

export const metadata = {
  title: 'Hisab - Professional Workshop Salary Management',
  description: 'Complete salary management system for body workshop daily wage workers',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>{children}</body>
    </html>
  )
}