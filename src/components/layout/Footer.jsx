import Logo from "components/ui/Logo";
import { footerNavigation } from "src/data";

const TwoColumnFooter = () => {
  return (
    <footer aria-labelledby="footer-heading" className="z-container pt-20">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="space-y-8">
            <Logo />
            <p className="max-w-xs leading-6 text-gray-700 dark:text-gray-300">
              Cooking Made Fun and Easy: Unleash Your Inner Chef.
            </p>
            <div className="flex space-x-6 text-gray-700  dark:text-gray-300">
              <div>
                Made with ❤️ by{" "}
                <a
                  href="https://github.com/zeynabmvs"
                  target="_blank"
                  className="link"
                >
                  Zeynab
                </a>
                .
              </div>
            </div>
          </div>
          {/* Navigations */}
          <div className="mt-16 grid grid-cols-2 gap-14 md:grid-cols-2 lg:mt-0 xl:col-span-2">
            <div className="md:mt-0">
              <h3 className="font-semibold leading-6 text-gray-900  dark:text-gray-200">
                Connect
              </h3>
              <div className="mt-6 space-y-4">
                {footerNavigation.connect.map((item) => (
                  <div key={item.name}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-200"
                    >
                      {item.name}
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div>
                <h3 className="font-semibold leading-6 text-gray-900 dark:text-gray-200">
                  Categories
                </h3>
                <div className="mt-6 space-y-4">
                  {footerNavigation.Categories.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="leading-6 text-gray-700 hover:text-gray-900 dark:text-gray-600 hover:dark:text-gray-200"
                      >
                        {item.name}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-900/10 py-8 sm:mt-20 lg:mt-24 dark:border-gray-100/10">
          <p className="text-xs leading-5 text-gray-700 dark:text-gray-300">
            &copy; 2024 Recipedia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default TwoColumnFooter;
