const Footer = () => {
    return (
        <>


            <footer
                className="fixed bottom-0 left-0 z-20 w-full p-2 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-900 dark:border-gray-600">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400 p-0">© 2024 <a href="https://geoffreycanivet.netlify.app/"
                                                                                        className="hover:underline">Geoffrey Canivet™</a>. All Rights NOT Reserved.
    </span>
                <ul className="flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </footer>


        </>
    );
};

export default Footer;