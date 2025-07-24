import type {ReactNode} from 'react';
import {HomeLayout} from 'fumadocs-ui/layouts/home';
import {baseOptions} from '@/app/layout.config';
import ReactLenis from 'lenis/react';

export default function Layout({children}: { children: ReactNode }) {
    return <HomeLayout {...baseOptions}>
        <ReactLenis root>
            {children}
        </ReactLenis>
    </HomeLayout>;
}
