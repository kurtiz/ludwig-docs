import type {BaseLayoutProps, LinkItemType} from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
    nav: {
        title: (
            <>
                <img
                    src="/logo-light.png"
                    alt="Fumadocs Logo"
                    className="w-18 hidden dark:block"
                />
                <img
                    src="/logo-dark.png"
                    alt="Fumadocs Logo"
                    className="w-18 dark:hidden block"
                />
            </>
        ),
        transparentMode: 'top',
    },
    githubUrl: 'https://github.com/ludwig-framework/ludwig',
    // see https://fumadocs.dev/docs/ui/navigation/links
};

export const linkItems: LinkItemType[] = [
    {
        text: '',
        url: '/',
        active: 'nested-url',
    },
]