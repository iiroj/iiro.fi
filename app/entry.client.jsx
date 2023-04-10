import { RemixBrowser } from '@remix-run/react';
import { startTransition, StrictMode } from 'react';
import { hydrateRoot } from 'react-dom/client';

const hydrate = () => {
    startTransition(() => {
        hydrateRoot(
            document,
            <StrictMode>
                <RemixBrowser />
            </StrictMode>,
        );
    });
};

if (typeof requestIdleCallback === 'function') {
    requestIdleCallback(hydrate);
} else {
    requestAnimationFrame(hydrate);
}
