function GChider() {
  return (
    <style>{`
      /* Hide the native cursor everywhere */
      * { cursor: none !important; }

      /* Avoid text selection "I-beam" flashes while dragging the custom cursor */
      html, body { -webkit-tap-highlight-color: transparent; outline:none; }
    `}</style>
  );
}

export default GChider