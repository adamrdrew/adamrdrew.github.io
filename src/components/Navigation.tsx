import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';

interface NavLink {
  href: string;
  label: string;
}

interface NavigationProps {
  links: NavLink[];
}

export default function Navigation({ links }: NavigationProps) {
  return (
    <Disclosure as="nav" className="bg-background-secondary dark:bg-background-dark-secondary border-b border-border dark:border-border-dark">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Desktop navigation */}
              <div className="hidden md:flex md:space-x-8">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-text-secondary dark:text-text-dark-secondary hover:text-accent-primary dark:hover:text-accent-dark-primary transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md text-text-secondary dark:text-text-dark-secondary hover:text-accent-primary dark:hover:text-accent-dark-primary hover:bg-background-tertiary dark:hover:bg-background-dark-tertiary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-primary dark:focus:ring-accent-dark-primary">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="block h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile menu panel */}
          <DisclosurePanel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-text-secondary dark:text-text-dark-secondary hover:text-accent-primary dark:hover:text-accent-dark-primary hover:bg-background-tertiary dark:hover:bg-background-dark-tertiary transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
