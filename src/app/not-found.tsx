import Link from "next/link";

export default async function NotFound() {
	return (
		<main className="flex items-center justify-center w-full h-screen gap-4">
			<div className="flex flex-col items-center">
				<h1 className="text-4xl lg:text-7xl font-bold text-slate-400 animate-bounce">
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
			</div>
		</main>
	);
}
