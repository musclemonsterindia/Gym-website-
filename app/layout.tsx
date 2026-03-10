import "./globals.css";

export const metadata = {
  title: "Muscle Monster Gym",
  description: "Best Gym in Rajeev Nagar Begumpur Delhi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
