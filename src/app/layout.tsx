import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/navbar";

const inter = Inter({ subsets: ["latin"] });

const plusJakarta = Plus_Jakarta_Sans({
	weight: ["400", "500", "600", "700", "800"],
	subsets: ["latin"],
	variable: "--plus-jakarta-sans",
});

export const metadata: Metadata = {
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_APP_URL ??
			`http://localhost:${process.env.PORT || 3000}.`
	),
	title: {
		template: "%s | Vilmx",
		default: "Vilmx",
	},
	description: "Search your favorite film in this website.",
	keywords: "Vilmx movie site, Vilmx",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} ${plusJakarta.variable}`}>
				<Navbar />
				<main className="w-full flex flex-col min-h-screen max-w-screen-2xl mx-auto pt-[72px]">
					{children}
				</main>
			</body>
		</html>
	);
}
