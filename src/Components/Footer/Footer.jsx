import logo from '../../Assets/logo2.png';

const LinkList = ({ title, links = [] }) => (
    <div>
        <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase">{title}</h2>
        <ul className="text-gray-600">
            {links.map((link, index) => (
                <li key={index} className="mb-4">
                    <a href={link.href} className="hover:underline">{link.label}</a>
                </li>
            ))}
        </ul>
    </div>
);

const Footer = () => {
    return (
        <footer className="p-4 bg-white sm:p-6 text-jost">
            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="mx-20 bg-white md:flex md:justify-between">
                <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-5">
                    <div>
                        <a href="/" className="flex items-center mb-4">
                            <img src={logo} className="h-8 mr-3" alt="Logo" />
                        </a>
                        <div className="text-gray-600">
                            We are a student group acting independently of the University at Buffalo. We take full responsibility for our organization and this website.
                        </div>
                    </div>

                    <LinkList title="General" links={[{ href: "/", label: "About" }]} />
                    <LinkList title="Companies" />
                    <LinkList title="Student" links={[
                        { href: "#", label: "For Students" },
                        { href: "#", label: "Apply" }
                    ]} />
                    <div>
                        <h2 className="mb-6 text-md font-semibold text-gray-900 uppercase">Contact Us</h2>
                        <ul className="text-gray-600">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">ubproductspace@gmail.com</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-500 hover:text-gray-900">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        {/* ... SVG paths for the Instagram logo ... */}
                                    </svg>
                                    <span className="sr-only">Instagram page</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">© 2023 All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
