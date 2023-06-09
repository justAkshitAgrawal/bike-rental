import Navbar from '@/components/Navbar'
import './globals.css'


export const metadata = {
  title: 'Electric City | E-Bikes',
  description: 'Rent E-Bikes in your city',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <header>
      <Navbar/>
      </header> */}
      <body className=' bg-[#f3f4f1] font-geologica'>
        {children}</body>
    </html>
  )
}
