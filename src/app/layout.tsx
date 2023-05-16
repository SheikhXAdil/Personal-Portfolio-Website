import './globals.css'

export const metadata = {
  title: 'Muhammad Adil Nadeem',
  description: "Hi I'm a full stack NextJs developer. Welcome to my portfolio website created with NextJs 13 and Tailwind CSS",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
