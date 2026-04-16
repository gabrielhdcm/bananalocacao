export function Toast({ message, visible }) {
  const toastStateClass = visible ? 'block' : 'hidden';

  return (
    <div
      className={`fixed right-4 top-24 z-[70] ${toastStateClass} rounded-2xl bg-construcao px-5 py-3 text-sm font-semibold text-white shadow-strong`}
      role="status"
      aria-live="polite"
    >
      {message}
    </div>
  );
}
