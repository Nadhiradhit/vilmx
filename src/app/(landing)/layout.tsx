import Footer from "@/components/footer/footer";
import { PropsWithChildren } from "react";
function Layout(props: PropsWithChildren) {
	return (
		<>
			{props.children}
			<Footer />
		</>
	);
}

export default Layout;
