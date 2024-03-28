import {
	AiOutlineInstagram,
	AiOutlineTwitter,
	AiOutlineYoutube,
} from "react-icons/ai";

export const links = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "Movies",
		href: "/movies",
	},
	{
		name: "About",
		href: "/about",
	},
] as const;

export const socialLink = [
	{
		name: "Instagran",
		href: "https://www.instagram.com",
		icon: <AiOutlineInstagram size={20} />,
	},
	{
		name: "X",
		href: "https://twitter.com/home",
		icon: <AiOutlineTwitter size={20} />,
	},
	{
		name: "Youtube",
		href: "https://www.youtube.com/",
		icon: <AiOutlineYoutube size={20} />,
	},
] as const;
