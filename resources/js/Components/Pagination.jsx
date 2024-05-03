import { Link } from "@inertiajs/react";

export default function Pagination({ links }) {
    return (
        <nav className="mt-4 text-center">
            {links.map((link) => (
                <Link
                    href={link.url || ""}
                    key={link.label}
                    className={
                        "inline-block px-3 py-2 text-xs text-gray-200 rounded-lg" +
                        (link.active ? "bg-gray-950" : " ") +
                        (!link.url
                            ? "!text-gray-500 cursor-not-allowed"
                            : "hover:bg-gray-950")
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}
                ></Link>
            ))}
        </nav>
    );
}
