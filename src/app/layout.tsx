import type { Metadata } from "next";
import { Allura } from "next/font/google";
import "./globals.css";

const inter = Allura({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nuestra Boda E & K",
	description: "Pagina creada por Alex Wong",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
