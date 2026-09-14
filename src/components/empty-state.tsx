import type { ReactNode } from 'react';

/** Shared by /projects and /blog while their content arrays are empty. */
export function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: ReactNode;
}) {
  return (
    <div className="rounded-xl bg-surface-2 px-6 py-16 text-center">
      <p className="text-h3 text-ink">{title}</p>
      <p className="mx-auto mt-2 max-w-md text-body text-ink-muted">{body}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
