import Link from "next/link";

export const metadata = {
	title: "Not Found ",
};

export default async function NotFound() {
	return (
		<main className="flex flex-col items-center justify-center h-screen grow gap-4">
			<h1 className="text-4xl lg:text-7xl font-bold text-slate-400 animate-pulse">
				404 Not Found
			</h1>
			<h2 className="text-sm lg:text-lg text-slate-200">
				Opps you can&apos;t find what you&apos;re looking for on this page!
			</h2>
			<p className="text-center text-slate-200 md:text-lg">
				Kembali ke{" "}
				<Link
					className="transition-all hover:underline hover:text-orange-400"
					href={"/"}>
					{"Beranda"}
				</Link>
			</p>
		</main>
	);
}
