// Shown at the top of every screen of the demo on justcallmepratt.dev. The app is a
// prototype: its numbers, athletes, schools and payment screens are sample
// data, and nothing typed into it is sent anywhere. Inline styles, because the
// app's CSS is a precompiled Tailwind build and may not contain new classes.
export function DemoBanner() {
  return (
    <div
      role="note"
      aria-label="About this demo"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem 1rem',
        padding: '0.5rem 1rem',
        background: '#111827',
        color: '#F9FAFB',
        fontSize: '0.8125rem',
        lineHeight: 1.4,
        textAlign: 'center',
      }}
    >
      <span>
        Prototype demo: all figures, athletes, schools and payments are sample data. Nothing you
        enter is saved or sent.
      </span>
      <a href="https://justcallmepratt.dev/projects" style={{ color: '#7DD3FC', textDecoration: 'underline' }}>
        More projects by Pratham Sachan
      </a>
    </div>
  )
}
