export const metadata = {
  title: "Daynamic Blog",
  description: "This is Daynamic Blogs",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
