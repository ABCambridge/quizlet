const base =
  "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-40";

export const buttonStyles = {
  primary: `${base} bg-blue-600 text-white hover:bg-blue-700`,
  secondary: `${base} border border-slate-300 bg-white text-slate-800 hover:bg-slate-100`,
  danger: `${base} border border-red-300 bg-white text-red-700 hover:bg-red-50`,
} as const;

// TODO: add styles for importing/exporting
